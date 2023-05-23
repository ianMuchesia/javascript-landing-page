import React from 'react'
import styles from '../../styles/Portfolio.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Portfolio = () => {
  return (
    <section className={styles.portfolioSection}>
        <div className={styles.headerPortfolio}>
            <h3>portfolio</h3>
            <h2>View Our Case Study</h2>
        </div>
        <div className={styles.portfolioContainer}>
            <div>
            <div className={styles.imagePortfolioContainer}>
                <Image width={400} height={700} src="/gardening.jpg" alt="gardenin" />
                
                <div className={styles.absoluteContainer}>
                <h3>Complementary</h3>
                <h5>Gardening</h5>
                </div>
            </div>
            
            </div>
            <div>
            <div className={styles.imagePortfolioContainer}>
                <Image width={400} height={500} src="/carWash.jpg" alt="car wash services" />
                
                <div className={styles.absoluteContainer}>
                <h3>Elegant</h3>
                <h5>Car Wash</h5>
                </div>
            </div>
           
           {/*  <div className={styles.flexContainer}>
            <div className={`${styles.imagePortfolioContainer}`}>
                <img src="/cleaning services.jpg" alt="cleaning services" />
                
                <div className={styles.absoluteContainer}>
                <h3>Simple and Effective</h3>
                <h5>Cleaning Services</h5>
                </div>
            </div>
           {/*  <div className={styles.imagePortfolioContainer}>
                <img src="/fireTraining.jpg" alt="fireTraining" />
                     <div className={styles.absoluteContainer}><h3>Make difference</h3>
                <h5>Fire Training</h5></div>
            </div> 
           <div className={`${styles.imagePortfolioContainer}`}>
                <img src="/TransportServices.jpg" alt="transport services" className={`${styles.containerOne}`}/>
               
                     <div className={styles.absoluteContainer}><h3>Make difference</h3>
                <h5>Transport Services</h5></div>
            </div>
            </div> */}
            </div>
        </div>
       <Link href='/services'><button>VIEW ALL PROJECTS</button></Link> 
    </section>
  )
}

export default Portfolio