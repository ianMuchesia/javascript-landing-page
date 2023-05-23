import React from 'react'
import styles from '../../styles/Team.module.css'
import {MdOutlineFacebook} from 'react-icons/md'
import {AiOutlineTwitter}  from 'react-icons/ai'
import Image from 'next/image'
const Team = () => {
  return (
    <section className={styles.TeamSection}>
    <div className={styles.teamHeader}>
        <h3>OUR STAFF</h3>
        <h2>Meet Our Team</h2>
    </div>
    <div className={styles.teamContainer}>
        <div className={styles.teamImageContainer}>
            <Image width={250} height={500}  src="/person1.jpg" alt="person" />
            <div className="imageDetails">
                <h4>Grace Kimangi</h4>
                <h4>Designer</h4>
                <div className="socialMedia">

                </div>
            </div>
        </div>
        <div className={styles.teamImageContainer}>
            <Image width={250} height={500} src="/person2.jpg" alt="person" />
            <div className="imageDetails">
                <h4>Able Mwakio</h4>
                <h4>Photographer</h4>
                <div className="socialMedia">

                </div>
            </div>
        </div>
        <div className={styles.teamImageContainer}>
            <Image width={250} height={500}  src="/person3.jpg" alt="person" />
            <div className="imageDetails">
                <h4>Ken Kimani</h4>
                <h4>Technician</h4>
                <div className="socialMedia">

                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Team