import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleCloseMenu=()=>{
    setToggle(false)
  }

  return (
    <header className={styles.navBar}>
      <Image
        src="/LOGO.jpg"
        alt="logo"
        width={67}
        height={77}
        className={styles.logo}
      />
      {!toggle && (
        <AiOutlineMenu
          className={styles.menuBar}
          onClick={() => setToggle((prevToggle) => !prevToggle)}
        />
      )}

      <nav className={toggle ? styles.links : styles.linksHide}>
        <ul className={styles.navLinks}>
          <li onClick={() => setToggle((prevToggle) => !prevToggle)}>
            <span>
              <AiOutlineClose className={styles.menuBarClose} />
            </span>
          </li>

          <li>
            <Link href="/" className={styles.link} onClick={handleCloseMenu}>
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}
            onClick={handleCloseMenu}>
              <h3>About</h3>
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.link}
            onClick={handleCloseMenu}>
              <h3>Services</h3>
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}
            onClick={handleCloseMenu}>
              <h3>Contact</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
