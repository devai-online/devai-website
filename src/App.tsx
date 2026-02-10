import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Clients } from './components/sections/Clients';
import { Contact } from './components/sections/Contact';
import { CursorTrail } from './components/ui/CursorTrail';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CursorTrail />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;