
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/hooks/use-toast";
import type { User as SupabaseUser } from '@supabase/supabase-js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Signed out successfully",
      });
      navigate('/');
    }
  };

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

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {user.email}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="outline" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>

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
              
              {/* Mobile Auth */}
              <div className="pt-4 border-t border-gray-200">
                {user ? (
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">
                      {user.email}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleSignOut}
                      className="flex items-center gap-2 w-full justify-start"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="flex items-center gap-2 w-full justify-start">
                      <User className="h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
