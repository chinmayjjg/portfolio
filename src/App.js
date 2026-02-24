import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContributionGraph from './components/ContributionGraph';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          
          <About />
          <Skills />
          <Projects />
          
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
