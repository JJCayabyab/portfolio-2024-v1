import styles from './SideLinks.module.scss'
import Image from 'next/image'

const SideLinks = () => {
   return (
      <div className={styles.sideContainer}>
         <div className={styles.imgParentContainer}>

            <div className={styles.imgContainer}>
               <a
                  href="https://github.com/JJCayabyab?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image
                     src="/static/images/Side/github-sign.png"
                     width={35}
                     height={35}
                     alt="GitHub"
                     className={styles.github}
                  />
               </a>
            </div>

         
            <div className={styles.imgContainer}>
               <a
                  href="https://www.linkedin.com/in/jeremy-cayabyab-858759296/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image
                     src="/static/images/Side/linkedin.png"
                     width={35}
                     height={35}
                     alt="LinkedIn"
                     className={styles.linkedIn}
                  />
               </a>
            </div>
         </div>

         <hr />
      </div>
   )
}

export default SideLinks
