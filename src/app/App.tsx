import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, ArrowRight, Globe, Phone, Send, MessageCircle, Star, Quote } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logotipo from "@/imports/logo-nuevo.png";
import isotipo from "@/imports/isotipo.png";
import whatsappIcon from "@/imports/whatsapp.png";
import { translations } from "@/locales/translations";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router";
import { LegalPage } from "./pages/LegalPage";
import { ContactPage } from "./pages/ContactPage";

const projects = [
  {
    id: 1,
    title: "Boutique Lookbook",
    category: "Moda y accesorios",
    year: "2025",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
    alt: "Catálogo de moda con fichas de producto",
  },
  {
    id: 2,
    title: "Menú & Pedidos",
    category: "Alimentos y bebidas",
    year: "2025",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
    alt: "Catálogo para restaurantes y reposterías",
  },
  {
    id: 3,
    title: "Beauty Shelf",
    category: "Belleza y cuidado personal",
    year: "2025",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop&auto=format",
    alt: "Catálogo de cosmética",
  },
  {
    id: 4,
    title: "Agencia Pro",
    category: "Servicios",
    year: "2024",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop&auto=format",
    alt: "Catálogo de servicios profesionales",
  },
];

function Home({ lang }: { lang: 'en' | 'es' }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const t = translations[lang];

  const filters = ["All", "Moda y accesorios", "Alimentos y bebidas", "Belleza y cuidado personal", "Servicios"];
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  const stats = [
    { value: "500+", label: t.stats.t1 },
    { value: "2 días", label: t.stats.t2 },
    { value: "EE.UU. / MX", label: t.stats.t3 },
    { value: "98%", label: t.stats.t4 },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-32 pt-32 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="absolute top-[30%] right-6 md:right-12 w-px bg-border h-48 opacity-40" />


        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: "var(--accent)" }}
        >
          {t.hero.subtitle}
        </p>

        <h1
          className="text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.1] font-black tracking-tight mb-10 max-w-5xl"
          style={{ fontFamily: "'UM Cloft', serif", color: "#328aa0" }}
        >
          {t.hero.titleLine1}
          <br />
          <span className="text-foreground/60">{t.hero.titleLine2}</span>
          <br />
          {t.hero.titleLine3}
        </h1>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:pr-24">
          <p className="text-base text-foreground/60 max-w-sm leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#templates"
              className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest"
            >
              <span
                className="w-10 h-px transition-all duration-300 group-hover:w-20"
                style={{ background: "var(--accent)" }}
              />
              {t.hero.explore}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-12 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-foreground/30" style={{ writingMode: "vertical-rl" }}>
            {t.hero.scroll}
          </span>
          <div className="w-px h-12 bg-foreground/20" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-y border-border" style={{ background: "#001a27" }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span
                className="text-4xl font-black leading-none"
                style={{ color: "var(--accent)" }}
              >
                {s.value}
              </span>
              <span className="text-xs tracking-widest uppercase text-white/50">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section id="templates" className="py-28 px-6 md:px-12 relative z-10 bg-[#238AA0] text-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p
              className="text-lg font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: "#002739" }}
            >
              {t.projects.featured}
            </p>
            <h2
              className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight"
            >
              {t.projects.title1}
              <br />
              {t.projects.title2}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 text-xs tracking-widest uppercase border transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-white text-[#238AA0] border-white"
                    : "border-white/30 text-white/70 hover:border-white hover:text-white"
                }`}
              >
                {t.projects.filters[f as keyof typeof t.projects.filters] || f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-muted cursor-pointer aspect-[4/3] rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center text-white/40 text-sm tracking-widest uppercase">
            {t.projects.empty}
          </div>
        )}
        <SectionCTA section="Catálogos" text={t.contact.moreInfo} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-border/10 py-28 px-6 md:px-12 relative z-10 bg-[#001a27] text-white">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight text-center mb-16">
            {t.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.services.items.map((s: any, i: number) => (
              <div 
                key={s.label} 
                className="group flex flex-col p-8 rounded-2xl transition-all duration-300 cursor-pointer bg-[#0a293c] border border-border/40 hover:bg-[#328aa0] hover:text-white"
              >
                <div className="w-12 h-12 bg-white text-[#0a293c] flex items-center justify-center font-black text-xl rounded-sm mb-8 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed flex-1">{s.desc}</p>
                {i === 0 && (
                  <div className="mt-8 text-sm font-medium opacity-60 group-hover:opacity-100 flex items-center gap-2">
                    Paso 1 <ArrowRight size={14} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <SectionCTA section="Cómo funciona" text={t.contact.moreInfo} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-[#238AA0] text-white relative z-10 border-t border-border/10">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2">
          {/* Left Column */}
          <div className="p-12 md:p-24 flex flex-col justify-center relative bg-[#238AA0] md:bg-transparent">
            <p className="text-xs font-black uppercase tracking-widest text-white/70 mb-6">
              {t.testimonials.subtitle}
            </p>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-black text-white mb-10 leading-[1.1] tracking-tight">
              {t.testimonials.title}
            </h2>
            
            {/* Stars */}
            <div className="flex gap-1.5 text-[#f59e0b] mb-10">
              <Star size={20} fill="currentColor" color="currentColor" />
              <Star size={20} fill="currentColor" color="currentColor" />
              <Star size={20} fill="currentColor" color="currentColor" />
              <Star size={20} fill="currentColor" color="currentColor" />
              <Star size={20} fill="currentColor" color="currentColor" />
            </div>

            <p className="text-lg md:text-xl text-white/90 leading-[1.8] mb-16 font-medium max-w-xl">
              "{t.testimonials.quote}"
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-5">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format" alt="Client" className="w-14 h-14 rounded-full object-cover shadow-md" />
                <span className="font-bold text-lg text-white">{t.testimonials.author}</span>
              </div>
              <div className="w-16 h-16 bg-[#001a27] rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
                 <Quote size={28} color="#4FB8C7" fill="#4FB8C7" className="rotate-180" />
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="hidden md:block relative h-full min-h-[700px]">
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1000&h=1400&fit=crop&auto=format" alt="Business results" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border/10 py-28 px-6 md:px-12 bg-[#001a27] text-white">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-sm tracking-[0.25em] uppercase mb-4 font-bold"
              style={{ color: "var(--accent)" }}
            >
              {t.about.subtitle}
            </p>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-tight mb-8">
              {t.about.title1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#f0b48a]">
                {t.about.titleHighlight}
              </span>
              <br />
              {t.about.title2}
              {t.about.title3}
            </h2>
            <p className="text-white/80 leading-relaxed max-w-md mb-8">
              {t.about.p1} <em>{t.about.p1bold}</em>
            </p>
            <p className="text-white/80 leading-relaxed max-w-md mb-10">
              {t.about.p2}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest group text-white"
            >
              <span>{t.about.meet}</span>
              <span
                className="w-8 h-px transition-all duration-300 group-hover:w-16"
                style={{ background: "var(--accent)" }}
              />
            </a>
            <SectionCTA section="Nosotros" text={t.contact.moreInfo} align="start" />
          </div>

          <div className="relative aspect-square bg-foreground/20 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=700&fit=crop&auto=format"
              alt="Team of designers and developers collaborating in a modern office"
              className="w-full h-full object-cover opacity-70"
            />
            <div
              className="absolute top-6 left-6 text-xs tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              {t.about.teamImg}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AnimatedRoutes({ lang, t }: { lang: 'es'|'en', t: any }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home lang={lang} />} />
        <Route 
          path="/privacy" 
          element={
            <LegalPage 
              title={t.legal.privacyTitle} 
              date={t.legal.privacyDate} 
              p1={t.legal.privacyP1} 
              p2={t.legal.privacyP2} 
              backText={t.legal.back}
            />
          } 
        />
        <Route 
          path="/terms" 
          element={
            <LegalPage 
              title={t.legal.termsTitle} 
              date={t.legal.termsDate} 
              p1={t.legal.termsP1} 
              p2={t.legal.termsP2} 
              backText={t.legal.back}
            />
          } 
        />
        <Route 
          path="/contact" 
          element={
            <ContactPage t={t} />
          } 
        />
        <Route 
          path="/thank-you" 
          element={
            <ThankYouPage t={t} />
          } 
        />
      </Routes>
    </div>
  );
}

function ThankYouPage({ t }: { t: any }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#001a27] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(240,149,75,0.4)]">
          <Send size={32} color="#0C2436" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          {t.thankYou.title}
        </h1>
        <p className="text-white/70 text-lg mb-12">
          {t.thankYou.desc}
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#001a27] text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors rounded-[3px]"
        >
          {t.thankYou.back}
        </Link>
      </div>
    </div>
  );
}

function SectionCTA({ section, text, align = "center" }: { section: string, text: string, align?: "start" | "center" }) {
  const waUrl = `https://wa.me/525516382556?text=${encodeURIComponent(`Hola, me gustaría obtener más información sobre la sección de ${section}.`)}`;
  return (
    <div className={`mt-14 flex w-full col-span-full ${align === 'start' ? 'justify-start' : 'justify-center'}`}>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F0954B] text-[#0C2436] text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#f6a666] transition-all duration-300 rounded-[3px] shadow-xl hover:-translate-y-1"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 brightness-0" />
        {text}
      </a>
    </div>
  );
}

function GlobalContactForm({ t }: { t: any }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="border-t border-border/10 relative z-10 bg-[#238AA0] text-white">
      <div className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-lg font-bold tracking-[0.25em] uppercase mb-4" style={{ color: '#002739' }}>
            — {t.contact.subtitle}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight mb-6">
            {t.contact.title1} {t.contact.title2} {t.contact.title3}
          </h2>
          <p className="text-white/90 text-base mb-8 max-w-md">
            {t.contact.formTitle}
          </p>
          <div className="text-xl font-bold" style={{ color: '#002739' }}>
            ✓ {t.contact.call}
          </div>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem('name') as HTMLInputElement).value;
            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
            const message = (form.elements.namedItem('message') as HTMLInputElement).value;
            
            try {
              const params = new URLSearchParams();
              params.append('name', name);
              params.append('email', email);
              params.append('message', message);

              const res = await fetch('/contact.php', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: params.toString()
              });
              
              if (res.ok) {
                navigate('/thank-you');
                form.reset();
              } else {
                let errorMsg = `Status ${res.status}`;
                try {
                  const data = await res.json();
                  if (data.error) errorMsg = data.error;
                  if (data.details && data.details.message) errorMsg += ` (${data.details.message})`;
                } catch(e) {}
                alert(`Hubo un error al enviar el mensaje. Detalle: ${errorMsg}. Por favor intenta de nuevo.`);
              }
            } catch (err) {
              alert('Hubo un error de red. Por favor revisa tu conexión e intenta de nuevo.');
            } finally {
              setIsSubmitting(false);
            }
          }}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-white/80 font-bold mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              required
              placeholder={t.contact.formName}
              className="w-full px-5 py-4 bg-[#0a293c] border border-border/40 text-white text-base tracking-wide placeholder:text-white/40 focus:border-accent focus:outline-none transition-colors rounded-[3px]"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-white/80 font-bold mb-1">Email o WhatsApp</label>
            <input
              type="text"
              name="email"
              required
              placeholder={t.contact.formEmail}
              className="w-full px-5 py-4 bg-[#0a293c] border border-border/40 text-white text-base tracking-wide placeholder:text-white/40 focus:border-accent focus:outline-none transition-colors rounded-[3px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-white/80 font-bold mb-1">Tipo de negocio</label>
            <input
              type="text"
              name="message"
              required
              placeholder="Ej. Boutique de ropa, repostería, spa..."
              className="w-full px-5 py-4 bg-[#0a293c] border border-border/40 text-white text-base tracking-wide placeholder:text-white/40 focus:border-accent focus:outline-none transition-colors rounded-[3px]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#F0954B] text-[#0C2436] text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#f6a666] transition-colors duration-200 rounded-[3px] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (t.contact.formSend || 'Enviando...') : (
              <>Quiero mi catálogo &rarr;</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'es'|'en'>('en');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = translations[lang];

  const navItems = [
    { key: "Templates", label: t.nav.templates },
    { key: "Services", label: t.nav.services },
    { key: "About", label: t.nav.about },
    { key: "Contact", label: t.nav.contact },
  ];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className="min-h-screen bg-background text-foreground overflow-x-hidden relative"
        style={{ fontFamily: "'Tw Cen MT', 'Century Gothic', sans-serif" }}
      >
        {/* BACKGROUND ISOTYPE WATERMARK */}
        <div className="absolute top-0 left-0 w-full h-[120vh] z-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <img 
            src={isotipo} 
            alt="" 
            className="w-[150vw] md:w-[80vw] max-w-[1200px] opacity-10 invert grayscale mix-blend-screen"
          />
        </div>
        {/* NAV */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[#003347]/95 backdrop-blur-md border-b border-primary/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
          }`}
          style={{ fontFamily: "'Big John PRO', sans-serif" }}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
            <Link to="/" className="flex items-center">
              <ImageWithFallback
                src={logotipo}
                alt="Boom Mamba Wave logo"
                className="w-auto object-contain"
                style={{ height: "113.385827px" }}
              />
            </Link>

            <ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide uppercase">
              {navItems.map((item) => (
                <li key={item.key}>
                  {item.key === 'Contact' ? (
                    <Link
                      to="/contact"
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={`/#${item.key.toLowerCase()}`}
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase hover:text-accent transition-colors"
              >
                <Globe size={16} />
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <a
                href="/#templates"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2 bg-foreground text-background hover:bg-accent hover:text-white transition-colors"
              >
                {t.nav.browse} <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="text-xs font-medium tracking-widest uppercase hover:text-accent transition-colors"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <button
                className="text-foreground"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden bg-background border-t border-border px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) =>
                item.key === 'Contact' ? (
                  <Link
                    key={item.key}
                    to="/contact"
                    className="text-2xl font-light"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.key}
                    href={`/#${item.key.toLowerCase()}`}
                    className="text-2xl font-light"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          )}
        </nav>

        <AnimatedRoutes lang={lang} t={t} />

        {/* GLOBAL CONTACT FORM */}
        <GlobalContactForm t={t} />

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/525516382556?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group flex items-center justify-end"
          aria-label="WhatsApp"
        >
          <div className="overflow-hidden transition-all duration-500 ease-in-out max-w-0 group-hover:max-w-[160px] opacity-0 group-hover:opacity-100 bg-[#022135] rounded-l-full -mr-8 pr-8 py-3 shadow-lg">
            <p className="text-white text-[15px] font-bold leading-[1.1] whitespace-nowrap pl-6 pr-2">
              Cotiza por<br />WhatsApp
            </p>
          </div>
          <div className="w-[100px] h-[100px] relative z-10 flex items-center justify-center flex-shrink-0 group-hover:-rotate-[360deg] transition-transform duration-700 ease-out drop-shadow-2xl">
            <img src={whatsappIcon} alt="WhatsApp" className="w-[90%] h-[90%] object-contain" />
          </div>
        </a>

        {/* FOOTER */}
        <footer className="border-t border-border px-6 md:px-12 py-10">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link to="/">
              <ImageWithFallback
                src={logotipo}
                alt="Boom Mamba Wave logo"
                className="h-8 w-auto object-contain"
                style={{ height: "113.385827px" }}
              />
            </Link>

            <div className="flex flex-wrap gap-8 text-xs text-foreground/40 tracking-widest uppercase">
              {Object.keys(t.footer.links).map((key) => {
                const isRouterLink = key === "Privacy" || key === "Terms" || key === "Contact";
                return isRouterLink ? (
                  <Link key={key} to={`/${key.toLowerCase()}`} className="hover:text-foreground transition-colors">
                    {t.footer.links[key as keyof typeof t.footer.links]}
                  </Link>
                ) : (
                  <a key={key} href={`/#${key.toLowerCase()}`} className="hover:text-foreground transition-colors">
                    {t.footer.links[key as keyof typeof t.footer.links]}
                  </a>
                );
              })}
            </div>

            <p className="text-xs text-foreground/30">
              {t.footer.rights}
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
