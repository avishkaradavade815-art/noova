import React from 'react';
import { Button } from '@/components/ui/button';

const ABOUT_IMAGE = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzfGVufDB8fHx8MTc2OTc4NDE0NXww&ixlib=rb-4.1.0&q=85';

const features = [
  {
    icon: 'fa-shield-alt',
    title: 'Safety First',
    description: 'Rigorous safety protocols and certified equipment for every project.',
  },
  {
    icon: 'fa-clock',
    title: 'Timely Delivery',
    description: 'Quick setup and on-time project completion guaranteed.',
  },
  {
    icon: 'fa-award',
    title: 'Quality Tested',
    description: 'Well-maintained, inspection-certified scaffolding materials.',
  },
  {
    icon: 'fa-users',
    title: 'Expert Team',
    description: 'Skilled technicians with years of industry experience.',
  },
];

const directors = [
  {
    name: 'Avishkar Adavade',
    role: 'Director',
    vision: 'Building a strong foundation for India&apos;s future with safe, reliable scaffolding solutions.',
  },
  {
    name: 'Shital Kadam',
    role: 'Director',
    vision: 'Creating a symbol of trust, strength, and progress in India&apos;s construction industry.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            About Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-heading">
            Building India's Infrastructure <br />
            <span className="text-accent">With Trust & Reliability</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            A professionally managed scaffolding and shuttering rental company serving 
            clients across India with safe and reliable access solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ABOUT_IMAGE}
                alt="Construction Workers"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 bg-accent text-white rounded-xl p-4 shadow-lg animate-float">
              <i className="fas fa-hard-hat text-2xl mb-2"></i>
              <div className="text-sm font-semibold">Safety Certified</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">
              India&apos;s Reliable Scaffolding &amp; Shuttering Rental Company
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With years of industry experience and a strong commitment to quality, 
              we provide complete scaffolding systems to meet project requirements of any scale. 
              Our skilled team ensures quick setup and adapts to each project&apos;s needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We strive to build lasting client relationships through trust, professionalism, 
              and consistent performance. Our scaffolding complies with industry regulations 
              and local BIS standards. We emphasize safety in every aspect of our operations.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <i className="fas fa-bullseye text-accent text-xl mb-3"></i>
                <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                <p className="text-sm text-muted-foreground">
                  To provide safe, efficient, and cost-effective scaffolding solutions.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                <i className="fas fa-eye text-accent text-xl mb-3"></i>
                <h4 className="font-semibold text-foreground mb-2">Our Vision</h4>
                <p className="text-sm text-muted-foreground">
                  To be among India's most trusted scaffolding solution companies.
                </p>
              </div>
            </div>

            <Button variant="premium" size="lg">
              <i className="fas fa-arrow-right mr-2"></i>
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-card hover-lift border border-border/50 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <i className={`fas ${feature.icon} text-accent text-xl group-hover:text-white`}></i>
              </div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Directors Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-border/50">
          <div className="text-center mb-10">
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-2">
              Leadership
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-heading">
              Directors & Vision
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {directors.map((director, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-subtle border border-border/50"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4">
                  <i className="fas fa-user-tie text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">{director.name}</h4>
                <span className="text-accent font-medium text-sm mb-4">{director.role}</span>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  &ldquo;{director.vision}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
