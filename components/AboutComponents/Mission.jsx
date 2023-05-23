import React from 'react'
import styles from "../../styles/About.module.css";
import Image from 'next/image';
const Mission = () => {
  return (
    <section className={styles.aboutUsSection}>
    <div className={styles.aboutUsContent}>
        <div className={styles.aboutUsHeader}>
            <h3>WHO WE ARE</h3>
            <h2>We Make Your Ideas Become True</h2>
        </div>
        <p>
        Our mission is to empower individuals and businesses with comprehensive and innovative solutions, offering top-notch services in transportation, training, consultancy, cleaning, car wash, and gardening. We strive to deliver excellence through our unique approach, leveraging our expertise and dedication to exceed customer expectations.
        </p>
        
        </div>
        <div className={styles.imageAboutUsContainer}>
            <Image src='/about.jpg' className={styles.imageAboutUs} height={300} width={600}alt="about"/> 
        </div>
</section>
  )
}

export default Mission