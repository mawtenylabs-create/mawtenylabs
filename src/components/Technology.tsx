import { Cpu, ShieldCheck, Microscope } from "lucide-react";
import Section from "./Section";
import Container from "./Container";

const technologies = [
  {
    title: "أجهزة مخبرية حديثة",
    description: "استخدام أحدث ما توصلت إليه التكنولوجيا الطبية في مجال التحليل الآلي، مما يضمن سرعة وموثوقية النتائج.",
    icon: Cpu,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "أنظمة جودة متقدمة",
    description: "تطبيق أنظمة مراقبة الجودة الداخلية والخارجية الصارمة لضمان أعلى مستويات الدقة في كل فحص مخبري.",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "تقنيات تشخيص دقيقة",
    description: "الاعتماد على التقنيات الجزيئية والمجهرية المتطورة للوصول إلى أدق التشخيصات التي تدعم الخطة العلاجية.",
    icon: Microscope,
    color: "text-[#c92525]",
    bg: "bg-red-50",
  }
];

function Technology() {
  return (
    <Section className="bg-slate-50 relative overflow-hidden">
      {/* Abstract Background pattern */}
      <svg className="absolute inset-0 w-full h-full text-slate-200 pointer-events-none opacity-40" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="tech-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 10 M 0 0 L 10 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </pattern>
        <rect x="0" y="0" width="100" height="100" fill="url(#tech-pattern)" />
      </svg>

      <Container>
        <div dir="rtl" className="relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0c2340] mb-4">
              أجهزتنا وتقنياتنا
            </h2>
            <p className="text-[16px] text-slate-500 leading-relaxed">
              نعتمد على أحدث الأجهزة والتقنيات المخبرية الحديثة لضمان تقديم نتائج دقيقة وموثوقة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${tech.bg}`}>
                    <Icon size={32} className={tech.color} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#0c2340] mb-3">{tech.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-[14.5px]">
                    {tech.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Technology;
