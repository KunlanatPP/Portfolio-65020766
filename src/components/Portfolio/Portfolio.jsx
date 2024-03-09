import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="image/travel.jpg" alt="" />
            <p>ออกแบบแอปท่องเที่ยว</p>
        </div>
        <div className={styles.port_items}>
            <img src="image/ex.jpg" alt="" />
            <p>ออกแบบแอปเปรียบเทียบ</p>
        </div>  
        </div>
      </div>
  )
}

export default Portfolio