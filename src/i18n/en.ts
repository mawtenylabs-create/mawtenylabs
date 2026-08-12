// ─── English (en) translations ───────────────────────────────────────────────
// Professional medical-grade English — written as if by a healthcare copywriter.
// NOT a word-for-word translation of Arabic.

import type { Translations } from "./ar";

const en: Translations = {
  // ── Meta ──────────────────────────────────────────────────────────────────
  meta: {
    title: "Mawtini Medical Labs | Specialized Laboratory Services",
    description:
      "Mawtini Medical Labs — Precision diagnostics and comprehensive laboratory services delivered to the highest standards, with expert medical oversight. Branches in Kharbatha Al-Misbah and Safa.",
    lang: "en",
    dir: "ltr" as "rtl" | "ltr",
  },

  // ── Navbar ────────────────────────────────────────────────────────────────
  nav: {
    home: "Home",
    services: "Services",
    branches: "Branches",
    patientGuide: "Patient Guide",
    awareness: "Health Education",
    contact: "Contact Us",
    logoAlt: "Mawtini Medical Labs",
    logoAriaLabel: "Mawtini Medical Labs — Home",
    mainNavAriaLabel: "Main Navigation",
    mobileNavAriaLabel: "Mobile Navigation Menu",
    openMenu: "Open Menu",
    closeMenu: "Close Menu",
    ctaContact: "Contact Us",
    langSwitcherAriaLabel: "Switch Language",
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    trustBadge: "Your Trust is Our Responsibility",
    headline: "in Medical Laboratory Results",
    headlineAccent: "Precision",
    body: "We deliver laboratory services of the highest quality and reliability, supervised by a specialized medical team — ensuring fast, accurate results you can count on.",
    ctaBook: "Book a Test",
    ctaBranches: "Our Branches",
    imageAlt: "Modern medical laboratory",
    stats: {
      experience: "Years of Experience",
      branches: "Branches Serving You",
      tests: "Laboratory Tests",
      accuracy: "Diagnostic Accuracy",
    },
  },

  // ── Why Choose Us ─────────────────────────────────────────────────────────
  whyChooseUs: {
    badge: "Why Us",
    heading: "Why Choose Mawtini Medical Labs?",
    subheading:
      "We combine professional expertise with accredited quality standards to deliver a comprehensive and reliable laboratory experience.",
    imageAlt: "Mawtini Medical Labs Team",
    floatTests: "Laboratory Tests",
    floatYears: "Years of Experience",
    bioTitle: "About Mawtini Medical Labs",
    bioText:
      "Mawtini Medical Labs was established in 2015 under the direction of Mr. Mohammed Ali Mazloum, a specialist in laboratory medicine with a Master's degree earned in 1999 and over 30 years of experience in the field. The lab is committed to delivering precise diagnostic services in accordance with the highest standards of quality and professionalism.",
    deliveryTitle: "Multiple Result Delivery Options",
    deliveryText:
      "Results are delivered via WhatsApp or Messenger, in print, or sent directly to your treating physician.",
    features: [
      {
        title: "+500 Laboratory Tests",
        description:
          "We offer more than 500 laboratory tests spanning multiple medical specialties, with high accuracy and reliable performance.",
      },
      {
        title: "Qualified Laboratory Staff",
        description:
          "Our team holds Bachelor's and Master's degrees in laboratory sciences, supplemented by advanced professional training.",
      },
      {
        title: "Accredited Quality Standards",
        description:
          "We adhere to quality standards accredited by the Ministry of Health, Al-Quds University, and the Palestinian Laboratory Medicine Syndicate.",
      },
      {
        title: "Comprehensive Lab Consultation",
        description:
          "Our specialists are available to provide laboratory consultation before, during, and after your results are received.",
      },
      {
        title: "Health Insurance Coverage",
        description:
          "We are accredited with private health insurance providers and a wide range of insurance companies for patient convenience.",
      },
      {
        title: "Electronic Payment",
        description:
          "Visa card payment is accepted for customers of all Palestinian banks — simple and hassle-free.",
      },
    ],
  },

  // ── Services ──────────────────────────────────────────────────────────────
  services: {
    badge: "Accredited & Specialized Laboratory",
    heading: "Our Laboratory Services",
    subheading:
      "We provide a comprehensive range of medical laboratory tests covering a wide array of specialties, utilizing cutting-edge technology and expert oversight to ensure accurate, reliable results.",
    teaserCount: "Over 500 Laboratory Tests Available",
    teaserSub: "Contact us to inquire about any test or laboratory service.",
    teaserBtn: "Inquire About a Service",
    categories: [
      {
        id: "blood",
        label: "Blood & Metabolism",
        services: [
          {
            title: "Complete Blood Count & Panel",
            description:
              "Fundamental and advanced blood analyses to assess health status and diagnose conditions with precision.",
          },
          {
            title: "Diabetes Diagnosis & Monitoring",
            description:
              "Blood glucose levels, HbA1c, and all key diabetes-related markers and indicators.",
          },
          {
            title: "Cardiac & Lipid Profile",
            description:
              "Cholesterol, triglycerides, and cardiovascular risk factors for heart health assessment.",
          },
          {
            title: "Hematology Tests",
            description:
              "Diagnosis and monitoring of bleeding disorders, coagulation abnormalities, and various blood diseases.",
          },
        ],
      },
      {
        id: "hormones",
        label: "Hormones & Reproductive Health",
        services: [
          {
            title: "Hormone Tests",
            description:
              "Comprehensive assessment of all endocrine gland hormones and their functions with high precision.",
          },
          {
            title: "Fertility Tests",
            description:
              "Male and female hormonal profiles and a full evaluation of reproductive health and fertility.",
          },
          {
            title: "Maternal & Pediatric Tests",
            description:
              "Pregnancy screening, maternal and fetal health monitoring, and specialized pediatric laboratory tests.",
          },
        ],
      },
      {
        id: "organs",
        label: "Internal Organ Function",
        services: [
          {
            title: "Liver, Kidney & Pancreas Function",
            description:
              "Comprehensive tests for vital organ function assessed with high diagnostic accuracy.",
          },
          {
            title: "Gastrointestinal Tests",
            description:
              "Diagnosis and assessment of gastrointestinal disorders through specialized laboratory panels.",
          },
          {
            title: "Viral Infection Testing",
            description:
              "Detection and monitoring of viral infections using the latest diagnostic technologies.",
          },
          {
            title: "Microbiological Culture Tests",
            description:
              "Laboratory cultures of body fluids to identify pathogenic organisms and guide treatment.",
          },
        ],
      },
      {
        id: "immunity",
        label: "Immunology & Disease",
        services: [
          {
            title: "Immunology & Autoimmune Tests",
            description:
              "Evaluation of the immune system and diagnosis of various autoimmune and immunological disorders.",
          },
          {
            title: "Allergy Tests",
            description:
              "Diagnosis and assessment of a wide range of allergic conditions through specialized laboratory testing.",
          },
          {
            title: "Bone & Rheumatology Tests",
            description:
              "Bone health screening, inflammatory marker testing, and diagnosis of rheumatic diseases.",
          },
          {
            title: "Dermatology & Hair Tests",
            description:
              "Laboratory diagnosis of skin and hair conditions and their underlying causes.",
          },
        ],
      },
      {
        id: "screening",
        label: "Vitamins & Tumor Markers",
        services: [
          {
            title: "Vitamin Tests",
            description:
              "Measurement of vitamin levels and essential micronutrients in the body.",
          },
          {
            title: "Tumor Marker Tests",
            description:
              "Laboratory tumor marker panels to support clinical diagnosis and medical follow-up.",
          },
        ],
      },
    ],
  },

  // ── Branches ──────────────────────────────────────────────────────────────
  branches: {
    badge: "Always Close to You",
    heading: "Mawtini Medical Labs — Branches",
    subheading:
      "Find the branch nearest to you. Our team is delighted to welcome you every day and provide laboratory services to the highest quality standards.",
    branchSubtitle: "Mawtini Medical Labs",
    addressLabel: "Address",
    phonesLabel: "Phone Numbers",
    hoursLabel: "Working Hours",
    daily: "Daily",
    line1: "Line 1",
    line2: "Line 2",
    callNow: "Call Now",
    callAriaLabel: "Call",
    phoneAriaLabel: "Call",
    branches: [
      {
        id: "kharba",
        name: "Kharbatha Al-Misbah Branch",
        addressLines: [
          "Kharbatha Al-Misbah",
          "Opposite the Old Village Council",
          "Next to the Health Clinic",
        ],
        hours: "8:30 AM – 10:30 PM",
      },
      {
        id: "safa",
        name: "Safa Branch",
        addressLines: [
          "Safa",
          "Abu Mus'ab Building",
          "Al-Madares Street",
          "Opposite Novoté Mustafa",
        ],
        hours: "8:30 AM – 12:00 Midnight",
      },
    ],
  },

  // ── Patient Guide ──────────────────────────────────────────────────────────
  patientGuide: {
    heading: "We Are With You From Sample Collection to Results",
    subheading:
      "At Mawtini Medical Labs, we are committed to making your experience clear and seamless — from the moment you arrive to when you receive your results — with full support and answers to all your questions.",
    steps: [
      {
        id: 1,
        tab: "Before the Test",
        title: "Before Your Test",
        description:
          "To ensure accurate results, please follow these important instructions:",
        points: [
          "Observe the required fasting period if your test requires it.",
          "Drinking water is permitted for most tests — confirm with our staff.",
          "Inform the laboratory of any medications or supplements you are taking.",
          "Ask about any specific instructions prior to sample collection.",
        ],
      },
      {
        id: 2,
        tab: "Sample Collection",
        title: "Professional Sample Collection",
        description:
          "We provide a comfortable and safe environment during sample collection, adhering to the highest standards of sterilization and quality control.",
        points: [
          "Single-use sterile medical equipment is used for every patient.",
          "Our qualified and trained staff handle all types of sample collection.",
          "A comfortable and private environment is provided for all visitors.",
          "Swift and precise technique to minimize any discomfort.",
        ],
      },
      {
        id: 3,
        tab: "Results & Pricing",
        title: "Receiving Results & Pricing",
        description:
          "We are committed to delivering accurate, reliable results as quickly as possible, with full transparency in our pricing.",
        points: [
          "Results are reviewed and verified by consultant physicians.",
          "Expedited processing is available for urgent tests.",
          "Results are available electronically or in print, per your preference.",
          "Pricing follows the official Palestinian Laboratory Medicine Syndicate fee schedule.",
        ],
      },
      {
        id: 4,
        tab: "Feedback & Support",
        title: "Support & Follow-Up Services",
        description:
          "Your journey with us doesn't end when you receive your results. Our medical team is ready to offer guidance and answer all your questions.",
        points: [
          "Clear and straightforward interpretation of your medical results.",
          "Guidance on next medical steps when needed.",
          "Secure electronic medical records maintained for returning patients.",
          "All feedback and suggestions are welcomed to help us improve.",
        ],
      },
    ],
    durationTitle: "Result Turnaround",
    durationText: "Result times vary depending on the type of test.",
    durationDetail:
      "From 15 minutes to over 3 days for select specialized tests.",
    pricesTitle: "Pricing",
    pricesText:
      "We follow the fee schedule accredited by the Palestinian Laboratory Medicine Syndicate.",
    pricesDetail:
      "Special considerations are available for eligible social cases within available resources.",
    complaintsTitle: "Feedback & Suggestions",
    complaintsText: "We welcome all your comments and suggestions.",
    complaintsDetail:
      "We continually strive to improve our services and enhance the patient experience.",
  },

  // ── Health Awareness ───────────────────────────────────────────────────────
  healthAwareness: {
    badge: "Health Education",
    heading: "Prevention Begins with Knowledge",
    subheading:
      "At Mawtini Medical Labs, we believe that health education is an essential part of protecting community health and preventing disease.",
    periodicBadge: "Prevention",
    periodicTitle: "Why Are Routine Health Screenings Important?",
    periodicDesc:
      "Regular health screenings enable early detection of many conditions, improving treatment outcomes and preventing complications before symptoms appear.",
    periodicBullets: [
      "Early detection of disease.",
      "Continuous monitoring of your health status.",
      "Prevention of serious complications.",
      "Enhanced quality of life.",
    ],
    guidelinesBadge: "Guidelines",
    guidelinesTitle: "Pre-Test Instructions",
    guidelinesDesc:
      "To ensure the accuracy of your laboratory results, it is important to follow these key guidelines before your tests.",
    guidelinesBullets: [
      "Observe the required fasting period.",
      "Drink water as needed, unless instructed otherwise.",
      "Inform the laboratory of any medications you are taking.",
      "Arrive on time for your scheduled appointment.",
    ],
    articlesBadge: "Articles",
    articlesTitle: "Health Articles & Education",
    articlesDesc:
      "We are dedicated to promoting health awareness through educational articles that empower our community with reliable medical knowledge.",
    articles: [
      {
        title: "The Importance of Regular Diabetes Screening",
        link: "https://www.magrabihealth.com/ar/blog/%D9%86%D8%B3%D8%A8%D8%A9-%D8%A7%D9%84%D8%B3%D9%83%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%AF%D9%85-2",
      },
      {
        title: "How to Maintain a Healthy Blood Pressure",
        link: "https://mawdoo3.com/%D9%83%D9%8A%D9%81_%D8%A3%D8%AD%D8%A7%D9%81%D8%B8_%D8%B9%D9%84%D9%89_%D9%85%D8%B3%D8%AA%D9%88%D9%89_%D8%B6%D8%BA%D8%B7_%D8%A7%D9%84%D8%AF%D9%85",
      },
      {
        title: "When Should You Get a Medical Check-Up?",
        link: "https://www.apollohospitals.com/ar/health-library/preventive-health-checks-when-and-why",
      },
    ],
  },

  // ── Gallery ───────────────────────────────────────────────────────────────
  gallery: {
    badge: "Visual Tour",
    heading: "Inside Mawtini Medical Labs",
    subheading:
      "Take a closer look at our professional environment, our accredited state-of-the-art laboratory equipment, and our facilities designed with patient comfort in mind.",
    closeAria: "Close",
    zoomAlt: "Enlarged image",
    images: [
      "Laboratory Overview",
      "Reception Area",
      "Our Medical Staff",
      "Compassionate Care",
      "Latest Technology",
      "Test Precision",
      "Patient Comfort",
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    badge: "Contact Us",
    heading: "We Are Here for You",
    subheading:
      "Our laboratory team is available to answer your questions before, during, and after you receive your results.",
    hoursLabel: "Daily • 8:30 AM – 12:00 Midnight",
    bottomCta:
      "Our team is ready to assist you and answer all inquiries during official working hours.",
    facebook: {
      title: "Facebook Page",
      value: "Mawtini Medical Labs",
      btnLabel: "Visit Page",
    },
    email: {
      title: "Email",
      value: "m.mazloum.44@gmail.com",
      btnLabel: "Send Email",
    },
    whatsappSectionTitle: "Book Your Appointment via WhatsApp",
    whatsappSectionDesc: "Our booking team is available on WhatsApp. Choose either number to contact us directly and arrange your appointment.",
    whatsapp1: {
      title: "Booking via WhatsApp",
      value: "+972 599202229",
      btnLabel: "Chat on WhatsApp",
    },
    whatsapp2: {
      title: "Booking via WhatsApp",
      value: "+972 569202229",
      btnLabel: "Chat on WhatsApp",
    },
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    logoAlt: "Mawtini Medical Labs",
    logoAriaLabel: "Home",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Branches", href: "/#branches" },
      { label: "Patient Guide", href: "/#patient-guide" },
      { label: "Health Education", href: "/#health-education" },
      { label: "Contact Us", href: "/#contact" },
    ],
    quickLinksAriaLabel: "Quick Links",
    facebookAriaLabel: "Facebook",
    whatsappAriaLabel: "WhatsApp",
    copyright: "Mawtini Medical Labs. All rights reserved.",
  },
};

export default en;
