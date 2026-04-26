"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ru";

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = (localStorage.getItem("nx-lang") as Lang | null) ?? null;
      if (saved === "ru" || saved === "en") {
        setLangState(saved);
        document.documentElement.lang = saved;
        return;
      }
      const nav = navigator.language?.toLowerCase() ?? "";
      if (nav.startsWith("ru")) {
        setLangState("ru");
        document.documentElement.lang = "ru";
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("nx-lang", l);
      document.documentElement.lang = l;
    } catch {}
  };

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}

export function useT<T extends Record<string, unknown>>(dict: { en: T; ru: T }): T {
  const { lang } = useLang();
  return dict[lang];
}
