import styles from './caseStudies..module.scss'
import Image from 'next/image'
import Link from 'next/link'


export const caseStudies = {
  heading: 'CASE STUDIES',
  bigText: 'Proud of our work, but we’re even more proud of the results.',
  stories: [
      {
          img:'/imgs/story-1.png',
          title: 'Workspace cloud business',
          brief: 'Migrated them to the Cloud, and provided Office 365 management.',
          url: '/'
      },
      {
          img:'/imgs/story-2.png',
          title: 'Workspace cloud business',
          brief: 'As a new company stemming from an establisheAs a new company stemming from an establisheAs a new company stemming from an established accounting firm.',
          url: '/'
      },
      {
          img:'/imgs/story-3.png',
          title: 'Workspace cloud business',
          brief: 'As a new company stemming from an establishAs a new company stemming from an establisheAs a new company stemming from an establisheed accounting firm.',
          url: '/'
      }
  ]
}

export const CaseStudies = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.topLeft}>
                <h4 className={styles.heading}>{caseStudies.heading}</h4>
                <h2 className={styles.bigText}>{caseStudies.bigText}</h2>
            </div>
            <div className={styles.topRight}>
                <div>
                    <p>Read our case studies to find out how we have helped our clients succeed.</p>
                    <Link href='/'>ALL CASES</Link>
                </div>
            </div>
        </div>

        <div className={styles.stories}>
            <div className={styles.storiesLeft}>
                    <div className={styles.storyBig}>
                        <Image src={caseStudies.stories[0].img} width={0} height={0} sizes='100%' alt="" priority />
                        <div className={styles.storyBigText}>
                            <h3>{caseStudies.stories[0].title}</h3>
                            <p>{caseStudies.stories[0].brief}</p>
                            <Link href={caseStudies.stories[0].url}>Find out More</Link>
                        </div>
                    </div>
            </div>
            <div className={styles.storiesRight}>
                {caseStudies.stories.filter((item, i)=> i!==0).map((item, i)=> (
                    <Link href='/' key={i}>
                        <div className={styles.story} key={i}>
                            <div className={styles.storyText}>
                                <h3>{item.title}</h3>
                                <p>{item.brief}</p>
                            </div>
                            <div className={styles.storyImgWrapper}>
                                <Image className={styles.storyImg} src={item.img} width={0} height={0} sizes='100%' alt="" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}
