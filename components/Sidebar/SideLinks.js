import styles from './SideLinks.module.scss'
import github from '../../public/static/images/Side/github-sign.png'
import linkedIn from '../../public/static/images/Side/linkedIn.png'
import Image from 'next/image'

const SideLinks = () => {
   return (
      <>
         <div className={styles.sideContainer}>
            <div className={styles.imgParentContainer}>

               <div className={styles.imgContainer}>
                  <a href="https://github.com/JJCayabyab?tab=repositories" target="_blank">
                     <Image href="https://github.com/JJCayabyab?tab=repositories" target="_blank" width={35} height={35} src={github} className={styles.github} fill />
                  </a>
               </div>

               <div className={styles.imgContainer}>
                  <a href="https://www.linkedin.com/in/jeremy-cayabyab-858759296/" target="_blank">
                     <Image src={linkedIn} width={35} height={35} fill className={styles.linkedIn} />
                  </a>
               </div>


            </div>
            <hr />
         </div>
      </>
   )
}

export default SideLinks
