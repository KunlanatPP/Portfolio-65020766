import React from 'react'
import styles from './Contact.module.css'
import { MdAlternateEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3> ติดต่อ</h3>
                <p>
                    <address>
                    43 หมู่9 <br />
                    ต.นาอ้อ อ.เมือง จ.เลย
                    </address>
                </p>
                <p><MdAlternateEmail/>65020766@up.ac.th</p>
                <p><SiWhatsapp/>0643394433</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">ชื่อ</label>
                            <input type="text" placeholder="eg. Somchai"></input>
                        </div>
                        <div>
                            <label htmlFor="last name">นามสกุล</label>
                            <input type="text" placeholder="eg. Jaidee"></input>
                        </div>
                    </div>
                    <label htmlFor="email address">อีเมล</label>
                    <input type="email" placeholder="eg. asdfsa@dddd.com" />
                    <label htmlFor="message">รายละเอียด</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
                    <button type='submit'>ยืนยัน</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact