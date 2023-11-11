import styles from './video.module.scss'
import Image from 'next/image';

export const videoData  = {
  data: {
      attributes: {
          heading: 'Who We Are',
          description: `<p data-v-103f9408=""><p data-v-103f9408="">PlE Multilingual is the ultimate answer to meet your business service demand. Our fast and cost-effective processes make us a top choice among the clients irrespective of geographical boundaries. We follow up-to-date computing environment and methodology, which smoothly converts your project concepts into reality. Whether it is language translation, language transcription or any other business service, we ensure efficiency, professionalism and quality in more than 150+ languages. Most importantly, we understand that you deserve the best and thus ensure that your project undergo with multi quality stage to deliver <a data-v-103f9408="" href="/market-research-services/supply-chain-intelligence/" class=""><span data-v-103f9408="" class="color-special bold">excellent quality</span></a>. </p>&nbsp;with Multilingual Business Service Company to meet your business requirements with foreign language expertise. Partnering with Foreign Language Service company will not just cut your cost but will also helop on a variety of assignment where foreign language expertise is required. Foreign Language Service company will not just cut your cost but will also help on a variety of assignment where foreign language expertise is required. Foreign Language outsourcing company will help to open your business in new geography. Add foreign language services in your expertise and Leverage your business with us. </p>`,
          videoId: '7GZ0qHTUAuo'
      }
  }
}

const Video = () => {
  const {data} = videoData;

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{data.attributes.heading}</h1>
          <div className={styles.description} dangerouslySetInnerHTML={{__html: data.attributes.description}}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.videoWrapper}>
            <Image className={styles.videoBg1} src='/imgs/videoBg.png' alt="" width={100} height={100}/>
            <Image className={styles.videoBg2} src='/imgs/videoBg.png' alt="" width={100} height={100}/>
            <div className={styles.video}>
              <iframe 
                className={styles.video}
                src={`https://youtube.com/embed/${data.attributes?.videoId}?rel=0`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video