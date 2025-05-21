import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import '../styles/front_page.css'
import Projects from '../components/projects/projects'
import imgCV from '../assets/Isabel-fotocv.jpg';

function Front_Page() {
  return (
    <>
      <nav className="nav-bar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>

          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="cv-container" id="home">
        <div className="left-column">
          <div className="intro-text">
            <h1>Hi, I’m Isabel!</h1>
            <h2> I'm a Biomedical Engineer, Data Scientist and Web Developer</h2>
            <p>
              Passionate about projects that live at the intersection of technology and healthcare.
              I love using my skills to create solutions that help both people and animals.
    
            </p>
            <p><strong>Fun fact: </strong> I'm a big fan of reading, painting and finding creative ways to express myself!</p>            
            <a
                href="https://github.com/IsabelCA01"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                style={{ textDecoration: "none", color: "inherit" }}><button className="cta-button">VIEW MY GITHUB</button></a>
          </div>
        </div>

        <div className="right-column">
          <div className="profile-image-container">
            <img
              src={imgCV}
              alt="Isabel Castrillon Acosta"
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <h1>Isabel Castrillón Acosta</h1>
            <h2>Biomedical Engineer, Data Scientist, Web Developer</h2>
          </div>
        </div>
      </div>

      <section className="cv-section about" id="about">
        <h2>About Me</h2>
        <p>
        Biomedical Engineer fluent in Spanish, English (C1), and German (C1), with hands-on experience in data
        analysis, programming and clinical research environments. Skilled in managing large datasets, verifying data
        accuracy, and applying data validation techniques in healthcare-related projects. Strong attention to detail,
        analytical thinking, and ability to work effectively in cross-functional, multicultural teams. Highly motivated to
        contribute to global clinical studies with a focus on data integrity and patient safety
        </p>
      </section>

      <section className="cv-section skills" aria-label="Skills">
        <h2>Skills</h2>
        <div className="skills-container">
        <div className="programming-languages">
          <h3>Programming Languages</h3>
        <div className="skill-item">
          <div className="skill-name">Python</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">HTML</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">CSS</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">TypeScript</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle"></div>
          </div>
        </div>
          <div className="skill-item">
          <div className="skill-name">JavaScript</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle"></div>
          </div>
        </div>
  
        <div className="skill-item">
          <div className="skill-name">LATEX</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">SQL</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle "></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">R</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        </div>
        <div className="frameworks">
          <h3>Frameworks & Libraries</h3>
          <div className="skill-item">
            <div className="skill-name">React</div>
            <div className="rating" aria-label="5 de 5 puntos">
              <div className="circle filled"></div>
              <div className="circle filled"></div>
              <div className="circle filled"></div>
              <div className="circle filled"></div>
              <div className="circle"></div>
            </div>
          </div>
        <div className="skill-item">
          <div className="skill-name">Flutter</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">Node.js</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle "></div>
            <div className="circle "></div>
          </div>
          </div>  
        </div>
        <div className="tools">
          <h3>Programs & Tools</h3>
        <div className="skill-item">
          <div className="skill-name">Git</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled "></div>
            <div className="circle filled"></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">Fusion 360</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">Blender</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle "></div>
            <div className="circle "></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">Mongo DB</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled "></div>
            <div className="circle "></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">Firebase</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled "></div>
            <div className="circle "></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">Power BI</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle "></div>
            <div className="circle "></div>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-name">Microsoft Office</div>
          <div className="rating" aria-label="5 de 5 puntos">
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled"></div>
            <div className="circle filled "></div>
            <div className="circle filled "></div>
          </div>
          </div>  
          </div>
        </div>
        </section>

      

      <section className="cv-section experience" id="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Research Intern</h3>
          <p className="company"><strong>Shared Reality Lab, McGill University | Montreal, Canada</strong></p>
          <p className="date">Jun 2024 - Sep 2024</p>
          <p> Contribute to the development of a vibrotactile device that converts speech into skin vibrations, aiming to
          enhance speech comprehension for deaf and hard-of-hearing individuals.
          </p>
          <ul>
            <li>Conducted experimental sessions with human participants following ethical and research protocols</li>
            <li>Authored the scientific manuscript summarizing study results.</li>
            <li>Collaborated with a multidisciplinary team to improve device functionality for the target population.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Visiting Student Researcher</h3>
          <p className="company"><strong>HEAL Laboratory, UTSA | San Antonio, USA</strong></p>
          <p className="date">Jan 2024 - Jun 2024</p>

          <ul>
            <li>Assisted in building client websites using React and JavaScript.</li>
            <li>Optimized website performance and accessibility.</li>
            <li>Participated in code reviews and team meetings.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Jr. Data Scientist</h3>
          <p className="company"><strong>Guane Emerging Technologies | Medellín, Colombia</strong></p>
          <p className="date">May 2023 - Dec 2023</p>
          <p>  Contribute to the development of a project for the prediction of failures and optimization of response times
 in the electricity sector.
          </p>
          <ul>
            <li>Collaborate in teams of developers and data scientists using agile methodologies.</li>
            <li>Program the model inputs, generate and design model visualizations to be displayed in Power BI, enhancing
 the client’s understanding of the results.</li>
          </ul>
        </div>
      </section>

      <section className="cv-section education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Biomedical Engineering</h3>
          <p className="school"><strong>Universidad CES | Medellín, Colombia </strong></p>
          <p className="date">2020 - 2024</p>
        </div>
      </section>
            <section className="cv-section languages">
        <h2>Languages</h2>
        <ul>
          <li><strong>Spanish:</strong> Native</li>
          <li><strong>English:</strong> C1 (IELTS) </li>
          <li><strong>German:</strong> C1 (DSD II)</li>
        </ul>
      </section>
      <section className="cv-section certifications">
        <h2>Certifications</h2> 
        <ul>
          <li>TypeScript | Mimo | 2025</li>
          <li>JavaScript | Mimo | 2025</li>
          <li>Career acelerator with Power BI | Zakidata | 2024</li>
          <li>Certificate of Program Completation, Mitacs Globalink Research Internship | Mitacs | 2024</li>
          <li>Advanced Learning Algorithms | Stanford University, Deeplearning.ai | 2023</li>
          <li>Operations Research (1): Models and Applications | National Taiwan University | 2023</li>
          <li>Supervised Machine Learning: Regression and Classification | Standford University, Deeplearning.ai | 2023</li>
          <li>Biomedical Visualization | University of Glasgow | 2023</li>
        </ul>
      </section>

      
      <section className='cv-section projects' id="projects">
        <Projects />
      </section>

      <section className="cv-section contact" id="contact">
        <h2>Contact</h2>
        <p>
          <FaEnvelope /> Email: <a href="mailto:isabel.castrillonacosta@gmail.com">isabel.castrillonacosta@gmail.com</a>
        </p>
        <p>
          <FaGithub /> GitHub: <a href="https://github.com/IsabelCA01" target="_blank" rel="noopener noreferrer">github.com/IsabelCA01</a>
        </p>
        <p>
          <FaLinkedin /> LinkedIn: <a href="https://linkedin.com/in/isabel-ca" target="_blank" rel="noopener noreferrer">linkedin.com/in/isabel-ca</a>
        </p>
        <p>
          <FaMapMarkerAlt /> Location: Medellín, Colombia
        </p>
      </section>

      <footer className="cv-footer">
        <p>© 2025 Isabel Castrillón Acosta — Biomedical Engineer</p>
      </footer>
    </>
  )
}

export default Front_Page;