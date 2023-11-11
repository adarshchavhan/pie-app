import EnquryForm from '../enquryForm/EnquryForm';
import styles from './mainContent.module.scss';
import '@/styles/pageContent.scss';

const MainContent = ({pageContent}) => {

  return (
    <div className={styles.container}>
      
      <div className={styles.left}>
        <div className="page-content" 
          dangerouslySetInnerHTML={{__html: pageContent}}>
        </div>
      </div>

      <div className={styles.right}>
        <EnquryForm/>
      </div>
    </div>
  )
}

export default MainContent