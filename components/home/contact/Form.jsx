"use client";
import React, { useState } from 'react'
import styles from './contact.module.scss'
import Link from 'next/link';

const Form = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        requirements: ''
      });
    
      const handleChange = (e) => {
        setData({
          ...data, [e.target.name]: e.target.value
        });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
      }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <input type="text" className={styles.input} name='name' value={data.name} onChange={handleChange} placeholder="Name" />
              <span className={styles.span}>
                <button disabled>IN</button>
                <input
                  type="number"
                  className={styles.input}
                  placeholder="Phone"
                  name='phone'
                  value={data.phone}
                  onChange={handleChange}
                />
              </span>
            </div>
            <input type="email" className={styles.input} name='email' value={data.email} onChange={handleChange} placeholder="Email*" />
            <textarea
              className={styles.textarea}
              cols="30"
              rows="7"
              placeholder="Tell Us About Project*"
              name='requirements'
              value={data.requirements}
              onChange={handleChange}
            ></textarea>

            <button type="submit" name="submit" className={styles.button}>
              <i className="fa fa-paper-plane"></i> Get in Touch
            </button>
            <p className={styles.text}>We respect your privacy. Read our <Link href="/">policy</Link></p>
          </form>
  )
}

export default Form