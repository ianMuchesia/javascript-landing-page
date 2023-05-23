import React from 'react'
import styles from '../../styles/AboutUs.module.css'
import Link from 'next/link'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
        <div className={styles.aboutUsContent}>
            <div className={styles.aboutUsHeader}>
                <h3>ABOUT US</h3>
                <h2>Discover The World Of Business</h2>
            </div>
            <p>
            Our mission is to empower individuals and businesses with comprehensive and innovative solutions, offering top-notch services in transportation, training, consultancy, cleaning, car wash, and gardening. We strive to deliver excellence through our unique approach, leveraging our expertise and dedication to exceed customer expectations.
            </p>
            <Link href="/about"><button>READ MORE</button></Link>
            
            </div>
            <div className={styles.imageAboutUsContainer}>
                <Image width={700} height={500} src='/about.jpg' className={styles.imageAboutUs} alt="about"/> 
            </div>
    </section>
  )
}

export default AboutUs