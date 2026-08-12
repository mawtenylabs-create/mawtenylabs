import { useState } from "react";
import {
  Droplets,
  Activity,
  Baby,
  Heart,
  Pill,
  FlaskConical,
  Microscope,
  ShieldCheck,
  Leaf,
  Zap,
  Waves,
  Bone,
  Bug,
  Dna,
  CircleDot,
  Sparkles,
  TestTube,
} from "lucide-react";
import Section from "./Section";
import Container from "./Container";
import { useLang } from "../context/LanguageContext";

// ─── Static visual config per category/service (no text here) ───────────────
const categoryEmojis: Record<string, string> = {
  blood: "🩸",
  hormones: "🧬",
  organs: "🫁",
  immunity: "🛡️",
  screening: "🔬",
};

const categoryColors: Record<string, string> = {
  blood: "#dc2626",
  hormones: "#7c3aed",
  organs: "#0891b2",
  immunity: "#0d8050",
  screening: "#082f63",
};

// Per-category service icons (in order)
const categoryServiceIcons: Record<string, React.ElementType[]> = {
  blood: [Droplets, Activity, Heart, CircleDot],
  hormones: [Dna, Sparkles, Baby],
  organs: [FlaskConical, Waves, Bug, TestTube],
  immunity: [ShieldCheck, Zap, Bone, Leaf],
  screening: [Pill, Microscope],
};

const serviceIconColors: Record<string, { iconColor: string; iconBg: string }[]> = {
  blood: [
    { iconColor: "text-red-500", iconBg: "bg-red-50" },
    { iconColor: "text-orange-500", iconBg: "bg-orange-50" },
    { iconColor: "text-rose-500", iconBg: "bg-rose-50" },
    { iconColor: "text-red-600", iconBg: "bg-red-50" },
  ],
  hormones: [
    { iconColor: "text-purple-500", iconBg: "bg-purple-50" },
    { iconColor: "text-violet-500", iconBg: "bg-violet-50" },
    { iconColor: "text-pink-500", iconBg: "bg-pink-50" },
  ],
  organs: [
    { iconColor: "text-cyan-600", iconBg: "bg-cyan-50" },
    { iconColor: "text-teal-500", iconBg: "bg-teal-50" },
    { iconColor: "text-emerald-500", iconBg: "bg-emerald-50" },
    { iconColor: "text-blue-500", iconBg: "bg-blue-50" },
  ],
  immunity: [
    { iconColor: "text-green-600", iconBg: "bg-green-50" },
    { iconColor: "text-yellow-500", iconBg: "bg-yellow-50" },
    { iconColor: "text-stone-500", iconBg: "bg-stone-50" },
    { iconColor: "text-lime-500", iconBg: "bg-lime-50" },
  ],
  screening: [
    { iconColor: "text-indigo-500", iconBg: "bg-indigo-50" },
    { iconColor: "text-blue-700", iconBg: "bg-blue-50" },
  ],
};

function Services() {
  const { t, isRTL } = useLang();
  const svc = t.services;

  const [activeTab, setActiveTab] = useState<string>(svc.categories[0].id);
  const activeCategory = svc.categories.find((c) => c.id === activeTab) ?? svc.categories[0];
  const accentColor = categoryColors[activeTab] ?? "#082f63";
  const emoji = categoryEmojis[activeTab] ?? "🔬";

  return (
    <Section id="services" className="relative overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-white" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svc-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#082f63" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-dots)" />
        </svg>
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#ddeaf8]/50 to-transparent blur-[90px]" />
        <div className="absolute -bottom-24 -left-24 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-slate-100/60 to-transparent blur-[70px]" />
      </div>

      <Container>
        {/* ── Section Header ── */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 lg:mb-12 animate-fade-up"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#082f63]/15 bg-white/80 backdrop-blur-sm px-5 py-2 shadow-sm">
            <Microscope size={15} className="text-[#082f63]" strokeWidth={2.5} />
            <span className="text-[12.5px] font-bold text-[#082f63]">{svc.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#0c2340] mb-3 leading-tight">
            {svc.heading}
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-slate-500 leading-relaxed max-w-xl">
            {svc.subheading}
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <div className="w-full overflow-x-auto hide-scroll pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className="flex sm:flex-wrap sm:justify-center w-max sm:w-auto gap-2 sm:gap-2.5 mb-7 lg:mb-9 animate-fade-up delay-200"
          >
          {svc.categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-bold transition-all duration-200 whitespace-nowrap border ${
                  isActive
                    ? "bg-[#082f63] text-white border-[#082f63] shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#082f63]/40 hover:text-[#082f63]"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <span>{categoryEmojis[cat.id]}</span>
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {cat.services.length}
                </span>
              </button>
            );
          })}
          </div>
        </div>

        {/* ── Active category label ── */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="mb-5 text-center animate-fade-up delay-200"
        >
          <span
            className="inline-flex items-center gap-2 text-[12px] font-bold px-3 py-1.5 rounded-lg"
            style={{ color: accentColor, backgroundColor: `${accentColor}12` }}
          >
            <span>{emoji}</span>
            <span>{activeCategory.label}</span>
          </span>
        </div>

        {/* ── Service Cards Grid ── */}
        <div
          key={activeTab}
          dir={isRTL ? "rtl" : "ltr"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 lg:mb-10 animate-fade-up"
          style={{ animationDuration: "0.35s" }}
        >
          {activeCategory.services.map((service, index) => {
            const icons = categoryServiceIcons[activeTab] ?? [];
            const styles = serviceIconColors[activeTab] ?? [];
            const Icon = icons[index] ?? Microscope;
            const style = styles[index] ?? { iconColor: "text-blue-500", iconBg: "bg-blue-50" };

            return (
              <div
                key={`${activeTab}-${index}`}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 60}ms`, animationDuration: "0.4s" }}
              >
                <div className="group flex flex-row sm:flex-col items-center sm:items-start bg-white rounded-xl border border-slate-100 shadow-[0_2px_12px_rgba(8,47,99,0.06)] hover:shadow-[0_6px_28px_rgba(8,47,99,0.12)] hover:-translate-y-0.5 transition-all duration-250 p-3 sm:p-4 lg:p-5 cursor-default select-none h-full gap-3 sm:gap-0 en:min-h-[150px]">
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-10 sm:h-10 rounded-xl sm:mb-3 transition-transform duration-200 group-hover:scale-105 ${style.iconBg}`}
                  >
                    <Icon size={19} className={style.iconColor} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3
                      className={`text-[13.5px] sm:text-[14px] en:text-[13px] font-bold text-[#0c2340] leading-snug mb-0.5 sm:mb-1.5 group-hover:text-[#082f63] transition-colors ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-[11.5px] sm:text-[12.5px] en:text-[11.5px] text-slate-500 leading-relaxed line-clamp-2 sm:line-clamp-3 en:line-clamp-none ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Teaser Strip ── */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#082f63]/10 bg-gradient-to-l from-[#082f63]/[0.04] to-[#0e4a96]/[0.02] px-6 py-5 animate-fade-up delay-300"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#082f63]/10 flex-shrink-0">
              <FlaskConical size={17} className="text-[#082f63]" strokeWidth={2} />
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <p className="text-[13px] font-black text-[#0c2340]">{svc.teaserCount}</p>
              <p className="text-[11.5px] text-slate-500">{svc.teaserSub}</p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-[#082f63] px-5 py-2.5 text-[12.5px] font-extrabold text-white shadow-md hover:bg-[#0e4a96] transition-all duration-200 active:scale-95 whitespace-nowrap"
          >
            {svc.teaserBtn}
          </a>
        </div>
      </Container>
    </Section>
  );
}

export default Services;
