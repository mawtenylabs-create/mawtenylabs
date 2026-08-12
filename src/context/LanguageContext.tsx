/* eslint-disable react-refresh/only-export-components */
// ─── Language Context ─────────────────────────────────────────────────────────
// Provides { lang, t, setLang, isRTL } to the entire component tree.
// Handles localStorage persistence and document-level updates.

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import {
  type Language,
  type Translations,
  translations,
  getInitialLanguage,
  persistLanguage,
  applyLanguageToDocument,
} from "../i18n/i18n";

// ── Context shape ──────────────────────────────────────────────────────────
interface LanguageContextValue {
  lang: Language;
  t: Translations;
  isRTL: boolean;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

// ── Context ────────────────────────────────────────────────────────────────
const LanguageContext = createContext<LanguageContextValue | null>(null);

// ── Provider ───────────────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  // Apply to document immediately on mount and whenever language changes
  useEffect(() => {
    applyLanguageToDocument(lang);
  }, [lang]);

  const setLang = useCallback((newLang: Language) => {
    persistLanguage(newLang);
    setLangState(newLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  const value: LanguageContextValue = {
    lang,
    t: translations[lang],
    isRTL: lang === "ar",
    setLang,
    toggleLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// ── Consumer hook ──────────────────────────────────────────────────────────
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used inside <LanguageProvider>");
  }
  return ctx;
}
