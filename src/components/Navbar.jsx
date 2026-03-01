import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_ceb9f790-9b88-4115-8ac3-f5dbc96e5fee/artifacts/ze44u8mi_IMG_5393.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="NOOVA Scaffolding"
              className="h-12 lg:h-14 object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button variant={isScrolled ? 'premium' : 'white'} size="lg">
              <i className="fas fa-phone-alt mr-2"></i>
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i
              className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col gap-3 bg-white rounded-xl p-4 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground text-sm font-medium py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="premium" size="lg" className="mt-2">
                <i className="fas fa-phone-alt mr-2"></i>
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
