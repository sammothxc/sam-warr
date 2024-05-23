import { useState, useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';
import mainbl from './assets/mainbl.svg'
import webdes from '/webdes.jpg'
import './App.css'

function Menu({ toggleTheme, theme }) {
  const scrollToHome = () => {
    const homeSection = document.getElementById('Home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToWhatWeDo = () => {
    const whatWeDoSection = document.getElementById('WhatWeDo');
    whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCompletedProjects = () => {
    const completedProjectsSection = 
    document.getElementById('CompletedProjects');
    completedProjectsSection.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById('ContactUs');
    contactUsSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="sticky-header">
      <nav>
        <li>
          <a className='draw-border' onClick={scrollToHome}>
            Home /<p className='outline'>/</p>
          </a>
        </li>
        <li>
          <a className='draw-border' onClick={scrollToWhatWeDo}>
            What We Do /<p className='outline'>/</p>
          </a>
        </li>
        <li>
          <a className='draw-border' onClick={scrollToCompletedProjects}>
            Completed Projects /<p className='outline'>/</p>
          </a>
        </li>
        <li>
          <a className='draw-border' onClick={scrollToContactUs}>
            Contact Us /<p className='outline'>/</p>
          </a>
        </li>
        <li className='toggle-container'>
          <div>Dark Mode /<p className='outline'>/</p></div>
          <input
            type="checkbox"
            id="theme-toggle"
            className="theme-toggle-checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
          <label
            htmlFor="theme-toggle"
            className="theme-toggle-label">
          </label>
        </li>
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
    <section id='Home' className='section-end'>
      <div>
        <div>
          <img src={mainbl} className='svgs dark' />
        </div>
      </div>
      <div className="terminal-container">
        <div className='terminal mono'>
          <Typewriter
            className='typewriter'
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
              cursor: '█',
            }}
            onInit={(typewriter) => {
              typewriter.typeString(
                  '//> Empowering businesses and individuals through custom web solutions'
                )
                .pauseFor(1000)
                .deleteChars(20)
                .typeString('webserver management')
                .pauseFor(2500)
                .deleteChars(20)
                .typeString('social media handling')
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
      <a className='draw-border button o2' onClick={scrollToWhatWeDo}>
        Learn More /<p className='outline o2'>/</p>
      </a>
    </section>
  )
}

function WhatWeDo() {
  const [rawHTML, setRawHTML] = useState('');
  useEffect(() => {
    const captureRawHTML = () => {
      const rawHTMLString = document.documentElement.outerHTML;
      setRawHTML(rawHTMLString);
    };
    captureRawHTML();
  }, []);

  return (
    <section id='WhatWeDo' className='section-end'>
      <h1>What We Do /<p className='outline o1'>/</p></h1>
      <div className="skills-grid">
        <div className="skill">
          <div className="scrolling-background mono" id='scrolly'>
            {rawHTML}
          </div>
          <h2>Web Development /<p className='outline o2'>/</p></h2>
          <div className='wrpr mono'>
            <p>
              From single page portfolios to multi-page business websites,
              we offer a wide range of services such as:
            </p>
            <li>
              Static Websites (HTML, CSS, JS)
            </li>
            <li>
              Dynamic Websites (Backend development, Node.js server-side and
              client-side, and API calls)
            </li>
            <li>
              Web Applications (User authentication, information portals,
              one-off online web tools)
            </li>
          </div>
        </div>
        <div className="skill">
          <h2>Web Design /<p className='outline o2'>/</p></h2>
          <div className='wrpr mono'>
            <img src={`/webdes.jpg`} className='skill-image'/>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </div>
        </div>
        <div className="skill">
          <h2>Other Services /<p className='outline o2'>/</p></h2>
          <div className='wrpr mono'>
            <li>Social Media Management: Facebook, Instagram</li>
            <li>Logo Design: Photoshop, Gimp, Inkscape</li>
            <li>SEO: Keywords, Website optimization, Load times</li>
          </div>
        </div>
      </div>
    </section>
  )
}

function CompletedProjects() {
  const projects = [
    {
      name: 'RootRevolution Seed Crowdfunding',
      url: 'https://rootrevolution.store',
      imgName: 'rr.jpg'
    },
    {
      name: 'SCSS Personal Portfolio',
      url: 'https://old.sam-warr.com',
      imgName: 'swp.jpg'
    },
    {
      name: 'Sam Warr Web Development Business Website',
      url: 'https://samwarrwebdev.com',
      imgName: 'swwd.jpg'
    },
    // Add new projects here
  ];

  return (
    <section id='CompletedProjects'>
      <h1>Completed Projects /<p className='outline o1'>/</p></h1>
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <a
            href={project.url}
            className='project-link'
            key={index}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='project draw-border'>
              <img
                src={`/${project.imgName}`}
                alt={project.name}
                className='project-image'
                />
              <hr />
              <h3>{project.name} /<p className='outline o3'>/</p></h3>
              <p className='mono'>{project.url}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}




function ContactUs() {
  return (
    <section id='ContactUs'>
      <h1>Contact Us /<p className='outline o1'>/</p></h1>
      <div className='contact-form mono'>
        <p>
          Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>
    </section>
  )
}

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'dark'
  );

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
    const timeoutId = setTimeout(() =>
      {localStorage.setItem('intro', 'true');}, 500
    );
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