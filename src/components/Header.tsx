import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navigation = [
  { name: "Product", href: "#", children: [
    { name: "ClientFlow", href: "/product/clientflow" },
    { name: "Site Passport", href: "/product/site-passport" },
    { name: "Presence", href: "/product/presence" },
    { name: "Commercial Engine", href: "/product/engine" },
    { name: "Teams Layer", href: "/product/teams" },
    { name: "Buildxact Connector", href: "/product/buildxact-connector" },
  ]},
  { name: "Pricing", href: "/pricing" },
  { name: "Pilot", href: "/pilot" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-border-light py-3" : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-base rounded-[4px] flex items-center justify-center text-white text-lg font-mono">S</div>
            <span className="text-xl font-black tracking-tighter text-text-primary uppercase">
              SiteForge
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <button className="text-sm font-semibold text-text-secondary hover:text-amber-base transition-colors flex items-center gap-1">
                  {item.name}
                  <svg className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="text-sm font-semibold text-text-secondary hover:text-amber-base transition-colors"
                >
                  {item.name}
                </Link>
              )}
              
              {item.children && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border-light rounded-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 translate-y-1 group-hover:translate-y-0">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-tinted"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-semibold text-text-secondary hover:text-text-primary"
          >
            Log in
          </Link>
          <Link
            to="/demo"
            className="btn-accent py-2.5 px-5 text-sm"
          >
            Book a Demo
          </Link>
        </div>
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border-light overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                    {item.name}
                  </div>
                  {item.children ? (
                    <div className="grid grid-cols-1 gap-3 pl-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="text-lg font-medium text-text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-lg font-medium text-text-primary block pl-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-border-light flex flex-col gap-4">
                <Link
                  to="/demo"
                  className="btn-primary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
