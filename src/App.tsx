import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <h1 className="name">Julian D. Kremb</h1>
          <p className="title">
            Software Engineer – Angular / React / TypeScript
          </p>
        </div>
        <div className="contact">
          <p>Berlin, Germany</p>
          <p>
            <a href="mailto:julian.dschana.kremb@gmail.com">
              julian.dschana.kremb@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:+4917672101533"
              aria-label="Phone number"
            >
              +49 176 72101533
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/julian-kremb-92a787a4/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </header>

      <main className="main">
        <section className="section">
          <h2>Summary</h2>
          <p>
            Software engineer specializing in Angular or React and TypeScript to
            build user-focused, scalable web applications. Over 6 years of
            proven development impact in projects supporting large German
            automotive clients, such as Volkswagen and Audi, using various agile
            development strategies. I am always eager to learn new skills and
            take on new challenges throughout my tech world journey.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div>
              <h3>Languages &amp; Frameworks</h3>
              <ul>
                <li>Angular, React, TypeScript, HTML, CSS</li>
                <li>Ant Design, Jest, Cypress</li>
                <li>REST API, RPC</li>
                <li>Node.js (background apps)</li>
              </ul>
            </div>
            <div>
              <h3>Tools &amp; Platforms</h3>
              <ul>
                <li>Git, GitLab, Jira</li>
                <li>Docker, Kubernetes</li>
                <li>Copilot, Figma</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Experience</h2>

          <article className="experience-item">
            <header>
              <div>
                <h3>Frontend Software Engineer</h3>
                <p className="company">
                  Ingenieurgesellschaft Auto und Verkehr (IAV)
                </p>
              </div>
              <div className="meta">
                <span>2019 – present</span>
                <span>Berlin, Germany</span>
              </div>
            </header>
            <p className="role-note">
              Working student (2019–2022), Frontend Software Engineer (2022–present)
            </p>
            <ul>
              <li>
                Developed the “Wellness In-Car App” from scratch for Volkswagen
                using Angular, TypeScript and Node.js (background app). Launched
                as a flagship app for VW’s ID. family of electric vehicles.
              </li>
              <li>
                Currently developing the frontend of an in-house proof-of-concept
                web app for AI-assisted agile management systems using React and
                TypeScript.
              </li>
              <li>
                Collaborated in agile, Kanban-structured teams of engineers,
                designers and product owners to deliver on time using clean coding
                practices.
              </li>
              <li>
                Spearheaded development of a comprehensive GitLab CI/CD solution
                for the company’s web applications, reducing project
                bootstrapping time by several days for more than 10 future
                webapps, and led a CI/CD workshop for 20+ developers.
              </li>
            </ul>
          </article>

          <article className="experience-item">
            <header>
              <div>
                <h3>IT Administrator</h3>
                <p className="company">
                  Humboldt Universität – Center for British Studies
                </p>
              </div>
              <div className="meta">
                <span>2019</span>
                <span>Berlin, Germany</span>
              </div>
            </header>
            <ul>
              <li>
                Provided on-site technical support to quickly resolve IT issues.
              </li>
              <li>
                Maintained and updated the institute&apos;s website using a local
                CMS.
              </li>
              <li>
                Coordinated with the university&apos;s central IT administration to
                align with institutional policies and standards.
              </li>
            </ul>
          </article>

          <article className="experience-item">
            <header>
              <div>
                <h3>Co‑Founder, Lead Developer &amp; Lead Designer</h3>
                <p className="company">Paiir UG – Interactive Photo‑Sharing App</p>
              </div>
              <div className="meta">
                <span>2014 – 2016</span>
                <span>Berlin, Germany</span>
              </div>
            </header>
            <ul>
              <li>
                Led iOS app development in Objective‑C and product design using
                Sketch.
              </li>
              <li>
                Achieved Top 10 “Best New Apps” in 110+ countries and Top 100
                “Photo &amp; Video” in 55 countries on the iOS App Store.
              </li>
              <li>
                Featured on VentureBeat (
                <a
                  href="https://bit.ly/434s8c8"
                  target="_blank"
                  rel="noreferrer"
                >
                  bit.ly/434s8c8
                </a>
                ).
              </li>
            </ul>
          </article>
        </section>

        <section className="section">
          <h2>Education &amp; Languages</h2>
          <div className="education">
            <div>
              <h3>B.Sc. Business Informatics (Wirtschaftsinformatik)</h3>
              <p>Technische Universität Berlin, 2022</p>
            </div>
            <div className="languages">
              <h3>Languages</h3>
              <ul>
                <li>German – Business proficient</li>
                <li>English – Business proficient</li>
                <li>Mandarin – Conversational</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Julian D. Kremb</p>
      </footer>
    </div>
  );
}

export default App;