import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutDetailsContainer>
  <StyledParagraph>
    My name is Kanishka Anand, currently pursuing a Bachelor of Technology 
    in Computer Science and Engineering at Asansol Engineering College. 
    I am a dedicated full stack developer with a strong interest in building 
    efficient, scalable, and user-centric web applications.
  </StyledParagraph>
  <StyledParagraph>
    My technical skill set includes HTML, CSS, JavaScript, React.js, Tailwind CSS, 
    Bootstrap, Git, GitHub, and Visual Studio Code. I also have experience with 
    creative tools like DaVinci Resolve and Adobe Premiere Pro, which complement 
    my development work with multimedia capabilities.
  </StyledParagraph>
  <StyledParagraph>
    I have a strong drive to constantly learn and improve, and I enjoy collaborating 
    with others to solve problems and bring ideas to life.
  </StyledParagraph>
  {/* <Resume>
    <ResumeLink
      href={resume}
      icon={downloadIcon}
      download="resume-jericho-bantiquete"
    >
      Download Resume
    </ResumeLink>
  </Resume> */}
</AboutDetailsContainer>

      </AboutContent>
    </StyledAbout>
  );
};

export default About;