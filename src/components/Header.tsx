
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { X, Menu, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white/80 dark:bg-darkGray/80 backdrop-blur-lg shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 relative group"
          >
            <div className="relative z-10 font-bold text-2xl">
              <span className="text-neonPink">GO</span>
              <span className="text-foreground"> SG</span>
            </div>
            <motion.div 
              className="absolute -inset-2 bg-white/50 dark:bg-deepPurple/50 rounded-lg -z-10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
            <NavLink to="/services/website-design" isActive={isActive('/services/website-design')}>Website Design</NavLink>
            <NavLink to="/services/seo" isActive={isActive('/services/seo')}>SEO</NavLink>
            <NavLink to="/services/paid-ads" isActive={isActive('/services/paid-ads')}>Paid Ads</NavLink>
            <NavLink to="/services/dashboard" isActive={isActive('/services/dashboard')}>Social Media</NavLink>
            
            <ThemeToggle className="ml-2" />
            
            <Button asChild className="gradient-primary ml-3 px-5 py-2.5 rounded-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="text-foreground focus:outline-none p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 py-4 bg-white dark:bg-darkGray rounded-lg shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col space-y-1 px-4">
                <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} isActive={isActive('/')}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/services/website-design" onClick={() => setIsMenuOpen(false)} isActive={isActive('/services/website-design')}>
                  Website Design
                </MobileNavLink>
                <MobileNavLink to="/services/seo" onClick={() => setIsMenuOpen(false)} isActive={isActive('/services/seo')}>
                  SEO
                </MobileNavLink>
                <MobileNavLink to="/services/paid-ads" onClick={() => setIsMenuOpen(false)} isActive={isActive('/services/paid-ads')}>
                  Paid Ads
                </MobileNavLink>
                <MobileNavLink to="/services/dashboard" onClick={() => setIsMenuOpen(false)} isActive={isActive('/services/dashboard')}>
                  Social Media
                </MobileNavLink>
                <Button asChild className="w-full gradient-primary mt-2 py-2.5">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

type NavLinkProps = {
  children: React.ReactNode;
  to: string;
  isActive: boolean;
}

const NavLink = ({ children, to, isActive }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
      isActive 
        ? 'text-neonPink bg-neonPink/5' 
        : 'text-foreground hover:text-neonPink hover:bg-slate-50 dark:hover:bg-slate-800'
    }`}
  >
    {children}
    {isActive && (
      <motion.span 
        className="absolute bottom-0 left-3 right-3 h-0.5 bg-neonPink"
        layoutId="navbar-indicator"
      />
    )}
  </Link>
);

type MobileNavLinkProps = {
  children: React.ReactNode;
  to: string;
  onClick: () => void;
  isActive: boolean;
}

const MobileNavLink = ({ children, to, onClick, isActive }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
      isActive 
        ? 'text-neonPink bg-neonPink/5' 
        : 'text-foreground hover:text-neonPink hover:bg-slate-50 dark:hover:bg-slate-800'
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
