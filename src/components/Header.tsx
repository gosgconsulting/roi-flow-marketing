
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-deepBlue">GO</span> <span className="text-coral">SG</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-coral transition-colors">
              Home
            </Link>
            <Link to="/services/website-design" className="text-foreground hover:text-coral transition-colors">
              Website Design
            </Link>
            <Link to="/services/seo" className="text-foreground hover:text-coral transition-colors">
              SEO
            </Link>
            <Link to="/services/paid-ads" className="text-foreground hover:text-coral transition-colors">
              Paid Ads
            </Link>
            <Link to="/services/dashboard" className="text-foreground hover:text-coral transition-colors">
              Social Media
            </Link>
            <Link to="/services/reporting" className="text-foreground hover:text-coral transition-colors">
              Reporting
            </Link>
            <Button asChild className="bg-coral hover:bg-coral/90 text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-foreground focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card rounded-lg shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-coral transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services/website-design" 
                className="text-foreground hover:text-coral transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Website Design
              </Link>
              <Link 
                to="/services/seo" 
                className="text-foreground hover:text-coral transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                SEO
              </Link>
              <Link 
                to="/services/paid-ads" 
                className="text-foreground hover:text-coral transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Paid Ads
              </Link>
              <Link 
                to="/services/dashboard" 
                className="text-foreground hover:text-coral transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Social Media
              </Link>
              <Link 
                to="/services/reporting" 
                className="text-foreground hover:text-coral transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reporting
              </Link>
              <Button asChild className="w-full bg-coral hover:bg-coral/90 text-white mt-2">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
