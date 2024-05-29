import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import profilePic from './assets/images/profile.jpeg';
import pythonImage from './assets/images/Python.png';
import reactImage from './assets/images/React.png';
import metamaskImage from './assets/images/metmaskethers.jpg';
import BoxReveal from './components/magincui/box-reveal';

function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.documentElement.scrollTop > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className='brand'>
            <BoxReveal boxColor={"#fff"} duration={0.25}>
              <h1>Zaken_dev</h1>
            </BoxReveal>
          </div>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#hero">{t("Home")}</a></li>
            <li><a href="#about">{t("About")}</a></li>
            <li><a href="#projects">{t("Projects")}</a></li>
            <li><a href="#contact">{t("Contact")}</a></li>
            <div>
              <button onClick={() => changeLanguage('en')}>EN</button>
              <button onClick={() => changeLanguage('es')}>ES</button>
            </div>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero" id="hero">
          <BoxReveal boxColor={"#fff"} duration={0.25} delay={0.1}>
            <h2>{t("Hello, I'm Zaken")}</h2>
          </BoxReveal>
          <BoxReveal boxColor={"#fff"} duration={0.25} delay={0.3}>
            <h3>{t("Professional Web Developer")}</h3>
          </BoxReveal>
          <button><a href="#projects">{t("Projects")}</a></button>
        </section>
        <section className="about" id="about">
          <img src={profilePic} alt="Profile of Zaken" className="profile-pic" />
          <BoxReveal boxColor={"#fff"} duration={0.25} delay={0.5}>
            <h2>{t("About Me")}</h2>
          </BoxReveal>
          <BoxReveal boxColor={"#fff"} duration={0.25} delay={0.5}>
            <div className='aboutCard'>
              <p>{t("Hello! I'm Guillermo Martínez, known as Zaken_dev, and I'm a passionate web developer with a focus on creating efficient and visually appealing web applications. My passion for technology drives me to constantly face new challenges, allowing me to grow and improve in my field. If you are looking for someone with creativity and dedication to take your projects to the next level, do not hesitate to contact me. Together we can achieve incredible things!")}</p>
            </div>
          </BoxReveal>
        </section>
        <section className="projects" id="projects">
          <h2>{t("My Projects")}</h2>
          <h3>{t("Although I tend to create new things on Github, these are some of my best projects so far!")}</h3>
          <div className="project-cards">
            <div className="card">
              <div className="image">
                <img src={reactImage} alt='React'></img>
              </div>
              <div className="content">
                <span className="title">
                  {t("OpenDevTools")}
                </span>
                <p className="desc">
                  {t("I created this page to gather open source web resources that people around the world could use for free and selflessly.")}
                </p>
                <a className="action" href="https://www.opendevtools.com">
                  {t("Find out more")}
                  <span aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={pythonImage} alt='Python'></img>
              </div>
              <div className="content">
                <span className="title">
                  {t("Stock Story Reporter")}
                </span>
                <p className="desc">
                  {t("A simple python program that uses GUI, pandas and quantstats to generate a full company report. With an input of an initial investment, you can see how much your capital would have increased/decreased.")}
                </p>
                <a className="action" href="https://github.com/Z4k3n/StockHistoryReporter">
                  {t("Find out more")}
                  <span aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="image">
                <img src={metamaskImage} alt='Metamask Wallet Connect'></img>
              </div>
              <div className="content">
                <span className="title">
                  {t("Metamask Wallet Connect")}
                </span>
                <p className="desc">
                  {t("With this simple code, we use a simple app made with React to connect our wallet through Metamask and get both address and balance, simple but extremely useful for future projects or simple wallet implementations!")}
                </p>
                <a className="action" href="https://github.com/Z4k3n/metamask-wallet-connect">
                  {t("Find out more")}
                  <span aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="footer-card">
          <a href="https://github.com/Z4k3n" className="socialContainer containerOne">
            <svg className="socialSvg githubSvg" viewBox="0 0 16 16"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path></svg>
          </a>
          <a href="https://x.com/Zaken_dev" className="socialContainer containerTwo">
            <svg className="socialSvg twitterSvg" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/zaken/" className="socialContainer containerThree">
            <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
          </a>
          <a href="https://t.me/Zaken_dev" className="socialContainer containerFour">
            <svg className="socialSvg telegramSvg" viewBox="0 0 16 16"><path d="M16 3.036a1.248 1.248 0 0 0-1.263-.01L1.236 8.059c-.558.27-.531.667-.011.838l3.098.952 1.17 3.679c.156.487.389.613.676.613.279 0 .487-.102.676-.28l1.72-1.36 3.587 2.803c.487.37.844.18.955-.545l2.8-12.001c.169-.723-.188-1.087-.755-.856z"></path></svg>
          </a>
        </div>
      </footer>

      <button id="scrollToTopBtn" onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>

    </div>
  );
}

export default App;