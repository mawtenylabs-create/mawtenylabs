import {
  Microscope,
  GraduationCap,
  ShieldCheck,
  MessageSquare,
  CreditCard,
  Send,
  HeartHandshake,
} from "lucide-react";
import mazlum2 from "../assets/mazlum2.jpeg";
import type { LucideIcon } from "lucide-react";
import Section from "./Section";
import Container from "./Container";
import { useLang } from "../context/LanguageContext";

const featureIcons: LucideIcon[] = [
  Microscope,
  GraduationCap,
  ShieldCheck,
  MessageSquare,
  HeartHandshake,
  CreditCard,
];

const featureStyles = [
  { iconBg: "bg-blue-50", iconColor: "text-[#082f63]" },
  { iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  { iconBg: "bg-violet-50", iconColor: "text-violet-600" },
  { iconBg: "bg-amber-50", iconColor: "text-amber-600" },
  { iconBg: "bg-rose-50", iconColor: "text-rose-500" },
  { iconBg: "bg-cyan-50", iconColor: "text-cyan-600" },
];

function WhyChooseUs() {
  const { t, isRTL } = useLang();
  const wcu = t.whyChooseUs;

  return (
    <Section className="relative overflow-hidden bg-[#F5FAFD] py-12 lg:py-20" id="why-choose-us">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-50/40 blur-[60px]" />
        <div className="absolute top-32 right-[10%] text-[#082f63]/5 text-4xl font-light">+</div>
        <div className="absolute bottom-32 left-[15%] text-[#082f63]/5 text-4xl font-light">+</div>
        <div className="absolute top-1/2 right-[40%] text-[#c92525]/5 text-2xl font-light">+</div>
      </div>

      <Container>
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start"
        >
          {/* ── Image + Bio column ── */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4 animate-fade-in-up flex-shrink-0">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_16px_48px_rgba(8,47,99,0.15)] border-2 border-white/80">
                <div className="absolute inset-0 bg-gradient-to-t from-[#082f63]/70 via-[#082f63]/15 to-transparent z-10" />
                <img
                  src={mazlum2}
                  alt={wcu.imageAlt}
                  loading="lazy"
                  className="w-full h-[380px] lg:h-[420px] object-cover object-[100%_80%] transition-transform duration-1000 hover:scale-[1.03]"
                />
              </div>

              {/* Floating stat cards */}
              <div
                className="absolute top-5 -left-4 z-20 bg-white/96 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl shadow-slate-300/40 border border-slate-100 flex flex-col items-center min-w-[80px] animate-bounce-slow"
                style={{ animationDuration: "3s" }}
              >
                <span className="text-2xl font-black text-[#c92525] leading-none num-ltr">+500</span>
                <span className="text-[11px] font-bold text-slate-500 mt-0.5">{wcu.floatTests}</span>
              </div>

              <div
                className="absolute bottom-8 -right-4 z-20 bg-white/96 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl shadow-slate-300/40 border border-slate-100 flex flex-col items-center min-w-[80px] animate-bounce-slow"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <span className="text-2xl font-black text-[#082f63] leading-none num-ltr">+30</span>
                <span className="text-[11px] font-bold text-slate-500 mt-0.5">{wcu.floatYears}</span>
              </div>

              {/* Decorative dot pattern */}
              <svg
                className="absolute -bottom-5 -left-5 -z-10 w-24 h-24 text-slate-200"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <pattern id="dots-wcu" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
                <rect x="0" y="0" width="100" height="100" fill="url(#dots-wcu)" />
              </svg>
            </div>

            {/* Bio Panel */}
            <div className="rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-[0_2px_14px_rgba(8,47,99,0.06)] relative">
              <div
                className={`absolute top-4 ${isRTL ? "right-0" : "left-0"} w-[3px] h-10 rounded-full bg-[#082f63]/60`}
              />
              <h3
                className={`text-[13px] font-black text-[#0c2340] mb-1.5 ${isRTL ? "pr-3" : "pl-3"}`}
              >
                {wcu.bioTitle}
              </h3>
              <p
                className={`text-[12.5px] en:text-[12px] text-slate-500 leading-relaxed line-clamp-4 en:line-clamp-none ${isRTL ? "pr-3" : "pl-3"}`}
              >
                {wcu.bioText}
              </p>
            </div>
          </div>

          {/* ── Features column ── */}
          <div
            className="w-full lg:w-[55%] flex flex-col animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            {/* Section header */}
            <div className={`mb-6 ${isRTL ? "text-right" : "text-left"}`}>
              <span className="inline-block rounded-full bg-[#082f63]/10 px-4 py-1.5 text-[12.5px] font-bold text-[#082f63] mb-3">
                {wcu.badge}
              </span>
              <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] font-extrabold text-[#0c2340] mb-3 leading-tight">
                {wcu.heading}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed max-w-lg">
                {wcu.subheading}
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {wcu.features.map((feature, index) => {
                const Icon = featureIcons[index];
                const style = featureStyles[index];
                return (
                  <div
                    key={index}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <div className="group flex items-start gap-3.5 bg-white/80 backdrop-blur-sm rounded-2xl p-3.5 sm:p-4 border border-slate-100/80 shadow-[0_2px_12px_rgba(8,47,99,0.05)] transition-all duration-300 hover:bg-white hover:shadow-[0_6px_20px_rgba(8,47,99,0.10)] hover:-translate-y-0.5 hover:border-[#082f63]/15 h-full en:min-h-[110px]">
                      <div
                        className={`flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${style.iconBg} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon size={16} className={style.iconColor} strokeWidth={2.2} />
                      </div>
                      <div className={`flex flex-col min-w-0 ${isRTL ? "text-right" : "text-left"}`}>
                        <h3 className="text-[13.5px] en:text-[13px] font-bold text-[#0c2340] leading-snug mb-1 group-hover:text-[#082f63] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-[12px] en:text-[11.5px] text-slate-500 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Delivery row */}
            <div
              className={`mt-4 flex items-start gap-3 bg-[#082f63]/[0.04] rounded-2xl p-4 border border-[#082f63]/10`}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-[#082f63]/10">
                <Send size={16} className="text-[#082f63]" strokeWidth={2.2} />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <p className="text-[13.5px] font-bold text-[#0c2340] mb-0.5">{wcu.deliveryTitle}</p>
                <p className="text-[12px] text-slate-500 leading-relaxed">{wcu.deliveryText}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow infinite ease-in-out;
        }
      `}</style>
    </Section>
  );
}

export default WhyChooseUs;
