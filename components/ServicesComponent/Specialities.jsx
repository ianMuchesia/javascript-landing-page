import React from "react";
import styles from "../../styles/Service.module.css";

const Specialities = () => {
  return (
    <section className={styles.specialitiesSection}>
      <div className={styles.specialitiesHeader}>
        <h3>SPECIALTIES</h3>
        <h2>We Make Your Ideas Become True</h2>
        <p>
          Unlock the full potential of your project with our comprehensive range
          of specialized services, backed by our extensive expertise and
          experience in the industry.
        </p>
        </div>
        <div className={styles.specialitiesList}>
          <h3>Our Specialities</h3>
          <ul>
            <li>
              <span>&#10003;</span> transport services
            </li>
            <li>
              <span>&#10003;</span> Fire and safety training and consultancy
            </li>
            <li>
              <span>&#10003;</span> training and capacity building
            </li>
            <li>
              <span>&#10003;</span> 0sh Training and consultancy
            </li>
            <li>
              <span>&#10003;</span> cleaning services
            </li>
            <li>
              <span>&#10003;</span> Car Wash  Services
            </li>
            <li>
              <span>&#10003;</span> Gardening and landscaping
            </li>
          </ul>
        </div>
     
    </section>
  );
};

export default Specialities;
