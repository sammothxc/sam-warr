import { useState, useEffect } from 'react'
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
  const [text, setText] = useState('');
  const fullText = 'Empowering businesses and individuals through custom web solutions.';
  const typingSpeed = 150; //milliseconds
  

  useEffect(() => {
    let index = 0;

    function typeText() {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText[index]);
        index++;
        setTimeout(typeText, typingSpeed);
      } else {
        setText(fullText); // Set text to fullText once typing is complete
      }
    }

    typeText();
  }, []);


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
        <div className="text-with-cursor">
          <p>{text}</p>
          <span className="cursor">|</span>
        </div>
      </div>
      <div id='gimmespace'/>
      <a className='draw-border opl' onClick={scrollToWhatWeDo}>
        Learn More
      </a>
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