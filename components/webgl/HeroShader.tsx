"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uRes;
uniform float uIntensity;

vec3 colA = vec3(0.431, 0.227, 1.000); // violet #6E3AFF
vec3 colB = vec3(0.000, 0.941, 1.000); // cyan #00F0FF
vec3 colDeep = vec3(0.039, 0.039, 0.058); // bg

// hash + noise
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){
  vec2 i=floor(p); vec2 f=fract(p);
  vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(hash(i+vec2(0,0)),hash(i+vec2(1,0)),u.x),
             mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y);
}

float fbm(vec2 p){
  float v=0.0; float a=0.5;
  mat2 r=mat2(0.8,-0.6,0.6,0.8);
  for(int i=0;i<6;i++){
    v += a*noise(p);
    p = r*p*2.0;
    a *= 0.5;
  }
  return v;
}

void main(){
  vec2 uv = vUv;
  vec2 p = uv;
  float aspect = uRes.x / max(uRes.y, 1.0);
  p.x *= aspect;

  vec2 mouse = uMouse;
  mouse.x *= aspect;

  float t = uTime * 0.07;
  vec2 q = vec2(fbm(p*1.6 + t), fbm(p*1.6 - t + 4.3));
  vec2 r = vec2(fbm(p*2.4 + q + vec2(1.7,9.2) + t*1.2),
                fbm(p*2.4 + q + vec2(8.3,2.8) - t*0.7));
  float n = fbm(p*2.0 + r);

  // mouse warp
  float md = distance(p, mouse);
  n += smoothstep(0.55, 0.0, md) * 0.35 * uIntensity;

  // distance from a soft center (radial darkening)
  vec2 c = vec2(0.5*aspect, 0.5);
  float vign = smoothstep(1.1, 0.2, distance(p, c));

  vec3 col = mix(colDeep, colA, smoothstep(0.15, 0.55, n));
  col = mix(col, colB, smoothstep(0.55, 0.95, n));
  col *= vign;

  // soft band of light from top
  col += colA * 0.12 * smoothstep(0.0, 0.6, 1.0 - uv.y);

  // grain
  float g = (hash(uv*uRes + uTime) - 0.5) * 0.04;
  col += g;

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function HeroShader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    const w = el.clientWidth;
    const h = el.clientHeight;
    renderer.setSize(w, h, false);
    el.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uRes: { value: new THREE.Vector2(w, h) },
      uIntensity: { value: 1.0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
    });
    const geo = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geo, material);
    scene.add(mesh);

    const targetMouse = new THREE.Vector2(0.5, 0.5);

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      targetMouse.x = (e.clientX - rect.left) / rect.width;
      targetMouse.y = 1.0 - (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      const w2 = el.clientWidth;
      const h2 = el.clientHeight;
      renderer.setSize(w2, h2, false);
      uniforms.uRes.value.set(w2, h2);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    let visible = true;
    const start = performance.now();
    const tick = () => {
      if (visible) {
        const now = performance.now();
        uniforms.uTime.value = (now - start) / 1000;
        uniforms.uMouse.value.x += (targetMouse.x - uniforms.uMouse.value.x) * 0.05;
        uniforms.uMouse.value.y += (targetMouse.y - uniforms.uMouse.value.y) * 0.05;
        renderer.render(scene, camera);
      }
      if (!reduce) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible = e.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(el);
    if (reduce) {
      uniforms.uIntensity.value = 0.0;
      renderer.render(scene, camera);
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === el) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className="absolute inset-0" aria-hidden />;
}
