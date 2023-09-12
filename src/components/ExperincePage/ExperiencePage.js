import React, {useEffect} from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./ExperiencePage.css"; // Import the CSS file

const ExperiencePage = ({scrollToTop}) => {
  const experienceData = [
    {
      company: "Hastings Direct",
      position: "Digital Developer",
      date: "January 2023 - Present",
      areaOfWork:
        "The main product is insurance for car, home, etc. I mainly work as a front end developer focusing on various client-facing tools, dashboards, etc. Have contributed to complex web apps for customers to re-rate and renew their insurance policies. Mostly work with ReactJs, JavaScript, Jest. Also have experience with Azure environment, Guidewire.",
      responsibilities: [
        "Write and maintain production level frontend code for various new and existing web apps and bug fixing.",
        "Writing documentation and unit tests.",
        "Work with UI/UX teams for design inputs.",
        "Sync with backend, iOS, and android developers for proper functioning of various features.",
      ]
    },
    {
      company: "InsideMaps Inc.",
      position: "Software Engineer",
      date: "Aug 2019 – Dec 2022",
      areaOfWork:
        "Products I worked on were 3D Virtual Tours, 3D models, Floor plans etc for real estate companies generated from iPhone images. I mainly worked as a front end developer focusing on various internal operational tools, dashboards, etc. Mostly worked with ReactJs, Typescript, NodeJs. Also have experience with Angular, ThreeJs, AWS.",
      responsibilities: [
        "Write and maintain production level frontend code for various new and existing web apps and bug fixing.",
        "Work with UI/UX teams for design inputs.",
        "Sync with backend, iOS, and ML developers for proper functioning of various features.",
        "Excellent communication between diverse teams based in USA, Serbia, and Bangladesh.",
      ],
    },
    {
      company: "IECE Department, North South University",
      position: "Lab-Instructor (Part-time)",
      date: "Summer 2018 - Summer 2019",
      responsibilities: [
        "Conducting and grading lab classes.",
        "Preparing lab manuals.",
        "Aiding Faculties with conducting exams, grading.",
      ],
    },
  ];

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="page-body">
      {experienceData.map((experience, index) => (
        <Row
          key={index}
          className="mb-4"
          style={{ width: "100%", maxWidth: "800px" }}
        >
          <Col>
            <Card className="customCard">
              <Card.Body>
                <Card.Title className="company-name larger-font">
                  <a href="https://www.hastingsdirect.com/" target="_blank">
                    {experience.company}
                  </a>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {experience.position}
                </Card.Subtitle>
                <Card.Text className="date">{experience.date}</Card.Text>
                <Card.Text>{experience.areaOfWork}</Card.Text>
                <Card.Title className="key-responsibilities smaller-font">
                  Key Responsibilities:
                </Card.Title>
                <ul>
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ExperiencePage;
