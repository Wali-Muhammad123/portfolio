import React from 'react';
import styles from './AboutMe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>
        As a Full Stack Engineer with over 3 years of experience, I specialize in developing comprehensive, scalable, and user-friendly applications using a diverse set of technologies. My expertise includes Python backend development, React Native for mobile applications, and Next.js for server-side rendered web applications.
      </p>
      <p className={styles.description}>
        I am adept at leveraging modern frameworks and libraries to deliver seamless user experiences and efficient server-side operations. My proficiency in cloud technologies and Docker ensures that I can build, deploy, and manage applications in scalable and robust environments.
      </p>
      <p className={styles.description}>
        Throughout my career, I have successfully contributed to multiple projects, ranging from developing responsive web applications to designing RESTful APIs and integrating third-party services. My strong problem-solving skills and attention to detail ensure that I can troubleshoot and optimize code for performance and scalability.
      </p>
      <p className={styles.description}>
        I have extensive experience with:
      </p>
      <ul className={styles.experienceList}>
        <li><strong>Backend Development:</strong> Using Python frameworks such as Django and Flask to build robust and secure server-side applications.</li>
        <li><strong>Frontend Development:</strong> Creating dynamic and responsive user interfaces with React Native and Next.js.</li>
        <li><strong>Cloud Technologies:</strong> Implementing cloud-based solutions using AWS, Azure, and Google Cloud Platform to ensure high availability and scalability.</li>
        <li><strong>Containerization and Deployment:</strong> Utilizing Docker for containerization, orchestrating microservices, and managing CI/CD pipelines.</li>
      </ul>
      <p className={styles.description}>
        I am well-versed in agile methodologies and thrive in collaborative environments where I can contribute to the full development lifecycle, from initial concept to deployment and maintenance. My ability to adapt to new technologies and continuously improve my skills has enabled me to stay ahead in the ever-evolving field of software development.
      </p>
      <p className={styles.description}>
        Passionate about creating innovative solutions, I am committed to delivering high-quality code and enhancing the overall user experience. Whether working independently or as part of a team, I am dedicated to achieving project goals and driving business success through effective and efficient software engineering practices.
      </p>
      <a href="/resume.pdf" download className={styles.downloadButton}>
      <FontAwesomeIcon icon={faDownload} className={styles.icon} /> Download My Resume
      </a>
    </div>
  );
};

export default AboutMe;
