// ─── i18n Core ────────────────────────────────────────────────────────────────
// Type definitions, translations map, and the useLanguage hook.

import ar from "./ar";
import en from "./en";
export type { Translations } from "./ar";

// ── Language type ──────────────────────────────────────────────────────────
export type Language = "ar" | "en";

// ── Translations map ───────────────────────────────────────────────────────
export const translations: Record<Language, typeof ar> = { ar, en };

// ── localStorage key ───────────────────────────────────────────────────────
const STORAGE_KEY = "mawtini_lang";

// ── Read persisted language (or default to Arabic) ─────────────────────────
export function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") return stored;
  } catch {
    // localStorage unavailable (e.g. SSR or private mode)
  }
  return "ar";
}

// ── Persist language choice ────────────────────────────────────────────────
export function persistLanguage(lang: Language): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
}

// ── Apply language to the document (dir, lang, title, meta description) ────
export function applyLanguageToDocument(lang: Language): void {
  const t = translations[lang];

  // HTML element
  document.documentElement.lang = t.meta.lang;
  document.documentElement.dir = t.meta.dir;

  // Title
  document.title = t.meta.title;

  // Meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", t.meta.description);
  } else {
    const newMeta = document.createElement("meta");
    newMeta.name = "description";
    newMeta.content = t.meta.description;
    document.head.appendChild(newMeta);
  }

  // OG Title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", t.meta.title);

  // OG Description
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", t.meta.description);
}
