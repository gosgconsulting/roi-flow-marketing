
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-brandPurple">
            GSG Consulting
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/services/website-design" className="text-gray-700 hover:text-brandPurple transition-colors">
              Website Design
            </Link>
            <Link to="/services/seo" className="text-gray-700 hover:text-brandPurple transition-colors">
              SEO
            </Link>
            <Link to="/services/paid-ads" className="text-gray-700 hover:text-brandPurple transition-colors">
              Paid Ads
            </Link>
            <Link to="/services/social-media" className="text-gray-700 hover:text-brandPurple transition-colors">
              Social Media
            </Link>
            <Link to="/services/reporting" className="text-gray-700 hover:text-brandPurple transition-colors">
              Reporting
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-brandPurple transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-brandPurple transition-colors">
              Blog
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link 
                to="/services/website-design" 
                className="text-gray-700 hover:text-brandPurple transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Website Design
              </Link>
              <Link 
                to="/services/seo" 
                className="text-gray-700 hover:text-brandPurple transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                SEO
              </Link>
              <Link 
                to="/services/paid-ads" 
                className="text-gray-700 hover:text-brandPurple transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Paid Ads
              </Link>
              <Link 
                to="/services/social-media" 
                className="text-gray-700 hover:text-brandPurple transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Social Media
              </Link>
              <Link 
                to="/services/reporting" 
                className="text-gray-700 hover:text-brandPurple transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Reporting
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-brandPurple transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-brandPurple transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
