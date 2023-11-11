import styles from './industries.module.scss'
import Image from 'next/image';

export const industriesData = {
    heading: 'Industries We Serve To',
    description: 'We provide our services to multiple industries and verticals. Here is a break-up of the industries that we offer our services -',
    idustries: [
        {
            icon: '/imgs/industries/plane.svg',
            title: 'Aerospace'
        },
        {
            icon: '/imgs/industries/agriculture.svg',
            title: 'Agriculture'
        },
        {
            icon: '/imgs/industries/car.svg',
            title: 'Automotive'
        },
        {
            icon: '/imgs/industries/chemical.svg',
            title: 'Chemical'
        },
        {
            icon: '/imgs/industries/brokerage.svg',
            title: 'Custom Brokerage'
        },
        {
            icon: '/imgs/industries/defense.svg',
            title: 'Defense/Arm'
        },
        {
            icon: '/imgs/industries/energy.svg',
            title: 'Energy'
        },
        {
            icon: '/imgs/industries/education.svg',
            title: 'Education'
        },
        {
            icon: '/imgs/industries/entertainment.svg',
            title: 'Entertainment'
        },
        {
            icon: '/imgs/industries/finance.svg',
            title: 'Finance'
        }, 
        {
            icon: '/imgs/industries/forestry.svg',
            title: 'Forestry'
        },
        {
            icon: '/imgs/industries/food.svg',
            title: 'Food'
        },
        {
            icon: '/imgs/industries/health.svg',
            title: 'Healthcare'
        },
        {
            icon: '/imgs/industries/hospital.svg',
            title: 'Hospitality'
        },
        {
            icon: '/imgs/industries/it.svg',
            title: 'Information Technology'
        },
        {
            icon: '/imgs/industries/Logistics.svg',
            title: 'Logistics'
        },
        {
            icon: '/imgs/industries/Manufacturing.svg',
            title: 'Manufacturing'
        },
        {
            icon: '/imgs/industries/Mass.svg',
            title: 'Mass'
        },
        {
            icon: '/imgs/industries/Multimedia.svg',
            title: 'Multimedia'
        },
        {
            icon: '/imgs/industries/PublicSector.svg',
            title: 'Public Sector/Government'
        },
        {
            icon: '/imgs/industries/Pharmaceutical.svg',
            title: 'Pharmaceutical'
        },
        {
            icon: '/imgs/industries/Retail.svg',
            title: 'Retail & e-Commerce'
        },
        {
            icon: '/imgs/industries/Telecommunications.svg',
            title: 'Telecommunications'
        },
        {
            icon: '/imgs/industries/Transport.svg',
            title: 'Transport'
        }
    ],
    img: '/imgs/languages.png'
}

const Industries = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2 className={styles.heading}>{industriesData.heading}</h2>
                    <p className={styles.description}>{industriesData.description}</p>
                    <ul className={styles.list}>
                        {industriesData.idustries.map((item, i)=> <li key={i} className={styles.itemWrapper}>
                            <div className={styles.item}>
                            <div className={styles.icon}>
                                <Image src={item.icon} width={30} height={30} alt=''/>
                            </div>
                                <p>{item.title}</p>
                            </div>
                        </li>)}
                    </ul>
                </div>
                <div className={styles.right}>
                    <div className={styles.imgWrapper}>
                        <Image src={industriesData.img} width={0} height={0} sizes='100%' alt="" />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Industries