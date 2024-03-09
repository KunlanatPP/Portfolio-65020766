import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            อาจารย์มหาวิทยาลัยพะเยา ประจำรายวิชาเว็ปแอปพลิเคชัน
          </p>
          <img src="image/aj.png" alt=""/>
          <h4>นายธรรมรัตน์ ธรรมมา</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;