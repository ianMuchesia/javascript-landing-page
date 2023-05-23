import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const response = await fetch("https://formsubmit.co/info@careservices.co.ke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      if (response.ok) {
        toast.success('sent successfully')
        setEmail("")
        
      }
    } catch (error) {
      toast.error("something wrong happened, try again later")
      console.log(error)
    }
  
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.address}>
          <Image
            src="/LOGO.jpg"
            alt="logo"
            width={67}
            height={77}
            className={styles.logo}
          />

          <h3>CARE SERVICES AND CONSULTANTS LTD</h3>
        </div>
        <div className={styles.usefulLinks}>
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link href="/contact" className={styles.footerLinks}>
                Contact Info
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles.footerLinks}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.footerLinks}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <form className={styles.signUp} onSubmit={handleSubmit}>
          <p>Keep me up to date with content and updates</p>
          <input
            type="email"
            value={email}
            placeholder="Enter Your email address"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <button>submit</button>
        </form>
      </div>
      <div className={styles.groundFooter}>
        &#169; {new Date().getFullYear()}CARE SERVICES AND CONSULTANTS LTD
      </div>
    </footer>
  );
};

export default Footer;
