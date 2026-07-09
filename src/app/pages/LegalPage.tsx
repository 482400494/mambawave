import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function LegalPage({
  title,
  date,
  p1,
  p2,
  backText,
}: {
  title: string;
  date: string;
  p1: string;
  p2: string;
  backText: string;
}) {
  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-screen-md mx-auto min-h-[80vh]">
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-foreground/50 hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {backText}
        </Link>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          {date}
        </p>
        <h1
          className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-black tracking-tight mb-10"
          style={{ fontFamily: "'UM Cloft', serif", color: "#328aa0" }}
        >
          {title}
        </h1>
      </div>

      <div className="space-y-6 text-foreground/80 leading-relaxed">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
