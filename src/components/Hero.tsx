import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Calendar, MapPin, Target, Microscope, Building2, Award } from "lucide-react";
import Container from "./Container";
import { useLang } from "../context/LanguageContext";

/* ─── Static stats config (icons/colors only — labels come from t()) ─── */
const statsConfig = [
  {
    icon: Award,
    iconBg: "bg-blue-50",
    iconColor: "text-[#082f63]",
    num: 30,
    prefix: "+",
    suffix: "",
    valueColor: "text-[#082f63]",
    key: "experience" as const,
  },
  {
    icon: Building2,
    iconBg: "bg-blue-50",
    iconColor: "text-[#082f63]",
    num: 2,
    prefix: "",
    suffix: "",
    valueColor: "text-[#082f63]",
    key: "branches" as const,
  },
  {
    icon: Microscope,
    iconBg: "bg-red-50",
    iconColor: "text-[#c92525]",
    num: 500,
    prefix: "+",
    suffix: "",
    valueColor: "text-[#c92525]",
    key: "tests" as const,
  },
  {
    icon: Target,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    num: 99,
    prefix: "",
    suffix: "%",
    valueColor: "text-emerald-600",
    key: "accuracy" as const,
  },
];

function AnimatedStat({
  num,
  prefix,
  suffix,
  duration = 2000,
}: {
  num: number;
  prefix: string;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * num));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, num, duration]);

  return (
    <span ref={ref} className="inline-block num-ltr">
      {prefix}{count}{suffix}
    </span>
  );
}

function Hero() {
  const { t, isRTL } = useLang();

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-[90vh] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ddeaf8 0%, #e8f2fc 40%, #eef6fd 70%, #f0f7fe 100%)",
      }}
    >
      {/* ── Molecular dot-network background pattern ── */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ opacity: 0.28 }}
      >
        <circle cx="48" cy="100" r="4" fill="#205ba6" />
        <circle cx="140" cy="60" r="3" fill="#205ba6" />
        <circle cx="210" cy="140" r="4.5" fill="#205ba6" />
        <circle cx="80" cy="200" r="3" fill="#205ba6" />
        <circle cx="170" cy="240" r="3" fill="#205ba6" />
        <circle cx="40" cy="290" r="3.5" fill="#205ba6" />
        <circle cx="130" cy="350" r="3" fill="#205ba6" />
        <circle cx="220" cy="300" r="2.5" fill="#205ba6" />
        <line x1="48" y1="100" x2="140" y2="60" stroke="#205ba6" strokeWidth="0.9" />
        <line x1="140" y1="60" x2="210" y2="140" stroke="#205ba6" strokeWidth="0.9" />
        <line x1="210" y1="140" x2="80" y2="200" stroke="#205ba6" strokeWidth="0.9" />
        <line x1="80" y1="200" x2="170" y2="240" stroke="#205ba6" strokeWidth="0.9" />
        <line x1="170" y1="240" x2="130" y2="350" stroke="#205ba6" strokeWidth="0.9" />
        <line x1="130" y1="350" x2="220" y2="300" stroke="#205ba6" strokeWidth="0.9" />
        <line x1="48" y1="100" x2="40" y2="290" stroke="#205ba6" strokeWidth="0.7" />
        <line x1="210" y1="140" x2="220" y2="300" stroke="#205ba6" strokeWidth="0.7" />
        <circle cx="360" cy="30" r="3" fill="#205ba6" />
        <circle cx="430" cy="80" r="3.5" fill="#205ba6" />
        <circle cx="320" cy="120" r="3" fill="#205ba6" />
        <line x1="360" y1="30" x2="430" y2="80" stroke="#205ba6" strokeWidth="0.8" />
        <line x1="430" y1="80" x2="320" y2="120" stroke="#205ba6" strokeWidth="0.8" />
        <line x1="320" y1="120" x2="360" y2="30" stroke="#205ba6" strokeWidth="0.8" />
        <circle cx="90" cy="430" r="2.5" fill="#205ba6" />
        <circle cx="200" cy="460" r="2" fill="#205ba6" />
        <line x1="90" y1="430" x2="200" y2="460" stroke="#205ba6" strokeWidth="0.7" />
        <line x1="130" y1="350" x2="90" y2="430" stroke="#205ba6" strokeWidth="0.7" />
      </svg>

      {/* ── Main hero grid ── */}
      <div className="flex-grow flex items-center justify-center">
        <Container>
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className={`relative grid min-h-[60vh] lg:min-h-[75vh] grid-cols-1 items-center gap-8 lg:gap-12 ${isRTL ? "lg:grid-cols-[55%_45%]" : "lg:grid-cols-2"
              }`}
          >
            {/* ── TEXT COLUMN ── */}
            <div
              className={`relative z-10 flex flex-col items-start gap-5 lg:gap-6 en:max-md:gap-3 py-12 lg:py-0 ${isRTL ? "text-right" : "text-left"
                }`}
            >
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 en:max-md:gap-2 max-md:max-w-[calc(100vw-24px)] en:max-md:max-w-full max-md:whitespace-nowrap en:max-md:whitespace-normal rounded-full border border-emerald-200 bg-white/90 px-4 en:max-md:px-4 py-1.5 en:max-md:py-1.5 text-[clamp(15px,4.5vw,22px)] sm:text-[30px] lg:text-[20px] en:max-md:text-[13.5px] font-bold en:max-md:font-extrabold text-emerald-600 shadow-sm backdrop-blur-sm animate-fade-in en:max-md:leading-tight">
                <ShieldCheck className="w-[45px] h-[45px] max-md:w-[32px] max-md:h-[32px] en:max-md:w-[18px] en:max-md:h-[18px] flex-shrink-0" strokeWidth={2.5} />
                <span className="en:max-md:text-center en:max-md:flex-1">{t.hero.trustBadge}</span>
              </div>

              {/* Headline */}
              <div className="animate-fade-up delay-100 mt-2">
                <h1 className="text-[38px] sm:text-[44px] lg:text-[48px] 2xl:text-[64px] en:text-[34px] en:lg:text-[42px] en:2xl:text-[54px] font-black leading-[1.3] lg:leading-[1.5] text-[#0c2340] en:lg:whitespace-normal tracking-tight">
                  <span className="text-[#c92525]">{t.hero.headlineAccent}</span>{" "}
                  {t.hero.headline}
                </h1>
              </div>

              {/* Body */}
              <p className="max-w-[750px] en:max-w-[850px] text-[18px] sm:text-[20px] lg:text-[22px] en:lg:text-[20px] en:max-md:text-[15.5px] leading-[1.7] lg:leading-[1.9] en:max-md:leading-[1.6] text-slate-600 animate-fade-up delay-200 font-medium">
                {t.hero.body}
              </p>

              {/* Mobile-only compact image */}
              <div className="lg:hidden w-full relative h-[240px] sm:h-[320px] rounded-[1.5rem] overflow-hidden shadow-lg border-4 border-white mt-2 mb-2 animate-fade-up delay-200">
                <img
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop&q=80"
                  alt={t.hero.imageAlt}
                  className="w-full h-full object-cover object-[50%_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082f63]/40 to-transparent" />
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mt-1 lg:mt-4 animate-fade-up delay-300">
                <a
                  href="/#contact"
                  className="flex items-center justify-center gap-2.5 rounded-full bg-[#082f63] px-6 lg:px-8 py-3.5 lg:py-4 text-[18px] lg:text-[20px] font-extrabold text-white shadow-lg shadow-blue-900/20 hover:bg-[#0a3a7a] transition-all hover:scale-105 cursor-pointer w-full sm:w-auto"
                >
                  <Calendar size={20} />
                  {t.hero.ctaBook}
                </a>
                <a
                  href="/#branches"
                  className="flex items-center justify-center gap-2.5 rounded-full border-2 border-slate-300 bg-white px-6 lg:px-8 py-3.5 lg:py-4 text-[18px] lg:text-[20px] font-extrabold text-slate-600 hover:border-[#082f63] hover:text-[#082f63] transition-all hover:scale-105 cursor-pointer w-full sm:w-auto"
                >
                  <MapPin size={18} />
                  {t.hero.ctaBranches}
                </a>
              </div>
            </div>

            {/* ── IMAGE COLUMN ── */}
            <div className="relative hidden lg:flex items-center justify-end h-full min-h-[500px]">
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none z-10"
                viewBox="0 0 520 640"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                style={{ transform: "translateX(-4%)" }}
              >
                <path
                  d="M 85 100 C 20 200 18 430 90 540"
                  stroke="#082f63"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="85" cy="100" r="9" fill="#205ba6" />
                <path
                  d="M 105 210 C 68 290 70 390 108 470"
                  stroke="#c92525"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="107" cy="470" r="8" fill="#c92525" />
              </svg>

              <div
                className="relative z-0 overflow-hidden shadow-2xl shadow-blue-900/15"
                style={{
                  width: "85%",
                  maxWidth: "580px",
                  height: "70vh",
                  maxHeight: "665px",
                  borderRadius: "50% / 42%",
                  border: "10px solid white",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&auto=format&fit=crop&q=90"
                  alt={t.hero.imageAlt}
                  className="h-full w-full object-cover object-left-top"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="relative z-20 mt-auto pb-8 lg:pb-12">
        <Container>
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
          >
            {statsConfig.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-right gap-3 sm:gap-4 bg-white/70 backdrop-blur-md border border-white shadow-[0_4px_20px_rgba(8,47,99,0.06)] rounded-[1.25rem] p-4 sm:p-5 hover:bg-white/95 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] ${s.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                  >
                    <Icon size={24} strokeWidth={2} className={s.iconColor} />
                  </div>
                  <div className={`flex flex-col mt-1 ${isRTL ? "sm:text-right" : "sm:text-left"}`}>
                    <span className={`text-[22px] sm:text-[26px] font-black leading-none mb-1 sm:mb-1.5 ${s.valueColor}`}>
                      <AnimatedStat num={s.num} prefix={s.prefix} suffix={s.suffix} />
                    </span>
                    <span className="text-[12px] sm:text-[13px] font-bold text-slate-600 leading-tight">
                      {t.hero.stats[s.key]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
