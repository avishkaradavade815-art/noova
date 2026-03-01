import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT,SOCIALS } from "config.js";

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_ceb9f790-9b88-4115-8ac3-f5dbc96e5fee/artifacts/ze44u8mi_IMG_5393.png';

var contactInfo = [
  {
    icon: 'fa-phone-alt',
    title: 'Phone',
    value: CONTACT.phone,
    link: `tel:${CONTACT.phone}`,
  },
  {
    icon: 'fa-envelope',
    title: 'Email',
    value: CONTACT.email,
    link: `mailto:${CONTACT.email}`,
  },
  {
    icon: 'fa-map-marker-alt',
    title: 'Location',
    value: 'Maharashtra, India',
    link: '#',
  },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

const products = [
  'Cuplock Ledger & Standards',
  'Adjustable Props',
  'Base Jack & U Head Jack',
  'MS Planks',
  'H-Frames',
  'Shuttering Plates & Beams',
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const subject = `New Enquiry from ${formData.name}`;

  const body = `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}
  `;

  window.location.href =
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // reset form
  setFormData({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
};

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-heading">
            Ready to Start Your <span className="text-accent">Project?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            Submit your enquiry and our team will contact you with a customized 
            scaffolding solution for your project.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">
              Request a Quote
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-check-circle text-4xl text-success"></i>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Thank You!</h4>
                <p className="text-muted-foreground">
                  Your enquiry has been submitted. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details / Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    required
                    className="w-full resize-none"
                  />
                </div>

<Button type="submit" className="..." > Send Enquiry </Button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-5 bg-gradient-subtle rounded-xl border border-border/50 hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <i className={`fas ${info.icon} text-accent text-lg group-hover:text-white`}></i>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.title}</div>
                    <div className="font-semibold text-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="bg-primary rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4">
                <i className="fas fa-clock mr-2"></i>
                Working Hours
              </h4>
              <div className="space-y-2 text-white/90">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-white/80">
                  <i className="fas fa-info-circle mr-2"></i>
                  For urgent requirements, call us anytime!
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">Follow us:</span>
              <div className="flex gap-3">
                {['facebook', 'linkedin', 'instagram', 'twitter'].map((social) => (
                  <a
                    key={social}
                    href={SOCIALS[social] || "#"} // use SOCIALS value if exists
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="NOOVA Scaffolding"
              className="h-14 mb-6 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              India&apos;s Reliable Scaffolding &amp; Shuttering Rental Company. Building trust 
              through safety, quality, and timely service.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <i className="fas fa-shield-alt"></i>
              <span className="text-sm font-medium">BIS Certified Company</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 text-sm hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-white/80 text-sm hover:text-accent transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-white/80 text-sm mb-4">
              Subscribe to our newsletter for updates and offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button variant="hero" size="icon" className="flex-shrink-0">
                <i className="fas fa-paper-plane"></i>
              </Button>
            </div>
            <div className="mt-6 flex gap-3">
                {['facebook', 'linkedin', 'instagram', 'twitter'].map((social) => (
                  <a
                    key={social}
                    href={SOCIALS[social] || "#"} // use SOCIALS value if exists
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-white transition-colors"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} NOOVA Scaffolding Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
