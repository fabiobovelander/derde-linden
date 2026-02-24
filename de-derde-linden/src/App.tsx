/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Ventures from './components/Ventures';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F5F0E6] text-[#5D4037] font-sans selection:bg-[#D4AF37] selection:text-[#5D4037]">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Philosophy />
        <Ventures />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
