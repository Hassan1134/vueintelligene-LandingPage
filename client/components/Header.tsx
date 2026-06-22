import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/projects" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/60 shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://vuetelligence.com/assets/dark-logo-8de9accc.png"
            className="w-32 h-auto"
            alt="Logo"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:opacity-70 ${
                location.pathname === link.href
                  ? "text-black font-semibold"
                  : "text-black"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="bg-[#171717] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-black transition">
            Get Started
          </button>
          <button className="border border-black text-black px-7 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#edf8dc] px-6 py-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-black">
                {link.label}
              </a>
            ))}
            <button className="bg-black text-white rounded-full py-3">
              Get Started
            </button>
            <button className="border border-black rounded-full py-3">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
