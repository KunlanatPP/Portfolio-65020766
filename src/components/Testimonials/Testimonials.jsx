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
          <img
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>นายธรรมรัตน์ ธรรมมา</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;