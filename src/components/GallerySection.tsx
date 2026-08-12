import { useState } from "react";
import { ZoomIn, X } from "lucide-react";
import Section from "./Section";
import Container from "./Container";
import { useLang } from "../context/LanguageContext";

import mazlum5 from "../assets/mazlum5.png";
import mazlum6 from "../assets/mazlum6.jpeg";
import mazlum7 from "../assets/mazlum7.png";
import mazlum8 from "../assets/mazlum8.jpeg";
import mazlum2 from "../assets/mazlum2.jpeg";
import mazlum3 from "../assets/mazlum3.png";
import mazlum4 from "../assets/mazlum4..jpeg";

const galleryImageSources = [
  { id: 1, src: mazlum5, className: "col-span-2 md:col-span-2 md:row-span-2 h-[160px] md:h-[500px]" },
  { id: 2, src: mazlum6, className: "col-span-1 md:col-span-1 md:row-span-1 h-[120px] md:h-[240px]" },
  { id: 3, src: mazlum7, className: "col-span-1 md:col-span-1 md:row-span-2 h-[120px] md:h-[500px]" },
  { id: 4, src: mazlum8, className: "col-span-1 md:col-span-1 md:row-span-1 h-[120px] md:h-[240px]" },
  { id: 5, src: mazlum2, className: "col-span-1 md:col-span-1 md:row-span-1 h-[120px] md:h-[240px]" },
  { id: 6, src: mazlum3, className: "col-span-2 md:col-span-2 md:row-span-1 h-[160px] md:h-[240px]" },
  { id: 7, src: mazlum4, className: "col-span-2 md:col-span-1 md:row-span-1 h-[160px] md:h-[240px]" },
];

function GallerySection() {
  const { t, isRTL } = useLang();
  const gal = t.gallery;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <Section id="gallery" className="py-8 lg:py-24 bg-white">
      <Container>
        {/* Header */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 lg:mb-16 animate-fade-in-up"
        >
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-[14px] font-bold text-emerald-600 mb-4">
            {gal.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0c2340] mb-5 leading-tight tracking-tight">
            {gal.heading}
          </h2>
          <p className="text-[16px] sm:text-[17px] text-slate-500 leading-relaxed font-medium">
            {gal.subheading}
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-min"
        >
          {galleryImageSources.map((img, idx) => {
            const label = gal.images[idx] ?? "";
            return (
              <div
                key={img.id}
                className={`group relative overflow-hidden rounded-[1.25rem] lg:rounded-[1.5rem] bg-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-blue-900/10 animate-fade-up ${img.className}`}
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2340]/90 via-[#0c2340]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 lg:p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-1.5 lg:mb-3 shadow-sm">
                      <ZoomIn size={16} />
                    </div>
                    <h4 className="text-white font-bold text-[13px] lg:text-[16px] en:text-[12px] en:lg:text-[15px] leading-snug">{label}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-[#0c2340]/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-md"
            aria-label={gal.closeAria}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt={gal.zoomAlt}
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Section>
  );
}

export default GallerySection;
