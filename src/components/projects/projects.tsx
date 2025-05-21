import '../projects/projects.css';
import imgPortfolio from '../../assets/Project-webportfolio.png';
import imgFallAlert from '../../assets/FallAlert.png';
import imgICU from '../../assets/HumanizacionUci.png';
import imgUTSA from '../../assets/UTSA.jpg';
import imgWhatsHap from '../../assets/WhatsHap.jpg';


const projects = [
  {
    id: 1,
    title: "Web Portfolio",
    description: "This website intends to showcase my projects and skills. Webside responsive and accessible, created with Vite+React and TypeScript.",
    imageUrl: imgPortfolio,
    repoUrl: "",
  },
  {
    id: 2,
    title: "Fall Alert",
    description: "Fall and Sudden Movement Monitoring System for Geriatric Patients. The system utilizes a GY-85 sensor connected to an ESP32 micro-controller to gather data regarding the patient’s movements. The data is stored in a MongoDB server. A dedicated web page then analyzes this data, generating alerts for caregivers when necessary.",
    imageUrl: imgFallAlert,
    repoUrl: "https://github.com/IsabelCA01/Fall_alert",
  },
  {
    id: 3,
    title: "ICU Humanization",
    description: "Development of a web platform aimed at providing standardized patient information to their respective relatives/companions. This initiative aims to alleviate communication congestion in channels and enhance the humanization of the ICU, Clinica CES, Medellin.",
    imageUrl: imgICU,
    repoUrl: "https://github.com/IsabelCA01/humanizacion_UCI",
  },
  {
    id: 4,
    title: "Influence of the PDMD's on the treatment with opioids in the pregnant and postpartum population",
    description: "Development of a web platform aimed at providing standardized patient information to their respective relatives/companions. This initiative aims to alleviate communication congestion in channels and enhance the humanization of the ICU, Clinica CES, Medellin.",
    imageUrl: imgUTSA,
    repoUrl: "",
  },
  {
    id: 5,
    title: "WhatsHap",
    description: "Development of a web platform aimed at providing standardized patient information to their respective relatives/companions. This initiative aims to alleviate communication congestion in channels and enhance the humanization of the ICU, Clinica CES, Medellin.",
    imageUrl: imgWhatsHap,
    repoUrl: "",
  },
];


function Projects() {
  return (
    <>
      <section className="portfolio-container" aria-label="Sección de proyectos">
        <h2 className="portfolio-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(({ id, title, description, imageUrl, repoUrl }) =>
            repoUrl ? (
              <a
                key={id}
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
                tabIndex={0}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <article className="project-card">
                  <img className="project-image" src={imageUrl} alt={`Imagen del proyecto: ${title}`} />
                  <div className="project-content">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                  </div>
                </article>
              </a>
            ) : (
              <article className="project-card-normal" key={id}>
                <img className="project-image" src={imageUrl} alt={`Imagen del proyecto: ${title}`} />
                <div className="project-content">
                  <h3 className="project-title">{title}</h3>
                  <p className="project-description">{description}</p>
                </div>
              </article>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;