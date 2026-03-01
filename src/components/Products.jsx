import React, { useState } from 'react';
import { CONTACT } from "config.js";
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Cuplock Ledger',
    description: 'Heavy-duty modular scaffolding system for fast and secure installation on any construction site.',
    image: '/asset/cuplock_ledger.png',
    features: ['Quick assembly', 'High load capacity', 'Durable finish'],
    category: 'scaffolding',
  },
  {
    id: 2,
    name: 'Adjustable Props',
    description: 'Versatile steel props with adjustable height for temporary support during construction.',
    image: '/asset/adjustable_props.png',
    features: ['Height adjustable', 'Heavy duty', 'Rust resistant'],
    category: 'props',
  },
  {
    id: 3,
    name: 'Base Jack',
    description: 'Essential foundation components for stable and level scaffolding setup.',
    image: '/asset/base_jack.png',
    features: ['Precision leveling', 'Strong base', 'Universal fit'],
    category: 'scaffolding',
  },
    {
    id: 4,
    name: 'U Head Jack',
    description: 'U-Head Jack is an adjustable top support used in scaffolding and formwork systems. It is placed on top of vertical standards or props to hold wooden beams, aluminum beams, or formwork members securely during slab or beam casting.',
    image: '/asset/u_head_jack.png',
    features: ['Adjustable Height Support', 'Strong U-head Grip', 'Heavy Load Capacity'],
    category: 'scaffolding',
  },
  {
    id: 5,
    name: 'WalkWay Board',
    description: 'Quality metal scaffolding planks providing safe and sturdy walking platforms.',
    image: '/asset/walkway_board.png',
    features: ['Anti-slip surface', 'High strength', 'Standard sizes'],
    category: 'platform',
  },
  {
    id: 6,
    name: 'Shuttering Plates',
    description: 'High-quality formwork systems for concrete casting and slab construction.',
    image: '/asset/shuttering_plates.png',
    features: ['Smooth finish', 'Reusable', 'Multiple sizes'],
    category: 'shuttering',
  },

  {
    id: 7,
    name: 'Acron Span',
    description: 'Acrow Span is a steel beam placed on props to support slab shuttering during concrete construction',
    image: '/asset/acron_span.png',
    features: ['Heavy Duty', 'High Load Capacity', 'Durable Steel Design'],
    category: 'shuttering',
  },
  {
    id: 8,
    name: 'Ledger',
    description: 'Ledger (Horizontal) is a horizontal steel member used in scaffolding systems (especially Cuplock scaffolding). It connects vertical standards and forms the horizontal framework that supports platforms and distributes loads.',
    image: '/asset/ledger.png',
    features: ['Strong Horizontal Support', 'Secure Cuplock Locking', 'High Load Capacity'],
    category: 'scaffolding',
  },
  {
    id: 9,
    name: 'MS CHALLI',
    description: 'MS Challi is a mild steel perforated plank used in scaffolding systems to create a safe working platform for workers. The holes (perforations) help prevent slipping and also allow water, mud, and debris to pass through.',
    image: '/asset/ms_challi.png',
    features: ['Anti-slip Surface', 'Heavy Duty Steel', 'Safe Working Platform'],
    category: 'platform',
  },
  {
    id: 10,
    name: 'Standard Vertical',
    description: 'Standard Vertical is the main vertical pipe in a scaffolding system that carries the load of the entire structure. In systems like Cuplock scaffolding, ledgers and other horizontal members are connected to the vertical standard to create a strong and stable framework.',
    image: '/asset/standard_vertical.png',
    features: ['High Load Bearing', 'Strong Vertical Support', 'Secure Cuplock Connection'],
    category: 'scaffolding',
  },
    {
    id: 11,
    name: 'Forged Swivel Clamp',
    description: 'Forged Fixed Clamp is a scaffolding coupler used to connect two scaffold pipes at a fixed 90° angle. It provides a strong and rigid connection between horizontal and vertical pipes, ensuring stability in the scaffolding structure.',
    image: '/asset/forged_clamp_swivel.png',
    features: ['90° rigid connection', 'Heavy Duty Forged Steel', 'Strong Pipe Locking'],
    category: 'accessories',
  },
    {
    id: 12,
    name: 'Forged Fixed Clamp',
    description: 'Forged Fixed Clamp is a scaffolding coupler used to connect two scaffold pipes at a fixed 90° angle. It provides a strong and rigid connection between horizontal and vertical pipes, ensuring stability in the scaffolding structure.',
    image: '/asset/forged_clamp_fixed.png',
    features: ['90° rigid connection', 'Heavy Duty Forged Steel', 'Strong Pipe Locking'],
    category: 'accessories',
  }
  // {
  //   id: 0,
  //   name: '',
  //   description: '',
  //   image: '',
  //   features: [''],
  //   category: 'shuttering',
  // },
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'scaffolding', name: 'Scaffolding' },
  { id: 'props', name: 'Props & Jacks' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'shuttering', name: 'Shuttering' },
  { id: 'platform', name: 'Platform' },
];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(
  navigator.userAgent
);
const handleEnquiry = (productName) => {
  if (isMobile) {
    window.location.href = `tel:${Contact.phone}`;
  } else {
    const subject = `Enquiry for ${productName} - NOOVA Scaffolding`;
    const body = `Hello,

I am interested in ${productName}. Please share more details.

Thank you.`;

    window.location.href =
      `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
};
  return (
    <section id="products" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50"></div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Our Products
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-heading">
            Quality Scaffolding <span className="text-accent">Equipment</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            We supply well-maintained, safety-checked materials following strict quality standards
            to ensure reliable performance on every project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover-lift border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick View Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="white" className="w-full">
                    <i className="fas fa-eye mr-2"></i>
                    View Details
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors"
                  onClick={() => handleEnquiry(product.name)}
                >
                  <i className={`fas ${isMobile ? "fa-phone-alt" : "fa-envelope"} mr-2`}></i>
                  {isMobile ? "Call Now" : "Email Enquiry"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Looking for specific equipment? We have a wide range of scaffolding solutions.
          </p>
          <Button variant="premium" size="xl">
            <i className="fas fa-file-alt mr-2"></i>
            Download Full Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};
