import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'


function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>รับเขียนเว็บ สนใจสอบถามได้</p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>รับดีไซน์เว็บ ตัวอย่างดูได้ที่ด้านล่าง สนใจติดต่อได้</p>
        </div>
      </div>
    </div>
  )
}

export default Services