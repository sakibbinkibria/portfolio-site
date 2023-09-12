import React, {useEffect} from "react";
import "./AboutPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGamepad,
  faPlane,
  faHatWizard,
} from "@fortawesome/free-solid-svg-icons";

const AboutPage = ({ scrollToTop }) => {
  useEffect(()=>{
    scrollToTop();
  }, []);
  return (
    <div className="about-page-body">
      <div>
        <h2>About Me</h2>
        <p className="about-text">
          Hello,
          <br /> <br />
          I am Sakib, Software Engineer with over 4 years of experience. I am
          originally from Bangladesh, I have been living in the UK from the end
          of September 2022. I am here as a dependent with my wife, who is doing
          her DPhil at the University of Oxford.
          <br /> <br />I have a{" "}
          <strong>BSc degree in Computer Science and Engineering</strong> from
          one of the leading universities in Bangladesh. My core skills are:{" "}
          <strong>
            React.js (4+ years), Javascript (4+ years), Typescript (2+ years),
            NodeJS (3+ years), Jest, HTML, CSS, AWS, UNITY 3D, React Native,
            AngularJS, VuesJS, Android Development
          </strong>{" "}
          <br /> <br />
          My first professional development role was at a US based company
          called InsideMaps. I worked remotely from Bangladesh, alongside teams
          across US and Serbia. Although my main focus was on front end React
          development, I had full stack experience there, working with writing
          APIs, AWS, NodeJS. I also have worked with technologies like ThreeJS,
          angular etc.
          <br /> <br />
          Since January 2023, I have been a part of the Digital Development team
          of Hastings Direct, one of the leading insurance companies in the UK.
          In this team I am very front end focused, I am also learning new
          technologies like guidewire and azure. Writing unit tests with Jest.
          <br /> <br />
          In my personal time I also like building games with Unity.
          <br /> <br />
          I am always trying to learn and improve, with the current scenario of
          rapid changes in the development scene worldwide, I am always aware of
          the necessity to continuously learn and grow. I am aware and
          transparent about the things I don’t know or my shortcomings, but I
          always do my best to quickly and efficiently learn what I need to. I
          might not have every single requirement for this role at the moment,
          but if I get the opportunity I am confident that I will be able to
          start contributing with my experience and skill right away, and also
          familiarize myself with whatever I need to learn within a reasonable
          time.
          <br /> <br />
          Personally, I listen first and speak/do later, I never shy away from
          bringing my fresh ideas to my team’s attention if I think it might be
          beneficial, I have always had great communication and bonding with all
          of my very diverse colleagues from various parts of the world.
          <br /> <br />I love reading{" "}
          <FontAwesomeIcon icon={faBook} style={{ color: "orangered" }} />,{" "}
          gaming{" "}
          <FontAwesomeIcon icon={faGamepad} style={{ color: "orangered" }} />,{" "}
          travelling{" "}
          <FontAwesomeIcon icon={faPlane} style={{ color: "orangered" }} />, and
          am a huge potterhead{" "}
          <FontAwesomeIcon icon={faHatWizard} style={{ color: "orangered" }} />!
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
