import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "../../styles/Testimonial.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialHeader}>
        <h3>Testimonial</h3>
        <h2>View Testimonials</h2>
      </div>
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialCard}>
          <FaQuoteLeft className={styles.quoteIcon} />
          <p>
            We have been thoroughly impressed with the services provided by CARE
            SERVICES AND CONSULTANTS LTD. Their expertise, commitment, and
            personalized approach have exceeded our expectations. From strategic
            planning to implementation, their team has been with us every step
            of the way, providing invaluable guidance and support. Their deep
            understanding of our business needs, combined with their
            professionalism and dedication, have made them an invaluable partner
            in our success. We highly recommend CARE SERVICES AND CONSULTANTS
            LTD to any business looking for comprehensive consulting and support
            services.
          </p>
          <h4>Jimmie Benedict</h4>
          <h4>MARKETING</h4>
        </div>
        <div className={styles.testimonialCard}>
          <FaQuoteLeft className={styles.quoteIcon} />
          <p>
            As a business owner, finding a trusted partner to provide guidance
            and support has been crucial to our success. CARE SERVICES AND
            CONSULTANTS LTD has been an invaluable resource, offering expert
            advice, strategic insights, and unparalleled support. Their team&apos;s
            industry knowledge, professionalism, and dedication have been
            instrumental in helping us navigate challenges and achieve our
            business goals. CARE SERVICES AND CONSULTANTS LTD has become an
            extension of our team, and we highly recommend their services to
            anyone seeking top-notch consulting and support for their business.
          </p>{" "}
          <h4>Sofia Athman</h4>
          <h4>SALES</h4>
        </div>
        <div className={styles.testimonialCard}>
          <FaQuoteLeft className={styles.quoteIcon} />
          <p>
            As a growing e-commerce business, we were in need of expert guidance
            to navigate the complex landscape of online sales. CARE SERVICES AND
            CONSULTANTS LTD has been an invaluable partner in our journey. Their
            in-depth knowledge of the e-commerce industry, strategic insights,
            and personalized approach have been instrumental in helping us
            overcome challenges and achieve our business objectives. Their team
            has consistently provided exceptional service, going above and
            beyond to deliver results that have exceeded our expectations. We&apos;re
            grateful for their professionalism, expertise, and commitment to our
            success. We highly recommend CARE SERVICES AND CONSULTANTS LTD for
            anyone seeking reliable and results-driven consulting services.
          </p>{" "}
          <h4>Cole Musili</h4>
          <h4>E-COMMERCE</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
