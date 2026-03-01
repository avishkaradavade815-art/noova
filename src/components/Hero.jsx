import React from 'react';
import { Button } from '@/components/ui/button';
import { useState } from "react";

const HERO_IMAGE = 'https://images.unsplash.com/photo-1635961365604-c001fd0ea2b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxzY2FmZm9sZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3Njk3ODQxMzN8MA&ixlib=rb-4.1.0&q=85';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '100%', label: 'Safety Record' },
  { number: '50+', label: 'Expert Team' },
];

export const Hero = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name || !phone) {
      alert("Please fill all fields");
      return;
    }

    const subject = "New Callback Request - NOOVA Scaffolding";
    const body = `Name: ${name}\nPhone: ${phone}`;

    window.location.href =
      `mailto:your@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Construction Scaffolding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pattern-grid opacity-30"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8 animate-slide-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">India's Reliable Scaffolding Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-heading">
              Safe | Strong | <span className="text-accent">Smart</span>
              <br />
              Scaffolding Solutions
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              NOOVA Scaffolding Pvt Ltd provides professional scaffolding and shuttering 
              solutions for construction, infrastructure, and industrial projects across India. 
              We focus on safety, quality, and timely service delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                <i className="fas fa-phone-alt mr-2"></i>
                Get Free Quote
              </Button>
              <Button variant="whiteOutline" size="xl">
                <i className="fas fa-file-alt mr-2"></i>
                Download Brochure
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt text-accent text-xl"></i>
                <span className="text-sm text-white/80">BIS Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-check-circle text-accent text-xl"></i>
                <span className="text-sm text-white/80">Safety Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-award text-accent text-xl"></i>
                <span className="text-sm text-white/80">Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick Enquiry Form */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <h3 className="text-white font-semibold mb-4">Quick Enquiry</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
                  />
                  <Button variant="hero" className="w-full" onClick={handleSubmit}>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Request Callback
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};
