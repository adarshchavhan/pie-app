import Link from 'next/link'
import styles from './topbar.module.scss'
import Image from 'next/image'

const Banner = ({data}) => {
  return (
    <div className={styles.banner}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.brief}>{data.brief}</p>
                <div className={styles.div}>
                    <ul className={styles.listItems}>
                        {data.listItems.map((item, i)=> <li key={i}>{item}</li>)}
                    </ul>
                    <Link className={styles.link} href={data.link.url}>{data.link.text}</Link>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src={data.image.url} width={0} height={0} sizes='100%' alt='' priority/>
            </div>
      </div>
  )
}

export default Banner