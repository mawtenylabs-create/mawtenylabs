import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  MessageSquare,
  Clock,
  CreditCard,
  ClipboardCheck,
  Microscope,
  FileText,
  HeartHandshake,
} from "lucide-react";
import Section from "./Section";
import Container from "./Container";
import { useLang } from "../context/LanguageContext";

const stepIcons = [ClipboardCheck, Microscope, FileText, HeartHandshake];

function PatientGuideSection() {
  const { t, isRTL } = useLang();
  const pg = t.patientGuide;

  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeIndex = pg.steps.findIndex((s) => s.id === activeStep);
  const currentStep = pg.steps[activeIndex] ?? pg.steps[0];
  const StepIcon = stepIcons[activeIndex] ?? ClipboardCheck;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % pg.steps.length) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, pg.steps.length]);

  const [prevIsRTL, setPrevIsRTL] = useState(isRTL);
  if (prevIsRTL !== isRTL) {
    setPrevIsRTL(isRTL);
    setActiveStep(1);
    setIsAutoPlaying(true);
  }

  const handleManualClick = (id: number) => {
    if (id === activeStep) return;
    setActiveStep(id);
    setIsAutoPlaying(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  };

  return (
    <Section id="patient-guide" className="relative overflow-hidden bg-[#F8FAFC] py-12 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/30 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-emerald-100/30 to-transparent blur-[100px]" />
      </div>

      <Container>
        {/* Section Header */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-16 animate-fade-in-up"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0c2340] mb-5 leading-tight tracking-tight">
            {pg.heading}
          </h2>
          <p className="text-[16px] sm:text-[17px] text-slate-500 leading-relaxed font-medium">
            {pg.subheading}
          </p>
        </div>

        {/* Interactive Timeline */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="w-full overflow-x-auto hide-scroll pb-8 pt-4 snap-x mb-2 lg:mb-8"
        >
          <div className="flex items-start justify-between relative min-w-[480px] sm:min-w-[600px] md:min-w-0 max-w-4xl mx-auto px-4 sm:px-8">
            {pg.steps.map((step, index) => {
              const isActive = step.id === activeStep;
              const isPassed = index <= activeIndex;
              const isLast = index === pg.steps.length - 1;

              return (
                <React.Fragment key={step.id}>
                  <div className="relative flex flex-col items-center gap-3 z-10 w-28 en:w-32 snap-center">
                    <button
                      onClick={() => handleManualClick(step.id)}
                      className="w-full flex flex-col items-center gap-3 group focus:outline-none"
                    >
                      <div
                        className={`w-[18px] h-[18px] rounded-full transition-all duration-500 shadow-sm ${
                          isActive
                            ? "bg-[#082f63] scale-150 ring-4 ring-blue-100"
                            : isPassed
                            ? "bg-[#082f63]"
                            : "bg-slate-300 group-hover:bg-[#082f63]/50"
                        }`}
                      />
                      <span
                        className={`text-[14px] sm:text-[15.5px] font-black whitespace-nowrap transition-colors duration-300 ${
                          isActive ? "text-[#082f63]" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        {step.tab}
                      </span>
                    </button>
                  </div>

                  {!isLast && (
                    <div className="flex-grow mt-[8px] h-[2px] bg-slate-200 relative mx-2">
                      <div
                        className="absolute top-0 right-0 h-full bg-[#082f63] transition-all duration-700 ease-in-out"
                        style={{ width: index < activeIndex ? "100%" : "0%" }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Active Content Panel */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="bg-white rounded-[20px] lg:rounded-[32px] p-5 sm:p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 mb-6 lg:mb-8 transition-all min-h-[300px] lg:min-h-[400px]"
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center">
            {/* Text Content */}
            <div
              className="w-full lg:w-[65%] order-2 lg:order-1 flex flex-col"
              key={`text-${activeStep}-${isRTL}`}
            >
              <div className="animate-fade-up">
                <h3
                  className={`text-xl sm:text-3xl lg:text-[32px] en:lg:text-[28px] font-black text-[#0c2340] mb-3 lg:mb-4 leading-snug ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {currentStep.title}
                </h3>
                <p
                  className={`text-[13.5px] sm:text-[17px] text-slate-500 leading-relaxed mb-5 lg:mb-8 max-w-xl font-medium ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {currentStep.description}
                </p>
                <ul className="flex flex-col gap-3 sm:gap-5">
                  {currentStep.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 group/item animate-fade-in"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-blue-50 text-[#082f63] mt-0.5 transition-transform duration-300 group-hover/item:scale-110 group-hover:bg-[#082f63] group-hover:text-white shadow-sm border border-blue-100/50">
                        <Check size={12} className="lg:w-[14px] lg:h-[14px]" strokeWidth={3} />
                      </span>
                      <span
                        className={`text-[13.5px] sm:text-[16px] text-slate-700 leading-relaxed font-semibold ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Icon */}
            <div className="w-full lg:w-[35%] order-1 lg:order-2 flex justify-center items-center">
              <div className="relative w-28 h-28 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-[#082f63]/5 flex items-center justify-center transition-transform duration-700 hover:scale-105">
                <div key={`icon-${activeStep}`} className="animate-fade-in text-[#082f63]">
                  <StepIcon size={48} className="lg:w-[80px] lg:h-[80px]" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="w-full overflow-x-auto hide-scroll pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            dir={isRTL ? "rtl" : "ltr"}
            className="flex sm:grid sm:grid-cols-3 gap-3 lg:gap-10 snap-x w-max sm:w-auto"
          >
            {/* Duration */}
            <div className="bg-white rounded-[16px] lg:rounded-[20px] p-4 lg:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col h-full animate-fade-up min-w-[260px] sm:min-w-0 snap-center">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#082f63] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Clock size={20} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-[#0c2340] text-[16px]">{pg.durationTitle}</h4>
            </div>
            <p className="text-slate-500 font-medium text-[13.5px] leading-relaxed mb-3">{pg.durationText}</p>
            <div className="mt-auto pt-3 border-t border-slate-50">
              <p className="text-[#082f63] text-[13.5px] font-bold">{pg.durationDetail}</p>
            </div>
          </div>

          {/* Prices */}
          <div className="bg-white rounded-[16px] lg:rounded-[20px] p-4 lg:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col h-full animate-fade-up delay-100 min-w-[260px] sm:min-w-0 snap-center">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <CreditCard size={20} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-[#0c2340] text-[16px]">{pg.pricesTitle}</h4>
            </div>
            <p className="text-slate-500 font-medium text-[13.5px] leading-relaxed mb-3">{pg.pricesText}</p>
            <div className="mt-auto pt-3 border-t border-slate-50">
              <p className="text-emerald-700 text-[13.5px] font-bold">{pg.pricesDetail}</p>
            </div>
          </div>

          {/* Complaints */}
          <div className="bg-white rounded-[16px] lg:rounded-[20px] p-4 lg:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col h-full animate-fade-up delay-200 min-w-[260px] sm:min-w-0 snap-center">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare size={20} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-[#0c2340] text-[16px]">{pg.complaintsTitle}</h4>
            </div>
            <p className="text-slate-500 font-medium text-[13.5px] leading-relaxed mb-3">{pg.complaintsText}</p>
            <div className="mt-auto pt-3 border-t border-slate-50">
              <p className="text-amber-700 text-[13.5px] font-bold">{pg.complaintsDetail}</p>
            </div>
          </div>
          </div>
        </div>
      </Container>

      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </Section>
  );
}

export default PatientGuideSection;
