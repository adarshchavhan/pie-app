"use client"

import styles from './enquryForm.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


const MainForm = ({showFiles}) => {
  const [error, setError] = useState();
  const [data, setData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    requirements: '',
    files: []
  });

  const handleChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    });
  }

  const handleFileChange = (e) => {
    // check user uploaded file size 
    const fileSizeError = [...e.target.files].some(item => Math.round(item.size/1024) >= 10240);

    // check user uploaded duplicate file
    const isDuplicateFile = [...e.target.files].some(item => data.files.some(inner => 
      inner.name === item.name && inner.size === item.size && inner.type === item.type 
    ));

    // check user files length
    const filesLimitError = data.files.length >= 4 || e.target.files.length >= 4;

    if(fileSizeError){
      setError('* File size shold be less than equal to 10MB.')
    }else if(isDuplicateFile){
      setError('* You can not upload same file multiple times.')
    }else if(filesLimitError){
      setError('* You can upload maximum 4 images.');
    }else{
      setData({...data, files: [...data.files, ...e.target.files]})
      setError(" ")
    }
  }

  const handleRemoveFile = (key) => {
    setData({...data, files: data.files.filter((item, i)=> i !== key)});
    data.files.length <=0 && setError('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" className={styles.input} name='name' value={data.email} onChange={handleChange} placeholder='Name' required />
      <input type="email" className={styles.input} name='email' value={data.email} onChange={handleChange} placeholder='Email' required />
      <span className={styles.span}>
        <button disabled>IN</button>
        <input type="number" className={styles.input} name='phone' value={data.phone} onChange={handleChange} placeholder='Phone' required />
      </span>
      <textarea className={styles.textarea} cols="30" rows="7" name='requirements' value={data.requirements} onChange={handleChange} placeholder='Write requirements' required></textarea>
      {showFiles && <div className={styles.filesDiv}>
        <input type="file" id="fileInput" multiple onChange={handleFileChange} />
        <div className={styles.labelWrapper}>
          <label htmlFor="fileInput">
            Upload Files
          </label>
          <p>Max 4 files <br />(10MB each)</p>
        </div>


        {data.files.length > 0 && <div className={styles.files}>
          {data.files.map((file, i) => <div key={i} className={styles.file}>
            <div className={styles.icon}>
              <Image src={'/imgs/assets/file.png'} alt="" width={30} height={30} />
            </div>

            <div className={styles.text}>
              <div>
                <p>{file.name.length > 10 ? `${file.name.slice(0, 10)}...` : file.name}</p>
                <b>{Math.floor(file.size / 1024)}kb</b>
              </div>
              <span className={styles.bar}>
                <p>100%</p>
              </span>
            </div>

            <div className={styles.btns}>
              <button onClick={() => handleRemoveFile(i)}>×</button>
            </div>
          </div>)}
        </div>}


      </div>}
      <button className={styles.button} type='submit'>➤ SEND</button>
      {error && <p className={styles.error}>{error}</p>}
      <p className={styles.text}>We respect your privacy <Link href="/">Policy</Link></p>
    </form>
  )
}


const EnquryForm = ({showFiles=true, showText=true, solidTheme=true}) => {
  return (
    <div className={`${styles.formContainer} ${solidTheme && styles.formContainer1}`}>
      {showText && <>
        <h2 className={styles.formHeading}>Request a <span>FREE QUOTE</span></h2>
        <p className={styles.formBrief}>Partner with Multilingual Experts!</p>
        <p className={styles.formBrief}>Save your cost within 12 Hours.</p>
      </>}
      <MainForm {...{showFiles}}/>
    </div>
  )
}

export default EnquryForm