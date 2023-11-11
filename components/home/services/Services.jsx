import styles from './services.module.scss'
import Link from 'next/link';

export const servicesData = {
  data: {
      attributes: {
          heading: 'Service We Provide',
          serviceCards: {
              data: [
              {
                  attributes: {
                      icon: {
                          attributes: {
                              name: 'flaticon-support'
                          }
                      },
                      title: 'LANGUAGE TRANSLATION',
                      description: 'Get your business processes transform with proficient call center support.',
                      url: '/'
                  }
              },
              {
                  attributes: {
                      icon: {
                          attributes: {
                              name: 'flaticon-support'
                          }
                      },
                      title: 'MULTILINGUAL TRANSCRIPTION',
                      description: 'Get your business processes transform with proficient call center support.',
                      url: '/'
                  }
              },
              {
                  attributes: {
                      icon: {
                          attributes: {
                              name: 'flaticon-support'
                          }
                      },
                      title: 'INTERPRETATION',
                      description: 'Get your business processes transform with proficient call center support.',
                      url: '/'
                  }
              },
              {
                  attributes: {
                      icon: {
                          attributes: {
                              name: 'flaticon-support'
                          }
                      },
                      title: 'VOICE OVER SERVICES',
                      description: 'Get your business processes transform with proficient call center support.',
                      url: '/'
                  }
              },
              {
                  attributes: {
                      icon: {
                          attributes: {
                              name: 'flaticon-support'
                          }
                      },
                      title: 'MULTILINGUAL RECRUITMENT',
                      description: 'Get your business processes transform with proficient call center support.',
                      url: '/'
                  }
              },
              {
                  attributes: {
                      icon: {
                          attributes: {
                              name: 'flaticon-support'
                          }
                      },
                      title: 'FOREIGN LANGUAGE SUBTITLING',
                      description: 'Get your business processes transform with proficient call center support.',
                      url: '/'
                  }
              },
              {
                  attributes: {
                      icon: {
                          attributes: {
                              name: 'flaticon-support'
                          }
                      },
                      title: 'APOSTILE SERVICES',
                      description: 'Get your business processes transform with proficient call center support.',
                      url: '/'
                  }
              },
              {
                  attributes: {
                      icon: {
                          attributes: {
                              name: 'flaticon-support'
                          }
                      },
                      title: 'FOREIGN LANGUAGE TESTING',
                      description: 'Get your business processes transform with proficient call center support.',
                      url: '/'
                  }
              }
          ]
          }
      }
  }
}

const Services = () => {
  const {data: {attributes}} = servicesData
  
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.heading}>{attributes.heading}</h1>

      <div className={styles.services}>

        {attributes.serviceCards.data.map((item,i) => (
          <div key={i}>
            <Link href={item.attributes.url}>
              <div className={styles.card}>
                  <div className={styles.icon}>
                  <i className={`fi ${item.attributes.icon.attributes.name}`}></i>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>{item.attributes.title}</div>
                    <div className={styles.desc}>{item.attributes.description}</div>
                    <div className={styles.link}>
                      <i className='flaticon-send-1' />
                    </div>
                  </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Services