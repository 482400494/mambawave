import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logotipo from "@/imports/logo-nuevo.png";

const projects = [
  {
    id: 1,
    title: "Starter SaaS",
    category: "SaaS",
    year: "2025",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
    alt: "Modern SaaS dashboard template with analytics",
  },
  {
    id: 2,
    title: "Storefront Pro",
    category: "E-Commerce",
    year: "2025",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
    alt: "E-commerce template with product grid layout",
  },
  {
    id: 3,
    title: "Folio Minimal",
    category: "Portfolio",
    year: "2024",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop&auto=format",
    alt: "Clean portfolio template with gallery view",
  },
  {
    id: 4,
    title: "Analytics Hub",
    category: "Dashboard",
    year: "2024",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop&auto=format",
    alt: "Dashboard template with charts and data widgets",
  },
];

const services = [
  { label: "01", title: "Ready-Made Templates", desc: "Professionally designed, pixel-perfect templates ready to launch in minutes." },
  { label: "02", title: "Custom Design", desc: "Bespoke templates tailored to your brand, audience and business goals." },
  { label: "03", title: "Support & Updates", desc: "Lifetime updates and dedicated support to keep your site running smoothly." },
  { label: "04", title: "White Label", desc: "Rebrand and resell our templates under your own label with full rights." },
];

const stats = [
  { value: "500+", label: "Templates crafted" },
  { value: "12K+", label: "Happy customers" },
  { value: "98%", label: "Satisfaction rate" },
  { value: "24/7", label: "Support" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filters = ["All", "SaaS", "E-Commerce", "Portfolio", "Dashboard"];
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Tw Cen MT', 'Century Gothic', sans-serif" }}
    >
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background border-b border-border" : "bg-transparent"
        }`}
        style={{ fontFamily: "'Big John PRO', sans-serif" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
          <a href="#" className="flex items-center">
            <ImageWithFallback
              src={logotipo}
              alt="Boom Mamba Wave logo"
              className="w-auto object-contain"
              style={{ height: "113.385827px" }}
            />
          </a>

          <ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide uppercase">
            {["Templates", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2 bg-foreground text-background hover:bg-accent hover:text-white transition-colors"
          >
            Browse templates <ArrowUpRight size={14} />
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-8 flex flex-col gap-6">
            {["Templates", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-light"
                
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="absolute top-[30%] right-6 md:right-12 w-px bg-border h-48 opacity-40" />
        <div
          className="absolute top-[30%] right-[calc(50%-1px)] w-px opacity-10 h-32 hidden md:block"
          style={{ background: "var(--accent)" }}
        />

        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: "var(--accent)" }}
        >
          Boom Mamba Wave — Premium Web Templates
        </p>

        <h1
          className="text-[clamp(3rem,9vw,8rem)] leading-[0.95] font-black tracking-tight mb-10 max-w-5xl"
          style={{ fontFamily: "'UM Cloft', serif", color: "#328aa0" }}
        >
            Premium
            <br />
            <span className="text-foreground/20">templates,</span>
            <br />
            ready to launch.
        </h1>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="text-base text-foreground/60 max-w-sm leading-relaxed">
            Stunning, production-ready templates for startups, agencies and creators.
            Designed to convert, built to scale.
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
              Explore templates
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-12 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-foreground/30" style={{ writingMode: "vertical-rl" }}>
            Scroll
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
              <span className="text-xs tracking-widest uppercase text-foreground/50">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section id="templates" className="py-28 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Featured templates
            </p>
            <h2
              className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight"
              
            >
              Our best
              <br />
              sellers.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 text-xs tracking-widest uppercase border transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-foreground/50 hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-muted cursor-pointer ${
                i === 0 ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-foreground/60 mb-1">
                      {project.category} — {project.year}
                    </p>
                    <h3
                      className="text-2xl font-black text-foreground"
                      
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight size={18} color="white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 group-hover:opacity-0 transition-opacity duration-300">
                <p
                  className="text-xs tracking-widest uppercase text-foreground/50"
                  
                >
                  {project.category} — {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center text-foreground/30 text-sm tracking-widest uppercase">
            No products in this category.
          </div>
        )}
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-border py-28 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              What we offer
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight"
              
            >
              Services.
            </h2>
          </div>
          <div className="divide-y divide-border">
            {services.map((s) => (
              <div key={s.label} className="group flex items-start gap-8 py-8 cursor-pointer">
                <span
                  className="text-xs mt-1 flex-shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  {s.label}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-xl font-black group-hover:text-accent transition-colors"
                      
                    >
                      {s.title}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <p className="text-sm text-foreground/50 mt-2 leading-relaxed max-w-md">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border py-28 px-6 md:px-12" style={{ background: "#001a27" }}>
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Our story
            </p>
            <h2
              className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight mb-8"
              
            >
              Designed by
              <br />
              creators,
              <br />
              for creators.
            </h2>
            <p className="text-foreground/50 leading-relaxed max-w-md mb-8">
              Boom Mamba Wave was founded by designers and developers who were tired of templates that looked pretty in previews but
              fell apart in production. <em>We build for real-world use, not just demos.</em>
            </p>
            <p className="text-foreground/50 leading-relaxed max-w-md mb-10">
              Every template is hand-crafted with clean code, responsive design, and pixel-perfect attention to detail. No bloat, no compromise.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest group"
            >
              <span>Meet the team</span>
              <span
                className="w-8 h-px transition-all duration-300 group-hover:w-16"
                style={{ background: "var(--accent)" }}
              />
            </a>
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
              Our team, 2025
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-36 px-6 md:px-12 max-w-screen-xl mx-auto text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--accent)" }}
        >
          Get started
        </p>
        <h2
          className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.92] tracking-tight mb-12"
          
        >
          Ready to
          <br />
          <span className="text-foreground/20">launch</span>
          <br />
          your site?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@boommamba.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-widest uppercase hover:bg-accent hover:text-white transition-colors duration-200"
          >
            hello@boommamba.com <ArrowUpRight size={15} />
          </a>
          <a
            href="#templates"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border text-sm font-medium tracking-widest uppercase hover:border-foreground transition-colors duration-200"
          >
            Browse templates
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 md:px-12 py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <ImageWithFallback
            src={logotipo}
            alt="Boom Mamba Wave logo"
            className="h-8 w-auto object-contain"
          />

          <div className="flex flex-wrap gap-8 text-xs text-foreground/40 tracking-widest uppercase">
            {["Templates", "Services", "About", "Privacy", "Terms"].map((item) => (
              <a key={item} href="#" className="hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>

          <p className="text-xs text-foreground/30" >
            © 2025 Boom Mamba Wave — All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
