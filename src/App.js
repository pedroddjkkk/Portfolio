import "./styles.css";

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <div>
          <a href="#welcome-section" class="nav-elements">
            About
          </a>
          <a href="#project-title" class="nav-elements">
            Work
          </a>
          <a href="#contact-section" class="nav-elements" id="profile-link">
            Contact
          </a>
        </div>
      </nav>
      <section id="welcome-section">
        <h1>Hello i'm Pedro</h1>
        <p id="welcome-p">A student who like web development</p>
      </section>
      <section id="projects">
        <h1 id="project-title">These are some of my projects</h1>
        <div id="project">
          <div class="project hidden" id="grid-item1">
            <img src="static/img/tsla.png" alt="Project" class="project-img" />
            <a
              href="https://pedroddjkkk.github.io/TributePage/"
              class="project-tile"
            >
              Tribute Page
            </a>
          </div>
          <div class="project hidden" id="grid-item2">
            <img
              src="static/img/survey.png"
              alt="Project"
              class="project-img"
            />
            <a
              href="https://pedroddjkkk.github.io/SurveyForm/"
              class="project-tile"
            >
              Survey Form
            </a>
          </div>
          <div class="project hidden" id="grid-item3">
            <img
              src="static/img/prduct.png"
              alt="Project"
              class="project-img"
            />
            <a
              href="https://pedroddjkkk.github.io/ProductPage/"
              class="project-tile"
            >
              Product Page
            </a>
          </div>
          <div class="project hidden" id="grid-item4">
            <img
              src="static/img/calculator.png"
              alt="Project"
              class="project-img"
            />
            <a
              href="https://pedroddjkkk.github.io/CalculadoraReact/"
              class="project-tile"
            >
              React Calculator
            </a>
          </div>
        </div>
      </section>
      <section id="contact-section">
        <div class="contact-links">
          <a
            id="profile-link"
            href="https://github.com/pedroddjkkk"
            target="_blank"
            class="contact-details"
          >
            <i class="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://twitter.com/pedroddjkk"
            target="_blank"
            class="contact-details"
          >
            <i class="fab fa-twitter"></i> Twitter
          </a>
          <a href="malito: pedroddjkk@gmail.com" class="contact-details">
            <i class="fas fa-at"></i> Send a mail
          </a>
          <a href="tel:+55-44-997506602" class="contact-details">
            <i class="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
