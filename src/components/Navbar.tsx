import { useState, useEffect, useMemo } from "react";
import { Phone, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useLang } from "../context/LanguageContext";
import logo from "../assets/mawtenylogo.png";

// ── Language Switcher ──────────────────────────────────────────────────────
function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();
  const isAR = lang === "ar";

  return (
    <div
      className="flex items-center rounded-full border border-slate-200 overflow-hidden text-[11px] sm:text-[12.5px] font-bold transition-all hover:border-[#082f63]/30"
      role="group"
      aria-label={t.nav.langSwitcherAriaLabel}
    >
      <button
        onClick={() => setLang("ar")}
        className={`px-3 py-1.5 transition-all duration-200 ${
          isAR
            ? "bg-[#082f63] text-white"
            : "text-slate-500 hover:text-[#082f63] hover:bg-slate-50"
        }`}
        aria-pressed={isAR}
        aria-label="العربية"
      >
        AR
      </button>
      <span className="w-px h-4 bg-slate-200 shrink-0" aria-hidden="true" />
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 transition-all duration-200 ${
          !isAR
            ? "bg-[#082f63] text-white"
            : "text-slate-500 hover:text-[#082f63] hover:bg-slate-50"
        }`}
        aria-pressed={!isAR}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

// Mobile language switcher removed since we now use the main one in the header.

function Navbar() {
  const { t, isRTL } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const navLinks = useMemo(
    () => [
      { label: t.nav.home, id: "home", href: "/#home" },
      { label: t.nav.services, id: "services", href: "/#services" },
      { label: t.nav.branches, id: "branches", href: "/#branches" },
      { label: t.nav.patientGuide, id: "patient-guide", href: "/#patient-guide" },
      { label: t.nav.awareness, id: "health-education", href: "/#health-education" },
      { label: t.nav.contact, id: "contact", href: "/#contact" },
    ],
    [t]
  );

  const sectionIds = useMemo(() => navLinks.map((l) => l.id), [navLinks]);
  const activeSectionId = useScrollSpy(isHome ? sectionIds : [], 100);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const prefixHref = (link: { href: string; isRoute?: boolean }) => {
    if (link.isRoute) return link.href;
    return isHome ? link.href.replace("/", "") : link.href;
  };

  const [prevIsRTL, setPrevIsRTL] = useState(isRTL);
  if (prevIsRTL !== isRTL) {
    setPrevIsRTL(isRTL);
    setMobileOpen(false);
  }

  // Chevron for mobile nav item — points inward depending on direction
  const NavChevron = isRTL ? ChevronLeft : ChevronRight;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-[0_4px_20px_rgba(8,47,99,0.06)]"
            : "bg-white border-b border-slate-100/60"
        }`}
      >
        <Container>
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className="flex h-[72px] items-center justify-between gap-4"
          >
            {/* ── Brand logo ── */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 focus-visible:outline-none group"
              aria-label={t.nav.logoAriaLabel}
            >
              <img
                src={logo}
                alt={t.nav.logoAlt}
                className="w-12 h-12 object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`flex flex-col leading-tight ${isRTL ? "text-right" : "text-left"}`}>
                <span className="text-[15.5px] sm:text-[17px] font-black text-[#0c2340] tracking-tight">
                  مختبرات موطني الطبي
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.15em] text-[#c92525] uppercase mt-0.5">
                  Mawteny Medical Laboratory
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-9 en:gap-5 en:xl:gap-7 text-[14px] font-bold text-slate-600"
              aria-label={t.nav.mainNavAriaLabel}
            >
              {navLinks.map((link) => {
                const isActive = isHome && link.id === activeSectionId;
                return (
                  <a
                    key={link.id}
                    href={prefixHref(link)}
                    className={`relative pb-1.5 transition-colors duration-300 ${
                      isActive ? "text-[#c92525]" : "hover:text-[#c92525]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 ${isRTL ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"} h-[3px] rounded-full bg-[#c92525] transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* ── Desktop Actions + Hamburger ── */}
            <div className="flex items-center gap-3">
              {/* Language switcher — responsive */}
              <LanguageSwitcher />

              {/* Contact CTA — desktop */}
              <a
                href={prefixHref({ href: "/#contact" })}
                className="hidden sm:flex items-center gap-2 rounded-full bg-[#c92525] px-6 py-2.5 text-[13.5px] font-bold text-white shadow-sm hover:bg-[#a81e1e] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <Phone size={14} strokeWidth={2.5} />
                <span>{t.nav.ctaContact}</span>
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#0c2340] transition-all"
                aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </Container>

        {/* ── Mobile Menu Panel ── */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[72px] bg-white transition-all duration-300 ease-in-out border-t border-slate-100 ${
            mobileOpen
              ? "opacity-100 visible h-auto pb-6 shadow-xl"
              : "opacity-0 invisible h-0 overflow-hidden"
          }`}
          role="navigation"
          aria-label={t.nav.mobileNavAriaLabel}
        >
          <Container>
            <div
              dir={isRTL ? "rtl" : "ltr"}
              className="py-4 flex flex-col gap-1.5"
            >
              {navLinks.map((link) => {
                const isActive = isHome && link.id === activeSectionId;
                const classes = `flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-bold transition-all ${
                  isActive
                    ? "bg-[#c92525]/5 text-[#c92525]"
                    : "text-[#0c2340] hover:bg-slate-50 hover:text-[#c92525]"
                }`;

                return (
                  <a
                    key={link.id}
                    href={prefixHref(link)}
                    onClick={() => setMobileOpen(false)}
                    className={classes}
                  >
                    <span>{link.label}</span>
                    <NavChevron
                      size={16}
                      className={isActive ? "text-[#c92525]" : "text-slate-400"}
                    />
                  </a>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-100 mt-2 flex flex-col gap-3">
                <a
                  href={prefixHref({ href: "/#contact" })}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-[#0c2340] px-6 py-4 text-[14px] font-bold text-white shadow-sm active:scale-95 transition-all"
                >
                  <Phone size={15} strokeWidth={2.5} />
                  {t.nav.ctaContact}
                </a>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Navbar;