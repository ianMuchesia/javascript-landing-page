import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "../../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
     
      <div className={styles.heroContainer}>
        <div className={styles.innerHeroContainer}>
        <Fade delay={2} triggerOnce={true}>
        <h1 className={styles.heroTitle}>CARE SERVICES AND CONSULTANTS LTD</h1>
        <p className={styles.heroHeader}>
          {" "}
          Providing exceptional solutions for your transportation, training,
          consultancy, and cleaning needs.
        </p>
        </Fade>
        </div>
      </div>
  
    </section>
  );
};

export default Hero;
