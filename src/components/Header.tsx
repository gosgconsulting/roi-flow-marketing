
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

/**
 * WordPress Theme Component: Header
 * 
 * Component: Will be converted to header.php
 * Template Name: Header
 * 
 * Dynamic Elements:
 * - Navigation menu items (will be replaced with wp_nav_menu)
 * - Logo (will be replaced with get_custom_logo or theme option)
 * 
 * WordPress Implementation:
 * <?php
 * /**
 *  * The header for our theme
 *  *
 *  * This is the template that displays the header
 *  *
 *  * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *  *
 *  * @package GoSG
 *  *\/
 * ?>
 * 
 * <header class="w-full py-4 px-4 md:px-8 bg-white shadow-sm">
 *   <div class="container mx-auto">
 *     <div class="flex items-center justify-between">
 *       <!-- Logo -->
 *       <?php the_custom_logo(); ?>
 *       
 *       <!-- Navigation Menu -->
 *       <nav class="hidden md:flex items-center space-x-8">
 *         <?php
 *           wp_nav_menu(array(
 *             'theme_location' => 'primary',
 *             'container' => false,
 *             'items_wrap' => '%3$s',
 *             'walker' => new GoSG_Menu_Walker()
 *           ));
 *         ?>
 *         <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>" class="button button-coral">Contact Us</a>
 *       </nav>
 *       
 *       <!-- Mobile Menu Toggle -->
 *       <div class="flex items-center md:hidden">
 *         <button id="mobile-menu-toggle" class="text-foreground focus:outline-none">
 *           <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
 *             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
 *           </svg>
 *         </button>
 *       </div>
 *     </div>
 *     
 *     <!-- Mobile Menu (Initially Hidden) -->
 *     <div id="mobile-menu" class="md:hidden mt-4 py-4 bg-card rounded-lg shadow-lg hidden">
 *       <nav class="flex flex-col space-y-4 px-4">
 *         <?php
 *           wp_nav_menu(array(
 *             'theme_location' => 'primary-mobile',
 *             'container' => false,
 *             'menu_class' => 'flex flex-col space-y-4',
 *             'walker' => new GoSG_Mobile_Menu_Walker()
 *           ));
 *         ?>
 *         <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>" class="button button-coral w-full text-center">Contact Us</a>
 *       </nav>
 *     </div>
 *   </div>
 * </header>
 */
const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* WordPress: Replace with get_custom_logo() */}
          <Link to="/" className="text-2xl font-bold">
            <span className="text-deepBlue">GO</span> <span className="text-coral">SG</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Contact Us Button - Always Visible */}
            <Button asChild variant="coral" size="sm" className="hidden sm:flex">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
            
            {/* Burger Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="flex items-center justify-center"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-screen sm:w-56 bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/" className="w-full cursor-pointer">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/website-design" className="w-full cursor-pointer">
                    Website Design
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/seo" className="w-full cursor-pointer">
                    SEO
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/paid-ads" className="w-full cursor-pointer">
                    Paid Ads
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/dashboard" className="w-full cursor-pointer">
                    Social Media
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/reporting" className="w-full cursor-pointer">
                    Reporting
                  </Link>
                </DropdownMenuItem>
                {/* Only show Contact Us in dropdown for mobile */}
                <DropdownMenuItem asChild className="bg-coral text-white hover:bg-coral/90 mt-2 sm:hidden">
                  <Link to="/contact" className="w-full cursor-pointer">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
