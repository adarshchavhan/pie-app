import styles from './countries.module.scss'
import Image from 'next/image'

export const countryData = {
  data: {
      attributes: {
          heading: 'Countires That We Serve',
          description: 'Browse Case Studies to find out how our Multiilingual Virtual Assistants have helped our global customers to exceed their expectations. Browse Case Studies to find out how our Multilingual Virtual Assistants have helped our global customers to exceed their expectations. Browse Case Studies to find out how our Multilingual Virtual Assistants have helped our global customers to exceed their expectations.',
          img: {
              data: {
                  attributes: {
                      url: '/imgs/countries.png'
                  }
              }
          },
          countries: [
              {
                  name: 'Chinese',
                  icon: 'flag-china'
              },
              {
                name: 'German',
                icon: 'flag-germany'
              },
              {
                name: 'Hebrew',
                icon: 'flag-heard-island'
              },
              {
                name: 'Indonesian',
                icon: 'flag-indonesia'
              },
              {
                name: 'Portuguese',
                icon: 'flag-portugal'
              },
              {
                name: 'Arabic',
                icon: 'flag-aruba'
              },
              {
                name: 'Thai',
                icon: 'flag-thailand'
              },
              {
                name: 'French',
                icon: 'flag-french-guiana'
              },
              {
                name: 'Japanese',
                icon: 'flag-japan'
              },
              {
                name: 'Korean',
                icon: 'flag-south-korea'
              },
              {
                name: 'Hungarian',
                icon: 'flag-hungary'
              },
              {
                name: 'Norwegian',
                icon: 'flag-norway'
              },
              {
                name: 'Turkish',
                icon: 'flag-turkey'
              },
              {
                name: 'Czech',
                icon: 'flag-cz'
              },
              {
                name: 'Mandarin',
                icon: 'flag-madagascar'
              },
              {
                name: 'Spanish',
                icon: 'flag-spain'
              },
              {
                name: 'Dutch',
                icon: 'flag-denmark'
              },
              {
                name: 'Italian',
                icon: 'flag-italy'
              },
              {
                name: 'Russian',
                icon: 'flag-russia'
              },
              {
                name: 'Vietnamese',
                icon: 'flag-vietnam'
              },
              {
                name: 'Tagalog',
                icon: 'flag-tanzania'
              }
          ]
      }
  }
}

const Countries = () => {
  const {data:{attributes}} = countryData;

  return (
    <div className={styles.container}>
         <div className={styles.left}>
            <h2 className={styles.heading}>{attributes.heading}</h2>
            <p className={styles.desc}>{attributes.description}</p>
         </div>
         <div className={styles.right}>
            <ul className={styles.countries}>
              {attributes.countries.map((item, i)=> (
                <li className={styles.country} key={i}>
                  <i className={`flag ${item.icon}`} />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
         </div>
    </div>
  )
}

export default Countries