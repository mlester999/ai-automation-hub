import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Tools", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <motion.div
          style={{ opacity: navOpacity }}
          className="absolute inset-0 glass"
        />
        
        <div className="container px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Logo - Left */}
            <a href="#" className="flex items-center gap-2 text-xl font-bold font-display md:flex-none flex-1">
              <img src={logoIcon} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="hidden md:inline">Automate with Marky</span>
            </a>

            {/* Mobile/Tablet Center Brand */}
            <span className="md:hidden text-sm font-bold font-display text-center flex-1">
              Automate with Marky
            </span>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-4 md:flex-none flex-1 justify-end">
              <Button variant="default" size="sm" asChild className="hidden md:inline-flex">
                <a href="#contact">Let's Talk</a>
              </Button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <nav className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-semibold hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="lg" asChild onClick={() => setIsOpen(false)}>
            <a href="#contact">Let's Talk</a>
          </Button>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
