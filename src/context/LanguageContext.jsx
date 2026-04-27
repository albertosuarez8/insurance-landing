import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const STORAGE_KEY = "insurance-landing-locale";

const translations = {
  en: {
    nav: {
      title: "General Liability Insurance",
      getQuote: "Get Your Free Quote",
      phone: "(786) 636-1009",
      backToHome: "Back to home",
    },
    hero: {
      badge: "General Liability Insurance",
      title: "Protect Your Business from Unexpected Risks",
      titleLine1: "Protect Your",
      titleLine2: "Business from",
      titleLine2Orange: "",
      titleLine3: "Unexpected Risks",
      subtitle:
        "Get comprehensive coverage that shields your business from property damage, bodily injury, and advertising claims. Fast approval, competitive rates.",
      badges: ["Legal Protection", "Property Damage", "Bodily Injury", "Advertising Claims"],
    },
    quoteForm: {
      heading: "Get Your Free Quote",
      subtitle: "Fill out the form and we’ll get you a competitive quote in minutes.",
      companyName: "Company Name",
      companyPlaceholder: "Your company name",
      yourName: "Your Name",
      namePlaceholder: "Full name",
      phone: "Phone",
      phonePlaceholder: "(555) 123-4567",
      email: "Email",
      emailPlaceholder: "you@company.com",
      typeOfBusiness: "Type of Business",
      numberOfEmployees: "Number of Employees",
      select: "Select...",
      additionalInfo: "Additional Information",
      optional: "(Optional)",
      additionalPlaceholder: "Tell us about your business or coverage needs...",
      privacyPrefix: "I have read and agree to the",
      privacyLink: "privacy policy",
      getMyQuote: "Get My Quote",
      sending: "Sending…",
      submitError: "Something went wrong. Please try again.",
      businessTypes: [
        "Contractor",
        "Retail",
        "Restaurant",
        "Professional Services",
        "Healthcare",
        "Technology",
        "Other",
      ],
      employeeCounts: ["1-5", "6-10", "11-50", "51-200", "200+"],
      trustBadges: [
        { label: "Approval Time", sub: "Under 15 min" },
        { label: "Bundle Savings", sub: "Save 10%" },
        { label: "Online Access", sub: "24/7" },
        { label: "Rated Carriers", sub: "A+ rated" },
      ],
      statsBar: [
        { value: "15 min", label: "Approval Time" },
        { value: "10%", label: "Bundle Savings" },
        { value: "24/7", label: "Online Access" },
        { value: "A+", label: "Rated Carriers" },
      ],
      emailInvalid: "Please enter a valid email address.",
      phoneInvalid: "Please enter a valid phone number (at least 10 digits).",
    },
    whyYouNeed: {
      title: "Why You Need General Liability Insurance",
      titleBefore: "Why You Need ",
      titleHighlight: "General",
      titleAfter: " Liability Insurance",
      items: [
        {
          title: "Legal Protection",
          description:
            "Covers legal fees and settlements if your business faces a lawsuit",
        },
        {
          title: "Property Damage",
          description:
            "Pays for damages you accidentally cause to someone else's property",
        },
        {
          title: "Bodily Injury",
          description:
            "Covers medical expenses if someone is injured on your premises",
        },
        {
          title: "Advertising Claims",
          description:
            "Protects against claims of slander, libel, or copyright infringement",
        },
      ],
    },
    whatCovers: {
      title: "What Does General Liability Cover?",
      items: [
        "Third-party bodily injury claims",
        "Property damage to others",
        "Personal and advertising injury",
        "Legal defense costs",
        "Medical payments",
        "Completed operations coverage",
      ],
    },
    whyChooseUs: {
      aRated: "A+ Rated",
      carriers: "Insurance Carriers",
      title: "Why Choose Us?",
      titleBefore: "Why ",
      titleHighlight: "Choose",
      titleAfter: " Us?",
      subtitle: "We make it simple to get the coverage your business needs.",
      benefits: [
        {
          title: "Independent & Client-Focused",
          description:
            "We work with multiple A-rated carriers to find you the best coverage",
        },
        {
          title: "Fast Quotes & Easy Process",
          description:
            "Get approved in under 15 minutes with our streamlined process",
        },
        {
          title: "Bilingual Service",
          description:
            "Full support in English and Spanish for your convenience",
        },
        {
          title: "Local Experts",
          description:
            "Florida-based team that understands your business needs",
        },
      ],
    },
    finalCta: {
      title: "Ready to Protect Your Business?",
      subtitle:
        "Get your free General Liability quote today. No obligations, just answers.",
      getStarted: "Get Started Now",
      or: "or",
      call: "Call (786) 636-1009",
    },
    footer: {
      companyName: "Boapr Insurance",
      description:
        "Independent insurance agency dedicated to helping families and businesses protect what matters most.",
      contact: "Contact",
      legal: "Legal",
      privacyPolicy: "privacy policy",
      copyright: "Boapr Insurance. All rights reserved.",
    },
    quoteResult: {
      title: "General Liability Insurance",
      backToHome: "Back to home",
      congratulations: "Congratulations!",
      quoteMessage: "This is your estimated quote. We'll build from here.",
      followUp: "A team member will reach out shortly with next steps and your full quote details.",
      call: "Call (786) 636-1009",
    },
  },
  es: {
    nav: {
      title: "Seguro de Responsabilidad General",
      getQuote: "Cotización Gratis",
      phone: "(786) 636-1009",
      backToHome: "Volver al inicio",
    },
    hero: {
      badge: "SEGURO DE GENERAL LIABILITY",
      title: "Proteja Su Negocio de Riesgos Inesperados",
      titleLine1: "Proteja Su Negocio",
      titleLine2: "de ",
      titleLine2Orange: "Riesgos",
      titleLine3: "Inesperados",
      subtitle:
        "Obtenga cobertura integral que protege su negocio de daños a la propiedad, lesiones corporales y reclamos publicitarios. Aprobación rápida, tarifas competitivas.",
      badges: [
        "Protección Legal",
        "Lesiones Corporales",
        "Daños a Propiedad",
        "Reclamos Publicitarios",
      ],
    },
    quoteForm: {
      heading: "Obtenga Su Cobertura Ya",
      subtitle: "Completa el formulario y te enviaremos una cotización competitiva en minutos.",
      companyName: "Nombre de la Empresa",
      companyPlaceholder: "ABC Company",
      yourName: "Su Nombre",
      namePlaceholder: "John Doe",
      phone: "Teléfono",
      phonePlaceholder: "(786) 000-0000",
      email: "Correo electrónico",
      emailPlaceholder: "email@company.com",
      typeOfBusiness: "Tipo de Negocio",
      numberOfEmployees: "Número de Empleados",
      select: "Select...",
      additionalInfo: "Información Adicional (Opcional)",
      optional: "",
      additionalPlaceholder: "...",
      privacyPrefix: "He leído y acepto la",
      privacyLink: "política de privacidad",
      getMyQuote: "Obtener Cotización",
      sending: "Enviando…",
      submitError: "Algo salió mal. Por favor intente de nuevo.",
      emailInvalid: "Por favor ingrese un correo electrónico válido.",
      phoneInvalid: "Por favor ingrese un número de teléfono válido (al menos 10 dígitos).",
      businessTypes: [
        "Contratista",
        "Minorista",
        "Restaurante",
        "Servicios Profesionales",
        "Salud",
        "Tecnología",
        "Otro",
      ],
      employeeCounts: ["1-5", "6-10", "11-50", "51-200", "200+"],
      trustBadges: [
        { label: "Tiempo de Aprobación", sub: "Menos de 15 min" },
        { label: "Ahorro al Agrupar", sub: "Ahorra 10%" },
        { label: "Acceso en Línea", sub: "24/7" },
        { label: "Aseguradoras Calificadas", sub: "Calificación A+" },
      ],
      statsBar: [
        { value: "15 min", label: "Tiempo de Aprobación" },
        { value: "10%", label: "Ahorro en Paquetes" },
        { value: "24/7", label: "Acceso en Línea" },
        { value: "A+", label: "Aseguradoras" },
      ],
    },
    whyYouNeed: {
      title: "Por Qué Necesita Seguro de Responsabilidad Civil (General Liability)",
      titleBefore: "Por Qué Necesita Seguro de ",
      titleHighlight: "Responsabilidad",
      titleAfter: " Civil (General Liability)",
      items: [
        {
          title: "Protección Legal",
          description:
            "Cubre honorarios legales y acuerdos si su negocio enfrenta una demanda",
        },
        {
          title: "Daños a Propiedad",
          description:
            "Paga por daños que accidentalmente cause a la propiedad de terceros",
        },
        {
          title: "Lesiones Corporales",
          description:
            "Cubre gastos médicos si alguien se lesiona en sus instalaciones",
        },
        {
          title: "Reclamos Publicitarios",
          description:
            "Protege contra reclamos de difamación, calumnia o violación de derechos de autor",
        },
      ],
    },
    whatCovers: {
      title: "¿Qué Cubre la Responsabilidad General?",
      items: [
        "Reclamos por lesiones corporales de terceros",
        "Daños a propiedad ajena",
        "Lesiones personales y publicitarias",
        "Costos de defensa legal",
        "Pagos médicos",
        "Cobertura de operaciones completadas",
      ],
    },
    whyChooseUs: {
      aRated: "Calificación A+",
      carriers: "Aseguradoras",
      title: "¿Por Qué Elegir Boapr Insurance?",
      titleBefore: "¿Por Qué Elegir ",
      titleHighlight: "Boapr Insurance",
      titleAfter: "?",
      subtitle: "Hacemos sencillo obtener la cobertura que su negocio necesita.",
      benefits: [
        {
          title: "Independiente y Enfocado en el Cliente",
          description:
            "Trabajamos con múltiples aseguradoras A+ para encontrar la mejor cobertura",
        },
        {
          title: "Cotizaciones Rápidas y Proceso Fácil",
          description:
            "Aprobación en menos de 15 minutos con nuestro proceso simplificado",
        },
        {
          title: "Servicio Bilingüe",
          description:
            "Soporte completo en inglés y español para su conveniencia",
        },
        {
          title: "Expertos Locales",
          description:
            "Equipo basado en Florida que entiende las necesidades de su negocio",
        },
      ],
    },
    finalCta: {
      title: "¿Listo para Proteger Su Negocio?",
      subtitle:
        "Obtenga su cotización gratuita de Responsabilidad General hoy. Sin obligaciones, solo respuestas.",
      getStarted: "Comenzar Ahora",
      or: "O",
      call: "llámenos al (786) 636-1009",
    },
    footer: {
      companyName: "Boapr Insurance",
      description:
        "Agencia de seguros independiente dedicada a ayudar a familias y negocios a proteger lo que más importa.",
      contact: "Contacto",
      legal: "Legal",
      privacyPolicy: "política de privacidad",
      copyright: "Boapr Insurance. Todos los derechos reservados.",
    },
    quoteResult: {
      title: "Seguro de Responsabilidad General",
      backToHome: "Volver al inicio",
      congratulations: "Felicitaciones",
      quoteMessage: "Estás a un paso de conseguir tu cotización.",
      followUp:
        "Un miembro del equipo se comunicará pronto con los próximos pasos y detalles completos de tu cotización.",
      call: "Llamar al (786) 636-1009",
    },
  },
};

const homeownersTranslations = {
  en: {
    nav: {
      title: "Homeowners Insurance",
      getQuote: "Get Your Free Quote",
      phone: "(786) 636-1009",
      backToHome: "Back to home",
    },
    hero: {
      badge: "HOMEOWNERS INSURANCE",
      titleLine1: "Protect Your Home",
      titleLine2: "from ",
      titleLine2Orange: "Nature's Fury",
      titleLine3: "",
      subtitle:
        "Get comprehensive coverage that shields your home from hurricanes, floods, and unexpected disasters. Fast approval, competitive rates tailored for Florida homeowners.",
      badges: ["Hurricane Coverage", "Flood Protection", "Wind Damage", "Liability Coverage"],
    },
    homeownersCarriers: {
      kicker: "Trusted by Florida Homeowners",
      title: "Top-Rated Carriers We Work With",
    },
    quoteForm: {
      heading: "Get Your Free Quote",
      subtitle: "Fill out the form and we'll get you a competitive quote in minutes.",
      companyName: "Property Address",
      companyPlaceholder: "123 Main St, Miami, FL",
      yourName: "Full Name",
      namePlaceholder: "Full name",
      phone: "Phone",
      phonePlaceholder: "(555) 123-4567",
      email: "Email",
      emailPlaceholder: "you@email.com",
      typeOfBusiness: "Property Type",
      numberOfEmployees: "Coverage Amount",
      select: "Select...",
      additionalInfo: "Additional Information",
      optional: "(Optional)",
      additionalPlaceholder: "Tell us about your home and coverage needs...",
      privacyPrefix: "I have read and agree to the",
      privacyLink: "privacy policy",
      getMyQuote: "Get My Quote",
      sending: "Sending…",
      submitError: "Something went wrong. Please try again.",
      businessTypes: [
        "Single-Family Home",
        "Condo",
        "Townhome",
        "Duplex",
        "Rental Property",
        "Other",
      ],
      employeeCounts: ["$150k-$300k", "$300k-$500k", "$500k-$750k", "$750k-$1M", "$1M+"],
      statsBar: [
        { value: "15 min", label: "Approval Time" },
        { value: "10%", label: "Bundle Savings" },
        { value: "24/7", label: "Online Access" },
        { value: "A+", label: "Rated Carriers" },
      ],
      emailInvalid: "Please enter a valid email address.",
      phoneInvalid: "Please enter a valid phone number (at least 10 digits).",
    },
    whyYouNeed: {
      title: "Why You Need Homeowners Insurance",
      titleBefore: "Why You Need ",
      titleHighlight: "Homeowners",
      titleAfter: " Insurance",
      items: [
        {
          title: "Hurricane Protection",
          description:
            "Coverage for wind damage from tropical storms and hurricanes that are common in Florida",
        },
        {
          title: "Flood Coverage",
          description:
            "Protect against water damage from flooding, heavy rains, and storm surges",
        },
        {
          title: "Dwelling Coverage",
          description:
            "Pays to repair or rebuild your home if damaged by covered perils",
        },
        {
          title: "Liability Protection",
          description:
            "Covers legal expenses if someone is injured on your property",
        },
      ],
    },
    whatCovers: {
      title: "What Does Homeowners Insurance Cover?",
      items: [
        "Hurricane and wind damage",
        "Water damage and flooding",
        "Fire and smoke damage",
        "Theft and vandalism",
        "Personal property protection",
        "Additional living expenses",
        "Personal liability coverage",
        "Medical payments to others",
      ],
    },
    whyChooseUs: {
      aRated: "A+ Rated",
      carriers: "Insurance Carriers",
      title: "Why Choose Boapr Insurance?",
      titleBefore: "Why Choose ",
      titleHighlight: "Boapr Insurance",
      titleAfter: "?",
      subtitle: "We make it simple to get the coverage your home needs.",
      benefits: [
        {
          title: "Independent & Client-Focused",
          description:
            "We work with multiple A-rated carriers to find you the best coverage at competitive rates",
        },
        {
          title: "Fast Quotes & Easy Process",
          description:
            "Get approved in under 15 minutes with our streamlined digital process",
        },
        {
          title: "Bilingual Service",
          description:
            "Full support in English and Spanish for your convenience",
        },
        {
          title: "Florida Experts",
          description:
            "Local team that understands Florida's unique insurance requirements",
        },
      ],
    },
    finalCta: {
      title: "Ready to Protect Your Florida Home?",
      subtitle:
        "Get your free homeowners insurance quote today. No obligations, just answers from Florida's trusted insurance experts.",
      getStarted: "Get Started Now",
      or: "or",
      call: "Call (786) 636-1009",
    },
    footer: translations.en.footer,
    quoteResult: {
      title: "Homeowners Insurance",
      backToHome: "Back to home",
      congratulations: "Congratulations!",
      quoteMessage: "You are one step away from getting your homeowners quote.",
      followUp:
        "A team member will reach out shortly with next steps and your full quote details.",
      call: "Call (786) 636-1009",
    },
  },
  es: {
    nav: {
      title: "Seguro de Hogar",
      getQuote: "Cotización Gratis",
      phone: "(786) 636-1009",
      backToHome: "Volver al inicio",
    },
    hero: {
      badge: "SEGURO DE HOGAR",
      titleLine1: "Proteja Su Hogar",
      titleLine2: "de ",
      titleLine2Orange: "la Fuerza de la Naturaleza",
      titleLine3: "",
      subtitle:
        "Obtenga cobertura integral que protege su hogar de huracanes, inundaciones y desastres inesperados. Aprobación rápida y tarifas competitivas para propietarios en Florida.",
      badges: ["Cobertura de Huracán", "Protección contra Inundación", "Daños por Viento", "Cobertura de Responsabilidad"],
    },
    homeownersCarriers: {
      kicker: "Respaldado por propietarios en Florida",
      title: "Aseguradoras destacadas con las que trabajamos",
    },
    quoteForm: {
      heading: "Obtenga Su Cotización Gratis",
      subtitle: "Complete el formulario y le enviaremos una cotización en minutos.",
      companyName: "Dirección de la Propiedad",
      companyPlaceholder: "123 Main St, Miami, FL",
      yourName: "Nombre Completo",
      namePlaceholder: "Nombre completo",
      phone: "Teléfono",
      phonePlaceholder: "(786) 000-0000",
      email: "Correo electrónico",
      emailPlaceholder: "correo@email.com",
      typeOfBusiness: "Tipo de Propiedad",
      numberOfEmployees: "Monto de Cobertura",
      select: "Seleccione...",
      additionalInfo: "Información Adicional",
      optional: "(Opcional)",
      additionalPlaceholder: "Cuéntenos sobre su hogar o necesidades de cobertura...",
      privacyPrefix: "He leído y acepto la",
      privacyLink: "política de privacidad",
      getMyQuote: "Obtener Cotización",
      sending: "Enviando…",
      submitError: "Algo salió mal. Por favor intente de nuevo.",
      businessTypes: [
        "Casa Unifamiliar",
        "Condominio",
        "Townhome",
        "Dúplex",
        "Propiedad de Alquiler",
        "Otro",
      ],
      employeeCounts: ["$150k-$300k", "$300k-$500k", "$500k-$750k", "$750k-$1M", "$1M+"],
      statsBar: [
        { value: "15 min", label: "Tiempo de Aprobación" },
        { value: "10%", label: "Ahorro al Agrupar" },
        { value: "24/7", label: "Acceso en Línea" },
        { value: "A+", label: "Aseguradoras Calificadas" },
      ],
      emailInvalid: "Por favor ingrese un correo electrónico válido.",
      phoneInvalid: "Por favor ingrese un número de teléfono válido (al menos 10 dígitos).",
    },
    whyYouNeed: {
      title: "Por Qué Necesita Seguro de Hogar",
      titleBefore: "Por Qué Necesita ",
      titleHighlight: "Seguro de Hogar",
      titleAfter: "",
      items: [
        {
          title: "Protección contra Huracanes",
          description:
            "Cobertura para daños por viento causados por tormentas tropicales y huracanes en Florida",
        },
        {
          title: "Cobertura contra Inundaciones",
          description:
            "Protección contra daños por agua de inundaciones, lluvias fuertes y marejadas",
        },
        {
          title: "Cobertura de Vivienda",
          description:
            "Paga para reparar o reconstruir su hogar si sufre daños por riesgos cubiertos",
        },
        {
          title: "Protección de Responsabilidad",
          description:
            "Cubre gastos legales si alguien se lesiona en su propiedad",
        },
      ],
    },
    whatCovers: {
      title: "¿Qué Cubre el Seguro de Hogar?",
      items: [
        "Daños por huracán y viento",
        "Daños por agua e inundación",
        "Daños por incendio y humo",
        "Robo y vandalismo",
        "Protección de bienes personales",
        "Gastos adicionales de vivienda",
        "Cobertura de responsabilidad personal",
        "Pagos médicos a terceros",
      ],
    },
    whyChooseUs: {
      aRated: "Calificación A+",
      carriers: "Aseguradoras",
      title: "¿Por Qué Elegir Boapr Insurance?",
      titleBefore: "¿Por Qué Elegir ",
      titleHighlight: "Boapr Insurance",
      titleAfter: "?",
      subtitle: "Hacemos sencillo obtener la cobertura que su hogar necesita.",
      benefits: [
        {
          title: "Independiente y Enfocado en el Cliente",
          description:
            "Trabajamos con múltiples aseguradoras A+ para encontrar su mejor cobertura al mejor precio",
        },
        {
          title: "Cotizaciones Rápidas y Proceso Fácil",
          description:
            "Aprobación en menos de 15 minutos con nuestro proceso digital simplificado",
        },
        {
          title: "Servicio Bilingüe",
          description:
            "Soporte completo en inglés y español para su conveniencia",
        },
        {
          title: "Expertos en Florida",
          description:
            "Equipo local que entiende los requisitos únicos de seguros en Florida",
        },
      ],
    },
    finalCta: {
      title: "¿Listo para Proteger Su Hogar en Florida?",
      subtitle:
        "Obtenga hoy su cotización gratuita de seguro de hogar. Sin obligaciones, solo respuestas de expertos de confianza en Florida.",
      getStarted: "Comenzar Ahora",
      or: "o",
      call: "llámenos al (786) 636-1009",
    },
    footer: translations.es.footer,
    quoteResult: {
      title: "Seguro de Hogar",
      backToHome: "Volver al inicio",
      congratulations: "Felicitaciones",
      quoteMessage: "Está a un paso de conseguir su cotización de hogar.",
      followUp:
        "Un miembro del equipo se comunicará pronto con los próximos pasos y detalles completos de su cotización.",
      call: "Llamar al (786) 636-1009",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const location = useLocation();
  const isHomeownersFlow = location.pathname.startsWith("/homeowners");
  const [locale, setLocaleState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (_) {}
  }, [locale]);

  const setLocale = (next) => {
    setLocaleState(next === "es" ? "es" : "en");
  };

  const t = (key) => {
    const keys = key.split(".");
    const dictionary = isHomeownersFlow ? homeownersTranslations : translations;
    let v = dictionary[locale];
    for (const k of keys) {
      v = v?.[k];
    }
    return v ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isHomeownersFlow }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
