import React from 'react';
import { Button } from '@/components/ui/button';
import { CONTACT } from "config.js";

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Project Manager, Shri Xyronix Infra Pvt Ltd',
    content: 'NOOVA Scaffolding provided excellent service for our high-rise project. Their equipment quality and safety standards are top-notch. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Site Engineer, Navqentrix Engineering Pvt Ltd',
    content: 'We have been working with NOOVA for over 2 years. Their timely delivery and professional support make them our preferred scaffolding partner.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Director, Aarvexium Infrastructure Pvt Ltd',
    content: 'The cuplock system from NOOVA significantly improved our installation time. Their technical team provided great on-site support throughout the project.',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30"></div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-heading">
            What Our <span className="text-accent">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We strive to build lasting client relationships through trust, professionalism, 
            and consistent performance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-subtle rounded-2xl p-6 lg:p-8 border border-border/50 hover-lift"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <i className="fas fa-quote-left text-accent text-xl"></i>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-warning text-sm"></i>
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
const handleCall = () => {
  window.location.href = `tel:${CONTACT.phone}`;
};

const handleEmail = () => {
  const subject = "Enquiry - NOOVA Scaffolding";
  const body = "Hello NOOVA Team,\n\nI am reaching out regarding your scaffolding solutions. [Please continue here with your name and contact details…]";

  window.location.href =
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
  return (
    <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">Start Your Project Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 font-heading leading-tight">
            Ready to Build with <br />
            <span className="text-accent">Safe & Strong</span> Scaffolding?
          </h2>

          {/* Description */}
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Get a customized scaffolding solution for your project. Our team is ready 
            to assist you with expert consultation and competitive pricing.
          </p>

          {/* CTA Buttons */}
<div className="flex flex-wrap justify-center gap-4">
  <Button
    variant="hero"
    size="xl"
    onClick={handleCall}
  >
    <i className="fas fa-phone-alt mr-2"></i>
    Call Now
  </Button>

  <Button
    variant="whiteOutline"
    size="xl"
    onClick={handleEmail}
  >
    <i className="fas fa-envelope mr-2"></i>
    Send Enquiry
  </Button>
</div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-white/80">
              <i className="fas fa-check-circle text-accent"></i>
              <span className="text-sm">Free Site Survey</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <i className="fas fa-check-circle text-accent"></i>
              <span className="text-sm">Quick Response</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <i className="fas fa-check-circle text-accent"></i>
              <span className="text-sm">Competitive Rates</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <i className="fas fa-check-circle text-accent"></i>
              <span className="text-sm">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Careers = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-12 bg-white rounded-2xl shadow-card border border-border/50">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
              <i className="fas fa-briefcase text-2xl text-accent"></i>
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground font-heading">
                Join Our Team
              </h3>
              <p className="text-muted-foreground">
                We welcome skilled professionals to grow with us.
              </p>
            </div>
          </div>
          <Button variant="premium" size="lg" 
            onClick={() => {
              const subject = "Job Enquiry - NOOVA Scaffolding";
              const body = "Hello NOOVA Team,\n\nI am interested in joining your team. [Please continue here with your details…]";
              window.location.href = `mailto:info@noovascaffolding.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}
          >
            <i className="fas fa-arrow-right mr-2"></i>
            View Openings
          </Button>
        </div>
      </div>
    </section>
  );
};
