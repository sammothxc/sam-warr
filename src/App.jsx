import { useState, useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';
import mainbl from './assets/mainbl.svg'
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
        <menu>
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
            <p>Dark Mode</p>
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
      </div>
      <div className="terminal mono">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(
                'Empowering businesses and individuals through custom web solutions'
              )
              .typeString('sammo')
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <div id='gimmespace'/>
      <a className='draw-border opl' onClick={scrollToWhatWeDo}>
        Learn More
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

  useEffect(() => {
    const svg = document.querySelector('svg');
    const g = document.getElementById('spirograph');
    const centerX = svg.getAttribute('width') / 2;
    const centerY = svg.getAttribute('height') / 2;
    const numCircles = 3; // Number of circles in the spirograph
    const radius = 100; // Radius of the main circle
    const speeds = [1, -2, 3]; // Speeds of each circle
    let hue = 0; // Initial hue value

    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', centerX);
      circle.setAttribute('cy', centerY);
      circle.setAttribute('r', radius * ((i + 1) / numCircles));
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', `hsl(${hue}, 70%, 50%)`);
      circle.setAttribute('stroke-width', 2);
      g.appendChild(circle);
      hue += 360 / numCircles; // Increment hue for each circle
    }

    let angle = 0;

    function animateSpirograph() {
      const points = [];
      for (let i = 0; i < numCircles; i++) {
        const speed = speeds[i];
        const circle = g.children[i];
        const r = parseFloat(circle.getAttribute('r'));
        const x = centerX + r * Math.cos(angle * speed * Math.PI / 180);
        const y = centerY + r * Math.sin(angle * speed * Math.PI / 180);
        points.push(`${x},${y}`);
      }
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M${points.join('L')}Z`);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', `hsl(${angle % 360}, 70%, 50%)`); // Adjust stroke color based on angle
      path.setAttribute('stroke-width', 2);
      g.appendChild(path);

      angle += 1;
      requestAnimationFrame(animateSpirograph);
    }

    animateSpirograph();
  }, []);
  
  return (
    <section id='WhatWeDo'>
      <h1>What We Do</h1>
      <div className="skills-grid">
        <div className="skill">
          <div className="scrolling-background mono" id='scrolly'>
            {rawHTML}
          </div>
          <h2>Web Development</h2>
          <div className='wrpr mono'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </div>
        </div>
        <div className="skill">
          <h2>Web Design</h2>
          <div className='wrpr mono'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <svg width="400" height="400">
              <g id="spirograph"></g>
            </svg>
          </div>
        </div>
        <div className="skill">
          <h2>Other Services</h2>
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
      <h1>Completed Projects</h1>
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
              <h3>{project.name}</h3>
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
      <h1>Contact Us</h1>
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