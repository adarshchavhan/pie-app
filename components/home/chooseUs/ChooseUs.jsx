import styles from './chooseUs.module.scss'

const arr = [
  {
      title: '9hr',
      brief: 'Avarage time to resolve a cyber attack.'
  },
  {
      title: '3hr',
      brief: 'Avarage time to read and respond to an email.'
  },
  {
      title: '91%',
      brief: 'Call answered within 15 seconds.'
  }
]

const data = {
  heading: 'Why Choose Us',
  reasons: [
      {
          title: 'MULTILINGUAL BUSINESS SOLUTIONS',
          description: 'Being pioneer in Multiilingual Business Services, we provide complete solutions for foreign languages. Our teams provide multilingual solutions that excatly match your requirement. Our experts understand that quality is most important in foreign language support hence our native & multi-industry expert provide superior solution on all of your business requirements. With our Foreign Language Support you can reply on us for.'
      },
      {
          title: 'MULTILINGUAL BUSINESS SOLUTIONS',
          description: 'Being pioneer in Multiilingual Business Services, we provide complete solutions for foreign languages. Our teams provide multilingual solutions that excatly match your requirement. Our experts understand that quality is most important in foreign language support hence our native & multi-industry expert provide superior solution on all of your business requirements. With our Foreign Language Support you can reply on us for.'
      },
      {
          title: 'MULTILINGUAL BUSINESS SOLUTIONS',
          description: 'Being pioneer in Multiilingual Business Services, we provide complete solutions for foreign languages. Our teams provide multilingual solutions that excatly match your requirement. Our experts understand that quality is most important in foreign language support hence our native & multi-industry expert provide superior solution on all of your business requirements. With our Foreign Language Support you can reply on us for.'
      }
  ]
}

const ChooseUs = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.topContent}>
          <h2 className={styles.heading}>{data.heading}</h2>
          <ul className={styles.reasonCards}>
              {data.reasons.map((item, i)=> (
                  <div key={i} className={styles.reasonCard}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                  </div>
              ))}
          </ul>
      </div>

      <div className={styles.content}>
          <ul className={styles.list}>
              {arr.map((item, i)=> <li className={styles.item} key={i}>
                  <h2>{item.title}</h2>
                  <p>{item.brief}</p>
              </li>)}
          </ul>
      </div>
    </div>
  )
}

export default ChooseUs