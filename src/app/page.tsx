// app/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialBar from '@/components/SocialBar'; // Add this line
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <SocialBar /> {/* Add this line */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}