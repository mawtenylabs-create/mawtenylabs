import { Mail, MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import type { ElementType } from "react";
import Section from "./Section";
import Container from "./Container";
import { useLang } from "../context/LanguageContext";

/* ── Facebook Icon ─────────────────────────────────────────────────────── */
const Facebook = (props: React.ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  const { size = 24, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

interface CardConfig {
  icon: ElementType;
  iconBg: string;
  iconText: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  title: string;
  value: string;
  btnLabel: string;
  btnBg: string;
  btnHover: string;
  btnText: string;
  href: string;
}

function Contact() {
  const { t, isRTL } = useLang();
  const ct = t.contact;

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const cards: CardConfig[] = [
    {
      icon: Facebook,
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
      accentBg: "bg-blue-50",
      accentText: "text-blue-600",
      accentBorder: "border-blue-100",
      title: ct.facebook.title,
      value: ct.facebook.value,
      btnLabel: ct.facebook.btnLabel,
      btnBg: "bg-blue-50",
      btnHover: "hover:bg-blue-100",
      btnText: "text-blue-700",
      href: "https://www.facebook.com/share/1BBfancbAu/",
    },
    {
      icon: Mail,
      iconBg: "bg-slate-100",
      iconText: "text-slate-600",
      accentBg: "bg-slate-50",
      accentText: "text-slate-600",
      accentBorder: "border-slate-200",
      title: ct.email.title,
      value: ct.email.value,
      btnLabel: ct.email.btnLabel,
      btnBg: "bg-[#082f63]",
      btnHover: "hover:bg-[#0c2340]",
      btnText: "text-white",
      href: "mailto:m.mazloum.44@gmail.com",
    },
  ];

  return (
    <Section id="contact" className="relative overflow-hidden bg-white py-10 lg:py-24">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#F0F9FF]/80 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#ECFDF5]/80 to-transparent blur-[80px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 lg:mb-16 animate-fade-in-up"
        >
          <div className="mb-4 lg:mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#E0F2FE] px-4 lg:px-5 py-1.5 lg:py-2">
            <Mail size={16} className="text-[#0284C7]" strokeWidth={2.5} />
            <span className="text-[12px] lg:text-[13.5px] font-bold text-[#0284C7]">{ct.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2340] mb-3 lg:mb-5 leading-tight">
            {ct.heading}
          </h2>

          <p className="text-[15px] sm:text-[17px] text-slate-500 leading-relaxed max-w-xl mb-4">
            {ct.subheading}
          </p>


        </div>

        {/* Unified WhatsApp Booking Area */}
        <div className="mb-6 lg:mb-8 animate-fade-up delay-100" dir={isRTL ? "rtl" : "ltr"}>
          <div className="bg-white border border-[#A7F3D0] rounded-2xl sm:rounded-3xl p-6 lg:p-8 shadow-sm shadow-emerald-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-bl from-[#ECFDF5] to-transparent -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-60" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
              
              {/* Text side */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-3 mb-3 lg:mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#ECFDF5] text-[#059669]">
                    <MessageCircle size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0c2340] en:leading-tight">
                    {ct.whatsappSectionTitle}
                  </h3>
                </div>
                <p className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed font-medium">
                  {ct.whatsappSectionDesc}
                </p>
              </div>

              {/* Numbers side */}
              <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
                {[ct.whatsapp1, ct.whatsapp2].map((wa, idx) => (
                  <div key={idx} className="flex flex-col bg-[#F8FAFC] border border-slate-100 p-4 sm:p-5 rounded-2xl flex-1 sm:min-w-[210px] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <span className="text-[13px] font-bold text-[#059669] mb-1">{wa.title}</span>
                    <p className="text-[17px] font-black text-[#0c2340] phone-ltr mb-4 tracking-wide" dir="ltr">
                      {wa.value}
                    </p>
                    <a
                      href={wa.value === "+972 599202229" ? "https://wa.me/972599202229" : "https://wa.me/972569202229"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#059669] inline-flex items-center justify-center w-full gap-2 rounded-xl py-2.5 text-[14px] font-bold transition-all border border-[#A7F3D0]/50 hover:scale-[1.02] active:scale-95"
                    >
                      {wa.btnLabel}
                      <ArrowIcon size={16} />
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Secondary Contact Cards (Email & Facebook) */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-10 lg:mb-12 animate-fade-up delay-200"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article
                key={index}
                className="group relative flex flex-row sm:flex-col items-center sm:items-stretch rounded-2xl sm:rounded-[1.25rem] lg:rounded-3xl p-4 sm:p-5 lg:p-8 transition-all duration-300 overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 gap-4 sm:gap-0"
              >
                {/* Subtle top corner accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-bl ${card.accentBg} to-transparent -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-40`}
                />

                {/* Icon + badge row */}
                <div className={`relative sm:mb-6 flex flex-col sm:flex-row sm:items-center flex-shrink-0 ${isRTL ? "sm:justify-between" : "sm:justify-between"}`}>
                  <div
                    className={`flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl ${card.iconBg} transition-colors`}
                  >
                    <Icon size={20} className={`lg:w-[26px] lg:h-[26px] ${card.iconText}`} strokeWidth={2} />
                  </div>
                  <span
                    className={`hidden sm:inline-block text-[11px] font-black uppercase tracking-widest ${card.accentText} ${card.accentBg} border ${card.accentBorder} px-3 py-1 rounded-full`}
                  >
                    {card.title}
                  </span>
                </div>

                <div className="flex flex-col flex-grow min-w-0">
                  <h3
                    className={`text-[15px] sm:text-[17px] lg:text-xl en:lg:text-[17px] font-bold mb-1 sm:mb-1.5 lg:mb-2 text-[#0c2340] ${isRTL ? "text-right" : "text-left"
                      }`}
                  >
                    {card.title}
                  </h3>

                  {/* Value — phone numbers always LTR */}
                  <p
                    className={`text-[13.5px] sm:text-[14.5px] lg:text-[16px] font-medium mb-0 sm:mb-5 lg:mb-8 tracking-wide break-all leading-snug text-slate-500 phone-ltr ${isRTL ? "text-right" : "text-left"
                      }`}
                    dir="ltr"
                  >
                    {card.value}
                  </p>
                </div>

                {/* Value — phone numbers always LTR — removed here as it moved into the block above */}

                {/* Button */}
                <div className="mt-0 sm:mt-auto flex-shrink-0">
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${card.btnBg} ${card.btnHover} ${card.btnText} inline-flex items-center justify-center w-10 h-10 sm:w-full sm:h-auto gap-2 rounded-xl sm:px-6 sm:py-2.5 lg:py-3 text-[13px] font-bold transition-all active:scale-95 border border-transparent hover:scale-[1.02]`}
                    aria-label={card.btnLabel}
                  >
                    <span className="hidden sm:inline">{card.btnLabel}</span>
                    <ArrowIcon size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center`} dir={isRTL ? "rtl" : "ltr"}>
          <p className="text-[14px] text-slate-500 font-medium bg-slate-50 inline-block px-6 py-2 rounded-full">
            {ct.bottomCta}
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
