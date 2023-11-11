import styles from './pricing.module.scss'
import Image from 'next/image';

const data = {
  heading: 'Know Our Pricing',
  description: 'Being pioneer in Multiilingual Business Services, we provide complete solutions for foreign languages. Our teams provide multilingual solutions that excatly match your requirement. Our experts understand that quality is most important in foreign language support hence our native & multi-industry expert provide superior solution on all of your business requirements.',
  url: '/',
  backgroundImg: '/imgs/pricing.png'
}

const Pricing = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgCotainer}>
                <Image className={styles.bgImg} src={data.backgroundImg} alt="" width={0} height={0} sizes='100%' priority />
        </div>
        <div className={styles.content}>
            <div className={styles.div}>
                <h2 className={styles.heading}>{data.heading}</h2>
                <p className={styles.description}>{data.description}</p>
                <a className={styles.btn} href={data.url}>Know More</a>
            </div>
        </div>
    </div>
  )
}

export default Pricing