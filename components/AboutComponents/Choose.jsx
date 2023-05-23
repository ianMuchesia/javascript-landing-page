import React from "react";
import {AiOutlineCustomerService} from 'react-icons/ai'
import {IoPricetagsSharp} from 'react-icons/io5'
import {SiExpertsexchange} from 'react-icons/si'
import styles from "../../styles/About.module.css";

const Choose = () => {
  return (
    <section className={styles.chooseSection}>
         
        <div className={styles.aboutUsHeader}>
            <h3>FEATURE</h3>
            <h2>Why Choose us?</h2>
        </div>
      <div className={styles.chooseContainer}>
        <div className={styles.chooseCard}>
            <AiOutlineCustomerService  size={200} color={'#0258fc'}/>
            <div className={styles.chooseContent}>
                <h2>Customer Service and Support</h2>
                <p>Choose us for unparalleled customer service and support. Our dedicated team provides prompt, friendly, and knowledgeable assistance at every step, ensuring your satisfaction. Count on us for reliable and personalized attention that exceeds your expectations.</p>
            </div>
        </div>
        <div className={styles.chooseCard}>
            <IoPricetagsSharp size={200} color={'#0258fc'} />
            <div className={styles.chooseContent}>
                <h2>Competitive Pricing </h2>
                <p>Enjoy competitive pricing that offers exceptional value for our services, including zero shillings for training and consultancy. We strive to provide cost-effective solutions without compromising on quality, giving you the best return on your investment</p>
            </div>
        </div>
        <div className={styles.chooseCard}>
            <SiExpertsexchange size={200} color={'#0258fc'}/>
            <div className={styles.chooseContent}>
                <h2>Expertise and Experience</h2>
                <p>Benefit from our extensive expertise and experience in the industry. Our team of seasoned professionals is skilled and knowledgeable, ensuring top-notch service delivery and optimal results for your needs.</p>
            </div>
        </div>
      </div>
    </section>
  );
};
/* className={styles.chooseIcon} */

export default Choose;
