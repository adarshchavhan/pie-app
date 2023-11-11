import styles from './contact.module.scss'
import Form from './Form';

const Contact = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            <span className={styles.blueText}>Connect with</span>
          <span className={styles.orangeText}>Foreign language Experts</span></h2>

        

          <p className={styles.description}>
            Being pioneer in Multiilingual Business Services, we provide
            complete solutions for foreign languages. Our teams provide
            multilingual solutions that excatly match your requirement. Our
            experts understand that quality is most important in foreign
            language support hence our native & multi-industry expert provide
            superior solution on all of your business requirements.
          </p>
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.formHeading}>HAVE QUESTIONS?</h2>
          <p className={styles.formBrief}>Send us a Message</p>

          <Form/>
        </div>
      </div>
    </div>
  );
}

export default Contact