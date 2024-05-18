import { useState, useEffect } from 'react'
import swlogo from './assets/swlogo.svg'
import rrlogo from './assets/rrlogo.svg'
import mainbl from './assets/mainbl.svg'
import './App.css'

function Menu({ toggleTheme, theme }) {
  return (
    <header className="sticky-header">
      <nav>
        <menu>
          <li><a href="/#Home">Home /<p className='outline'>/</p></a></li>
          <li><a href="/#WhatWeDo">What We Do /<p className='outline'>/</p></a></li>
          <li><a href="/#CompletedProjects">Completed Projects /<p className='outline'>/</p></a></li>
          <li><a href="/#ContactUs">Contact Us /<p className='outline'>/</p></a></li>
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode /<p className='outline'>/</p>
          </button>
        </menu>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section id='Home'>
      <div>
        <div>
          <img src={mainbl} className="svgs dark" />
        </div>
        <p>Web development services for small businesses and individuals.</p>
      </div>
    </section>
  )
}

function WhatWeDo() {
  return (
    <section id='WhatWeDo'>
      <h1>What We Do</h1>
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
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('class', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Menu toggleTheme={toggleTheme} theme={theme} />
      <Home />
      <WhatWeDo />
      <CompletedProjects />
      <ContactUs />
    </div>
  )
}
export default App