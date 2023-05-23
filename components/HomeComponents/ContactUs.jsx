import React from 'react'
import styles from '../../styles/ContactUs.module.css'
import Link from 'next/link'
const ContactUs = () => {
  return (
  <section className={styles.contactUsSection}>
    <div className={styles.innerContainerContactUs}>

    <h4>LETS START</h4>
    <h1>Start Your New Project</h1>
    <p>our job goes beyond just imagining and creating beautiful digital design concepts. creating beautiful Our job is also to make...</p>
<Link href="/contact" className={styles.contactLink}>
<h2>Contact us &gt; </h2>
</Link>
  
    </div>
  </section>
  )
}

export default ContactUs