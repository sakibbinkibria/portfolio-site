import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import ImageModal from "../ImageModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ProjectsPage.css';
import {
  faExternalLinkAlt,
  faCode,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

const ProjectsPage = ({ scrollToTop }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedImage("");
    setShowModal(false);
  };

  useEffect(()=>{
    scrollToTop();
  },[])

  const projectsData = [
    {
      title: "News Website",
      description:
        "Fully Responsive website using NewsApi. Created with ReactJs, Express, and Node. Has modern UI, search, infinite loading features",
      linkText: "Github repo",
      linkUrl: "https://github.com/sakibbinkibria/be-informed",
      icon: faCode,
      category: "Projects",
      image: (
        <img
          src="./newsWebsite.png"
          alt="news website screenshot"
          className="projectScreenshot"
          onClick={() => openModal("./newsWebsite.png")}
        />
      ),
    },
    {
      title: "Real-Time chat web app",
      description:
        "A Real-time chat app developed with React and Firebase, with user authentication, private chat rooms, group chat features, and responsive design.",
      linkText: "Live Demo",
      linkUrl: "https://ourchat-app.netlify.app/",
      icon: faExternalLinkAlt,
      category: "Projects",
      image: (
        <img
          src="./chatWebsite.jpg"
          alt="news website screenshot"
          className="projectScreenshot"
          onClick={() => openModal("./chatWebsite.jpg")}
        />
      ),
    },
    {
      title: "Movie Database Website",
      description:
        "Web app using ReactJS showing frontend skills. Used OMDB api.",
      linkText: "Live Demo",
      linkUrl: "https://simply-movies.netlify.app/",
      icon: faExternalLinkAlt,
      category: "Projects",
      image: (
        <img
          src="./movieWebsite.jpg"
          alt="news website screenshot"
          className="projectScreenshot"
          onClick={() => openModal("./movieWebsite.jpg")}
        />
      ),
    },
    {
      title: "Augmented Reality Home Decor App",
      description:
        "Built with Unity 3D and Vuforia plugin, an augmented reality-based application for projecting 3D models of furniture on the live camera feed.",
      linkText: null,
      linkUrl: null,
      icon: null,
      category: "Projects",
    },
    {
      title:
        "An analysis of Feature extraction and Classification Algorithms for Dangerous Object Detection",
      description:
        "Research paper comparing Bag of Words, HOG-SVM, CNN, and pre-trained Alexnet CNN algorithms for detection of knives in CCTV images.",
      linkText: "DOI",
      linkUrl: "https://doi.org/your-doi-link",
      icon: faFilePdf,
      category: "Research",
    },
  ];

  return (
    <div className="page-body">
      <div>
        <h4
          style={{
            borderBottom: "2px solid grey",
            width: "50%",
            marginBottom: "20px",
          }}
        >
          Projects
        </h4>
        {projectsData
          .filter((project) => project.category === "Projects")
          .map((project, index) => (
            <Card className="mb-4" style={{ border: "0px" }}>
              <Card.Body key={index} className="customCardProjects">
                <Card.Title style={{ color: "#307dc9" }}>
                  {project.title}
                </Card.Title>
                <Card.Text>
                  {project.description}
                  {project.image && (
                    <>
                      <br /> <br />
                      {project.image}
                    </>
                  )}
                </Card.Text>
                {project.linkUrl && (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-custom"
                  >
                    {project.icon && (
                      <FontAwesomeIcon icon={project.icon} className="me-2" />
                    )}
                    {project.linkText}
                  </a>
                )}
              </Card.Body>
            </Card>
          ))}

        <h4
          style={{
            borderBottom: "2px solid grey",
            width: "50%",
            marginBottom: "20px",
          }}
        >
          Research
        </h4>
        {projectsData
          .filter((project) => project.category === "Research")
          .map((project, index) => (
            <Card style={{ border: "0px" }} className="customCardProjects">
              <Card.Body key={index}>
                <Card.Title style={{ color: "#307dc9" }}>
                  {project.title}
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {project.linkUrl && (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-custom"
                  >
                    {project.icon && (
                      <FontAwesomeIcon icon={project.icon} className="me-2" />
                    )}
                    {project.linkText}
                  </a>
                )}
              </Card.Body>
            </Card>
          ))}
      </div>
      <ImageModal
        show={showModal}
        handleClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default ProjectsPage;
