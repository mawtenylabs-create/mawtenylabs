import { ShieldCheck, ClipboardCheck, BookOpenText, Check } from "lucide-react";
import Section from "./Section";
import Container from "./Container";
import { useLang } from "../context/LanguageContext";

function HealthAwareness() {
  const { t, isRTL } = useLang();
  const ha = t.healthAwareness;

  return (
    <Section
      id="health-education"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-8 lg:py-20"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-emerald-50/50 to-transparent blur-[90px] opacity-70" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-cyan-50/50 to-transparent blur-[80px] opacity-70" />
      </div>
      <svg
        className="absolute inset-0 h-full w-full -z-10 opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="awareness-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#082f63" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#awareness-dots)" />
      </svg>

      <Container>
        {/* Section Header */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 lg:mb-16 animate-fade-in-up"
        >
          <div className="mb-4 lg:mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-[#ECFDF5] px-4 lg:px-5 py-1.5 lg:py-2">
            <ShieldCheck size={16} className="text-emerald-600" strokeWidth={2.5} />
            <span className="text-[12px] lg:text-[13.5px] font-bold text-emerald-600">{ha.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2340] mb-3 lg:mb-5 leading-tight">
            {ha.heading}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-slate-500 leading-relaxed max-w-xl">
            {ha.subheading}
          </p>
        </div>

        {/* Cards Grid */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7"
        >
          {/* ── Card 1: Periodic Exams ── */}
          <div className="animate-fade-up">
            <article className="group relative flex flex-col bg-white rounded-[1.25rem] lg:rounded-3xl p-4 sm:p-5 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-bl from-[#ECFDF5]/80 to-transparent -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-300 group-hover:from-emerald-100/80" />
              <div className={`relative mb-6 flex items-center ${isRTL ? "justify-between" : "justify-between flex-row-reverse"}`}>
                <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-[0.85rem] lg:rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <ShieldCheck size={24} className="lg:w-[30px] lg:h-[30px] text-white" strokeWidth={2} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                  {ha.periodicBadge}
                </span>
              </div>
              <h3
                className={`text-[16px] lg:text-xl en:text-[15.5px] font-black text-[#0c2340] mb-2 lg:mb-3 leading-snug transition-colors group-hover:text-emerald-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {ha.periodicTitle}
              </h3>
              <p
                className={`text-[13px] lg:text-[14.5px] text-slate-500 leading-relaxed mb-4 lg:mb-6 line-clamp-3 lg:line-clamp-none ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {ha.periodicDesc}
              </p>
              <ul className="flex flex-col gap-2.5 mb-2 mt-auto">
                {ha.periodicBullets.map((b, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-3 text-[14px] text-slate-600 ${
                      isRTL ? "flex-row" : "flex-row"
                    }`}
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#ECFDF5]">
                      <Check size={11} className="text-emerald-600" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* ── Card 2: Pre-Test Guidelines ── */}
          <div className="animate-fade-up delay-100">
            <article className="group relative flex flex-col bg-white rounded-[1.25rem] lg:rounded-3xl p-4 sm:p-5 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-bl from-[#E0F2FE]/80 to-transparent -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-300 group-hover:from-blue-100/80" />
              <div className={`relative mb-6 flex items-center ${isRTL ? "justify-between" : "justify-between flex-row-reverse"}`}>
                <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-[0.85rem] lg:rounded-2xl bg-gradient-to-br from-[#082f63] to-[#205ba6] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <ClipboardCheck size={24} className="lg:w-[30px] lg:h-[30px] text-white" strokeWidth={2} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#082f63] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  {ha.guidelinesBadge}
                </span>
              </div>
              <h3
                className={`text-[16px] lg:text-xl en:text-[15.5px] font-black text-[#0c2340] mb-2 lg:mb-3 leading-snug transition-colors group-hover:text-[#082f63] ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {ha.guidelinesTitle}
              </h3>
              <p
                className={`text-[13px] lg:text-[14.5px] text-slate-500 leading-relaxed mb-4 lg:mb-6 line-clamp-3 lg:line-clamp-none ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {ha.guidelinesDesc}
              </p>
              <ul className="flex flex-col gap-2.5 mb-2 mt-auto">
                {ha.guidelinesBullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-slate-600">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#E0F2FE]">
                      <Check size={11} className="text-[#082f63]" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* ── Card 3: Articles ── */}
          <div className="animate-fade-up delay-200">
            <article className="group relative flex flex-col bg-white rounded-[1.25rem] lg:rounded-3xl p-4 sm:p-5 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-cyan-900/5 hover:-translate-y-2 transition-all duration-300 border border-slate-100 h-full">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-bl from-cyan-50/80 to-transparent -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-300 group-hover:from-cyan-100/80" />
              <div className={`relative mb-6 flex items-center ${isRTL ? "justify-between" : "justify-between flex-row-reverse"}`}>
                <div className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-[0.85rem] lg:rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <BookOpenText size={24} className="lg:w-[30px] lg:h-[30px] text-white" strokeWidth={2} />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full">
                  {ha.articlesBadge}
                </span>
              </div>
              <h3
                className={`text-[16px] lg:text-xl en:text-[15.5px] font-black text-[#0c2340] mb-2 lg:mb-3 leading-snug transition-colors group-hover:text-cyan-700 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {ha.articlesTitle}
              </h3>
              <p
                className={`text-[13px] lg:text-[14.5px] text-slate-500 leading-relaxed mb-4 lg:mb-6 line-clamp-3 lg:line-clamp-none ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {ha.articlesDesc}
              </p>
              <ul className="flex flex-col gap-3 mb-2 mt-auto">
                {ha.articles.map((article, i) => (
                  <li key={i}>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-[14px] p-2 -mx-2 rounded-xl hover:bg-cyan-50 transition-colors group/link"
                    >
                      <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 rounded-xl bg-[#F0F9FF] group-hover/link:bg-cyan-100 text-cyan-700 text-[12px] font-black transition-colors">
                        {i + 1}
                      </span>
                      <span
                        className={`text-slate-600 group-hover/link:text-cyan-700 leading-snug font-medium transition-colors ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {article.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HealthAwareness;
