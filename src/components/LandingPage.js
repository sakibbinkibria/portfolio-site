// src/components/LandingPageBody.js
import React, {useState, useEffect} from "react";
import "./LandingPage.css"; // You can create this CSS file for additional styling
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const LandingPage = ({scrollToTop}) => {
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const updateWindowWidth = () => {
      setIsMobileDevice(window.innerWidth <= 768);
    }
    window.addEventListener('resize', updateWindowWidth);
    scrollToTop();

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    }
    
  }, []);

  const linkedinUrl = "https://www.linkedin.com/in/sakib-bin-kibria/";
  const githubUrl = "https://github.com/sakibbinkibria";
  const emailUrl = "mailto:sakibbinkibria@gmail.com";

  const contactLogos = () => {
    return (
      <Row className="justify-content-center footer-contacts">
        <Col xs={isMobileDevice ? 3 : 1}>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="orangered" />
          </a>
        </Col>
        <Col xs={isMobileDevice ? 3 : 1}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" color="orangered" />
          </a>
        </Col>
        <Col xs={isMobileDevice ? 3 : 1}>
          <a href={emailUrl}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="orangered" />
          </a>
        </Col>
      </Row>
    );
  }
  return (
    <div className="landing-page-body">
      {isMobileDevice ? (
        <Col className="justify-content-center text-center" style={{marginTop:"62px"}}>
          <Col xs={12} className="text-center justify-content-center">
            <h1>Hi, I'm Sakib</h1>
            <img src="/avatar.png" className="avatar-image" />
            <h4>
              Welcome to my website!
              <br /> I'm a web developer specializing in front end. Please look
              around to know more about me, thanks!
            </h4>
          </Col>
          {contactLogos()}
        </Col>
      ) : (
        <Col className="justify-content-center text-center" style={{marginTop:"62px"}}>
          <Row className="justify-content-center">
            <Col lg={6} className="text-start text-box">
              <h1>Hi, I'm Sakib</h1>
              <h4>
                Welcome to my website!
                <br /> I'm a web developer specializing in front end. Please
                look around to know more about me, thanks!
              </h4>
            </Col>

            <Col lg={4}>
              <img
                src="/avatar.png"
                width="300"
                height="300"
                className="avatar-image"
              />
            </Col>
          </Row>
          {contactLogos()}
        </Col>
      )}
    </div>
  );
};

export default LandingPage;
