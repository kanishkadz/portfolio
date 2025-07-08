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
            I’m Kanishka Anand, a passionate and goal-oriented full stack developer, 
            currently pursuing my Bachelor of Technology in Computer Science and Engineering 
            at Asansol Engineering College. My academic journey began at Priyadarshini Public School, 
            Kulti, where I laid the foundation of my education and developed a curiosity for technology and innovation.
          </StyledParagraph>
          <StyledParagraph>
            With a strong foundation in frontend and backend web development, I specialize in building scalable,
             efficient, and user-centric web applications. I actively work with modern web technologies including HTML, 
             CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, and tools like Git, GitHub, and Visual Studio Code.
          </StyledParagraph>
          <StyledParagraph>
            My interest in development goes hand-in-hand with creativity. I have hands-on experience with multimedia tools 
            like DaVinci Resolve and Adobe Premiere Pro, enabling me to integrate visual storytelling with technical functionality.
          </StyledParagraph>
          <StyledParagraph>
            I am a strong believer in continuous learning and self-improvement. I enjoy collaborating with diverse teams, problem-solving 
            through code, and turning complex challenges into simple, intuitive solutions. Whether it's building sleek user interfaces or 
            optimizing backend performance, I strive to bring ideas to life with clarity and precision.
          </StyledParagraph>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;