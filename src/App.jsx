import { useState, useEffect } from 'react'
import mainbl from './assets/mainbl.svg'
import './App.css'

function Menu({ toggleTheme, theme }) {
  return (
    <header className="sticky-header">
      <nav>
        <menu>
          <li><a className='draw-border' href="/#Home">Home /<p className='outline'>/</p></a></li>
          <li><a className='draw-border' href="/#WhatWeDo">What We Do /<p className='outline'>/</p></a></li>
          <li><a className='draw-border' href="/#CompletedProjects">Completed Projects /<p className='outline'>/</p></a></li>
          <li><a className='draw-border' href="/#ContactUs">Contact Us /<p className='outline'>/</p></a></li>
          <li className='toggle-container'>
            <p>Dark Mode</p>
            <input type="checkbox" id="theme-toggle" className="theme-toggle-checkbox" checked={theme === 'dark'} onChange={toggleTheme}/>
            <label htmlFor="theme-toggle" className="theme-toggle-label"></label>
          </li>

        </menu>
      </nav>
    </header>
  );
}

function Home() {
  const scrollToWhatWeDo = () => {
    const whatWeDoSection = document.getElementById('WhatWeDo');
    whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id='Home'>
      <div>
        <div>
          <img src={mainbl} className="svgs dark" />
        </div>
        <h1 className='punchline'>"Empowering businesses and individuals through custom web solutions."</h1>
      </div>
      <a className='draw-border  opl' onClick={scrollToWhatWeDo}>Learn More </a>
    </section>
  )
}

function WhatWeDo() {
  return (
    <section id='WhatWeDo'>
      <h1>What We Do</h1>
      <div className="skills-grid">
        <div className="skill">
          <h2>Web Development</h2>
          <p>HTML, CSS, JavaScript, React, Node.js</p>
        </div>
        <div className="skill">
          <h2>Design</h2>
          <p>UI/UX, Photoshop, Figma</p>
        </div>
        <div className="skill">
          <h2>Other Skills</h2>
          <p>Project Management, SEO, Marketing</p>
        </div>
      </div>
    </section>
  )
}

function CompletedProjects() {
  return (
    <section id='CompletedProjects'>
      <h1>Completed Projects</h1>
      <div className='project'>
        <h3>RootRevolution</h3>
        <a href="https://rootrevolution.store">rootrevolution.store</a>
      </div>
      <div className='project'>
        <h3>Sam Warr Portfolio</h3>
        <a href="https://sam-warr.com">sam-warr.com</a>
      </div>
      <div className='project'>
        <h3>Sam Warr Web Development</h3>
        <a href="https://samwarrwebdev.com">samwarrwebdev.com</a>
      </div>
    </section>
  )
}

function ContactUs() {
  return (
    <section id='ContactUs'>
      <h1>Contact Us</h1>
    </section>
  )
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('class', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.setAttribute('class', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (localStorage.getItem('intro') === 'true') return;
    const timeoutId = setTimeout(() => {toggleTheme();}, 2000);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    if (localStorage.getItem('intro') === 'true') return;
    const timeoutId = setTimeout(() => {toggleTheme();}, 3200);
    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
    if (localStorage.getItem('intro') === 'true') return;
    const timeoutId = setTimeout(() => {localStorage.setItem('intro', 'true');}, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <WhatWeDo />
      <CompletedProjects />
      <ContactUs />
    </div>
  )
}
export default App