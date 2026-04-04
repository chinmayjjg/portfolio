import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import GitHubContributions from './components/GitHubContributions';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PortfolioDock from './components/PortfolioDock';
import DottedGlowBackground from './components/ui/dotted-glow-background';
import { TracingBeam } from './components/ui/tracing-beam';
import './App.css';



function App() {
  return (
    <ThemeProvider>
      <DottedGlowBackground containerClassName="App app-background">
        <main>
          <Hero />
          <TracingBeam className="portfolio-tracing-beam px-6">
            <About />
            <GitHubContributions />
            <Skills />
            <Projects />
            <Contact />
          </TracingBeam>
        </main>
        <PortfolioDock />
      </DottedGlowBackground>
    </ThemeProvider>
  );
}

export default App;
