import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * WordPress Theme Component: Header
 * 
 * Static Component: Will be converted to header.php
 * Dynamic Elements:
 * - Navigation menu items (will be replaced with wp_nav_menu)
 * - Logo (will be replaced with get_custom_logo or theme option)
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* WordPress: Replace with get_custom_logo() */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-deepBlue">GO</span> <span className="text-coral">SG</span>
          </Link>

          {/* WordPress: Replace with wp_nav_menu() */}
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
            <Button asChild variant="coral">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* WordPress: Mobile menu toggle - keep this structure */}
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

        {/* WordPress: Mobile menu - adapt to use wp_nav_menu with custom walker */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card rounded-lg shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              {/* Replace with WordPress mobile menu */}
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
              <Button asChild variant="coral" className="w-full">
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
