
import React from 'react';
import { Button } from '@/components/ui/button';
import { CONTACT } from "config.js";

const services = [
  {
    icon: 'fa-warehouse',
    title: 'Scaffolding on Rent',
    description: 'Complete scaffolding rental solutions for projects of any scale with flexible terms.',
    features: ['Flexible rental periods', 'Quick delivery', 'Competitive pricing'],
  },
  {
    icon: 'fa-cubes',
    title: 'Cuplock System',
    description: 'Heavy-duty modular scaffolding system designed for fast and secure installation.',
    features: ['Fast installation', 'High load capacity', 'Versatile application'],
  },
  {
    icon: 'fa-layer-group',
    title: 'Shuttering on Hire',
    description: 'High-quality shuttering and formwork systems for concrete construction.',
    features: ['Quality tested', 'Multiple sizes', 'Expert support'],
  },
  {
    icon: 'fa-tools',
    title: 'Pipe & Clamp System',
    description: 'Flexible access system ideal for complex sites and irregular structures.',
    features: ['Adaptable design', 'Easy modifications', 'Secure connections'],
  },
  {
    icon: 'fa-ring',
    title: 'Ring Lock System',
    description: 'Modern and strong scaffolding system for industrial and heavy-duty applications.',
    features: ['Quick assembly', 'Enhanced safety', 'Industrial strength'],
  },
  {
    icon: 'fa-people-carry',
    title: 'Dismantling Support',
    description: 'Skilled team for safe removal, shifting, and transportation of scaffolding.',
    features: ['Safe removal', 'Trained personnel', 'Efficient process'],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-grid opacity-10"></div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-heading">
            Comprehensive Scaffolding <br />
            <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base lg:text-lg">
            From rental to installation, dismantling to site support - we provide end-to-end 
            scaffolding services tailored to your project needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <i className={`fas ${service.icon} text-2xl text-accent group-hover:text-white`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                    <i className="fas fa-check text-accent text-xs"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-accent font-medium text-sm group-hover:text-white transition-colors"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Site Technical Support Banner */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <i className="fas fa-hard-hat text-xl text-white"></i>
                </div>
                <span className="text-accent font-semibold">Technical Support</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-heading">
                Expert Site Technical Support
              </h3>
              <p className="text-white/80 mb-6">
                Our experienced technical team provides expert supervision for site planning, 
                ensuring optimal scaffolding setup and compliance with safety standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-check-circle text-accent"></i>
                  <span className="text-sm">On-site supervision</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-check-circle text-accent"></i>
                  <span className="text-sm">Safety audits</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <i className="fas fa-check-circle text-accent"></i>
                  <span className="text-sm">Expert consultation</span>
                </div>
              </div>
            </div>
<div className="flex justify-center lg:justify-end">
  <Button asChild variant="hero" size="xl">
    <a href={`tel:${CONTACT.phone}`}>
      <i className="fas fa-phone-alt mr-2"></i>
      Request Site Visit
    </a>
  </Button>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};
