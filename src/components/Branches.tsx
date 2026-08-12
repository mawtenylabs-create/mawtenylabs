import { MapPin, Phone, Clock, Building2 } from "lucide-react";
import Section from "./Section";
import Container from "./Container";
import { useLang } from "../context/LanguageContext";

// Static branch visual config (not translatable)
const branchVisuals = [
  {
    id: "kharba",
    accent: "#082f63",
    accentLight: "#ddeaf8",
    gradientFrom: "#630808ff",
    gradientTo: "#960e0eff",
    phones: [
      { key: "line1", number: "+972 599 202 229", href: "tel:+972599202229" },
      { key: "line2", number: "+972 569 202 229", href: "tel:+972569202229" },
    ],
    primaryPhone: { number: "+972 599 202 229", href: "tel:+972599202229" },
  },
  {
    id: "safa",
    accent: "#082f63",
    accentLight: "#ddeaf8",
    gradientFrom: "#FFBF00",
    gradientTo: "#d8de43ff",
    phones: [
      { key: "line1", number: "+972 599 202 229", href: "tel:+972599202229" },
      { key: "line2", number: "+972 569 202 229", href: "tel:+972569202229" },
    ],
    primaryPhone: { number: "+972 599 202 229", href: "tel:+972599202229" },
  },
];

function Branches() {
  const { t, isRTL } = useLang();
  const br = t.branches;

  return (
    <Section id="branches" className="relative overflow-hidden bg-slate-50/50 py-8 lg:py-24">
      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[#f4f7fb]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#ddeaf8]/55 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-[#d4f0e3]/45 to-transparent blur-[90px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="branches-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#082f63" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#branches-grid)" />
        </svg>
      </div>

      <Container>
        {/* ── Section Header ── */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 lg:mb-16 animate-fade-in-up"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#082f63]/15 bg-white/80 backdrop-blur-sm px-5 py-2 shadow-sm">
            <MapPin size={15} className="text-[#082f63]" strokeWidth={2.5} />
            <span className="text-[12.5px] font-bold text-[#082f63]">{br.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#0c2340] mb-3 leading-tight">
            {br.heading}
          </h2>
          <p className="text-[14.5px] sm:text-[16px] text-slate-500 leading-relaxed max-w-xl">
            {br.subheading}
          </p>
        </div>

        {/* ── Branch Cards ── */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10 lg:mb-12 px-2 sm:px-0"
        >
          {br.branches.map((branch, index) => {
            const visual = branchVisuals.find((v) => v.id === branch.id) ?? branchVisuals[0];

            return (
              <div
                key={branch.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article
                  dir={isRTL ? "rtl" : "ltr"}
                  className="relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_24px_rgba(8,47,99,0.07)] hover:shadow-[0_10px_40px_rgba(8,47,99,0.13)] transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Accent top bar */}
                  <div
                    className="h-[3px] w-full"
                    style={{
                      background: `linear-gradient(to ${isRTL ? "left" : "right"}, ${visual.gradientFrom}, ${visual.gradientTo})`,
                    }}
                  />

                  <div className="p-3.5 sm:p-5 lg:p-6 flex flex-col flex-grow gap-3 sm:gap-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div
                        className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${visual.gradientFrom}, ${visual.gradientTo})`,
                        }}
                      >
                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-[14.5px] sm:text-[16px] en:text-[14px] font-black text-[#0c2340] leading-snug">
                          {branch.name}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] en:text-[10.5px] text-slate-400 font-medium">
                          {br.branchSubtitle}
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    {/* Address */}
                    <div className="flex items-start gap-2.5">
                      <MapPin
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: visual.accent }}
                        strokeWidth={2.5}
                      />
                      <div>
                        <p className="text-[10.5px] en:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                          {br.addressLabel}
                        </p>
                        {branch.addressLines.map((line, i) => (
                          <p key={i} className="text-[12.5px] sm:text-[13px] en:text-[12px] text-slate-600 leading-snug">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="flex items-start gap-2.5">
                      <Phone
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: visual.accent }}
                        strokeWidth={2.5}
                      />
                      <div className="flex-grow">
                        <p className="text-[10.5px] en:text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 sm:mb-1.5">
                          {br.phonesLabel}
                        </p>
                        <div className="flex flex-col gap-1 sm:gap-1.5">
                          {visual.phones.map((phone) => (
                            <a
                              key={phone.href}
                              href={phone.href}
                              className="inline-flex items-center gap-2"
                              aria-label={`${br.phoneAriaLabel} ${phone.number}`}
                            >
                              <span
                                dir="ltr"
                                className="text-[12.5px] sm:text-[13px] font-bold phone-ltr tracking-wide"
                                style={{ color: visual.accent }}
                              >
                                {phone.number}
                              </span>
                              <span
                                className="text-[9.5px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded-md"
                                style={{
                                  color: visual.accent,
                                  backgroundColor: visual.accentLight,
                                }}
                              >
                                {phone.key === "line1" ? br.line1 : br.line2}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-2.5">
                      <Clock
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: visual.accent }}
                        strokeWidth={2.5}
                      />
                      <div>
                        <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          {br.hoursLabel}
                        </p>
                        <p className="text-[13px] font-bold" style={{ color: visual.accent }}>
                          {br.daily}
                        </p>
                        <p className="text-[12.5px] text-slate-600 font-medium phone-ltr">
                          {branch.hours}
                        </p>
                      </div>
                    </div>

                    <div className="flex-grow" />

                    {/* Call Button */}
                    <a
                      href={visual.primaryPhone?.href ?? "#"}
                      aria-label={`${br.callAriaLabel} ${branch.name}`}
                      className="mt-1 flex items-center justify-center gap-2.5 w-full rounded-xl py-2.5 sm:py-3 text-[13px] sm:text-[13.5px] en:text-[12.5px] font-extrabold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px active:scale-95 shadow-md hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${visual.gradientFrom}, ${visual.gradientTo})`,
                      }}
                    >
                      <Phone size={14} className="sm:w-[15px] sm:h-[15px]" strokeWidth={2.5} />
                      {br.callNow}
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default Branches;
