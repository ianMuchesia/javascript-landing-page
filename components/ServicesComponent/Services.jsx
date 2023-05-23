import React from "react";
import styles from "../../src/styles/Service.module.css";
import {
  MdEmojiTransportation,
  MdModelTraining,
  MdLandscape,
  MdLocalCarWash,
  MdOutlineCleaningServices,
  MdLocalFireDepartment,
} from "react-icons/md";
const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesHeader}>
        <h3>SERVICES</h3>
        <h2>Discover Our Services</h2>
      </div>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesCard}>
          <MdEmojiTransportation size={150} />
          <h3>transport services</h3>
          <p>
            Experience Unmatched Excellence in Transportation and Services -
            Your Trusted Partner for Reliable Transportation Solutions and a
            Comprehensive Range of Expert Services, Catered Specifically to Your
            Needs.
          </p>
        </div>

        <div className={styles.servicesCard}>
          <MdModelTraining size={150} />
          <h3>Training and capacity building</h3>
          <p>
            Unlock Your Potential - Elevate Your Skills and Knowledge with our
            Comprehensive Training and Capacity Building Services, Designed to
            Empower You for Success in Your Industry.
          </p>
        </div>

        <div className={styles.servicesCard}>
          <MdLocalFireDepartment size={150} />
          <h3>Fire and safety training</h3>
          <p>
            Equip Yourself with Essential Fire Safety Skills - Our Specialized
            Fire Training Programs Offer Comprehensive Instruction and Practical
            Experience to Prepare You for Any Emergency Situation.
          </p>
        </div>

        <div className={styles.servicesCard}>
          <MdOutlineCleaningServices size={150} />
          <h3>cleaning services</h3>
          <p>
            Sparkling Clean Solutions for Your Home or Business - Our
            Professional Cleaning Services Offer a Wide Range of Expertise to
            Keep Your Space Fresh, Sanitized, and Spotless.
          </p>
        </div>

        <div className={styles.servicesCard}>
          <MdLocalCarWash size={150} />
          <h3>Car wash</h3>
          <p>
            Revitalize Your Ride with Our Premier Car Wash Services - Leave Your
            Vehicle Looking Pristine and Shiny, Inside and Out, with Our Skilled
            Team and State-of-the-Art Equipment.
          </p>
        </div>

        <div className={styles.servicesCard}>
          <MdLandscape size={150} />
          <h3>Gardening and Landscaping</h3>
          <p>
            Transform Your Outdoor Space with Our Expert Gardening and
            Landscaping Services - From Stunning Garden Designs to Professional
            Lawn Care, We Bring Nature&apos;s Beauty to Your Home or Business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
