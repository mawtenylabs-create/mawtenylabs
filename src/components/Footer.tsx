import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../assets/mawtenylogo.png";

/* Custom Facebook SVG icon */
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
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
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/* Custom WhatsApp SVG icon */
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
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
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const quickLinks = [
  { label: "الرئيسية", href: "/", isRoute: false },
  { label: "الخدمات", href: "/#services", isRoute: false },
  { label: "الفروع", href: "/#branches", isRoute: false },
  { label: "دليل المرضى", href: "/#patient-guide", isRoute: false },
  { label: "التثقيف الصحي", href: "/#health-education", isRoute: false },
  { label: "تواصل معنا", href: "/#contact", isRoute: false },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0c2340] text-white mt-auto border-t border-white/5" dir="rtl" role="contentinfo">
      <Container>
        <div className="flex flex-col items-center justify-center py-8 lg:py-12 gap-5 lg:gap-8 text-center max-w-4xl mx-auto">

          {/* Logo & Name */}
          <Link to="/" className="inline-flex items-center gap-3 group" aria-label="الصفحة الرئيسية">
            <img
              src={logo}
              alt="مختبرات موطني الطبي"
              className="w-10 h-10 object-contain shrink-0 opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="flex flex-col leading-tight text-right">
              <span className="text-[15px] font-black text-white">مختبرات موطني الطبي</span>
              <span className="text-[8px] font-bold tracking-[0.12em] text-[#c92525] uppercase mt-0.5">
                Mawteny Medical Laboratory
              </span>
            </div>
          </Link>

          {/* Quick Links */}
          <nav aria-label="روابط سريعة">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/1BBfancbAu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فيسبوك"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-slate-300 hover:bg-[#c92525] hover:text-white transition-all hover:scale-110"
            >
              <FacebookIcon size={18} />
            </a>
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/972599202229"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساب"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-slate-300 hover:bg-[#c92525] hover:text-white transition-all hover:scale-110"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>

          <div className="pt-6 lg:pt-8 w-full border-t border-white/5">
            <p className="text-[12.5px] text-slate-400">
              © <span className="num-ltr">{year}</span> مختبرات موطني الطبي. جميع الحقوق محفوظة.
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;
