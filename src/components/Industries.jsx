import React from 'react';
import { Button } from '@/components/ui/button';

const industries = [
  {
    icon: 'fa-road',
    title: 'Infrastructure Projects',
    description: 'Bridges, flyovers, highways, and major infrastructure development projects.',
    image: 'https://images.unsplash.com/photo-1635961365604-c001fd0ea2b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxzY2FmZm9sZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3Njk3ODQxMzN8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    icon: 'fa-hospital',
    title: 'Hospitals & Commercial',
    description: 'Healthcare facilities, shopping malls, office complexes, and commercial buildings.',
    image: 'https://images.unsplash.com/photo-1619486219569-ecd80122d117?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxzY2FmZm9sZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3Njk3ODQxMzN8MA&ixlib=rb-4.1.0&q=85',
  },
  {
    icon: 'fa-building',
    title: 'Housing Projects',
    description: 'Residential complexes, apartment buildings, and housing development projects.',
    image: 'https://images.pexels.com/photos/154141/pexels-photo-154141.jpeg',
  },
  {
    icon: 'fa-industry',
    title: 'Industrial Plants',
    description: 'Manufacturing facilities, power plants, refineries, and industrial complexes.',
    image: 'https://images.unsplash.com/photo-1741916541913-7203d2be5e6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxtZXRhbCUyMHNjYWZmb2xkaW5nfGVufDB8fHx8MTc2OTc4NDEzOHww&ixlib=rb-4.1.0&q=85',
  },
  {
    icon: 'fa-train',
    title: 'Metro & Railway',
    description: 'Metro stations, railway infrastructure, and transportation projects.',
    image: 'https://images.pexels.com/photos/31745718/pexels-photo-31745718.jpeg',
  },
];

const whyChooseUs = [
  { icon: 'fa-shield-alt', title: 'Safety First', description: 'BIS certified equipment' },
  { icon: 'fa-tags', title: 'Affordable Rates', description: 'Competitive pricing' },
  { icon: 'fa-truck', title: 'Fast Delivery', description: 'Quick deployment' },
  { icon: 'fa-user-tie', title: 'Expert Team', description: 'Skilled professionals' },
];

export const Industries = () => {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-heading">
            Building Across <span className="text-accent">Sectors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            We provide scaffolding solutions for diverse industries, from infrastructure 
            to healthcare, ensuring safety and quality across all projects.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-card hover-lift"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 h-64 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <i className={`fas ${industry.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-white/80 text-sm">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                Why Choose Us
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 font-heading">
                The NOOVA <span className="text-accent">Advantage</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                We emphasize continuous improvement and adherence to regulations, reinforcing 
                our safety-first approach throughout project execution. Our skilled technicians 
                assemble each scaffold following industry best practices.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${item.icon} text-accent`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="bg-gradient-primary rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Our Quality Policy</h4>
              <p className="text-white/90 mb-8 leading-relaxed">
                We supply well-maintained, safety-checked material and follow strict quality 
                standards. Every component is inspected before deployment to maintain the 
                highest quality standards.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-white/80">Safety Record</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
              </div>

              <Button variant="white" className="w-full">
                <i className="fas fa-download mr-2"></i>
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
