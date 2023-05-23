import React from "react";
import styles from "../../src/styles/About.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.innerHeroContainer}>
        <h1 className={styles.heroTitle}>ABOUT US</h1>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;