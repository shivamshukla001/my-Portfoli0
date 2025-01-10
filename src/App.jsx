import React from 'react';
import Header from './components/Header';
import About from './components/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/Project';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';

AOS.init();
function App() {
  return (
    <div>
      <Header />
      <main>
        <About/>
        <Projects/>
        <Skills/>
        <Certificates/>
        <Resume/>
        <Contact/>
        {/* Additional sections will go here */}
      </main>
    </div>
  );
}

export default App;
