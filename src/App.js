import "@/App.css";
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Products } from '@/components/Products';
import { Services } from '@/components/Services';
import { Industries } from '@/components/Industries';
import { Testimonials, CTA, Careers } from '@/components/Testimonials';
import { Contact, Footer } from '@/components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Services />
      <Industries />
      <Testimonials />
      <CTA />
      <Contact />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
