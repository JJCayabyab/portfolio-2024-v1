import styles from './Navbar.module.css'
import logo from '../../public/static/images/logo-j.png'
import Image from 'next/image'
import github from '../../public/static/images/Side/github-white.png'
import linkedIn from '../../public/static/images/Side/linkedin-white.png'

const Navbar = ({ onScrollToSection }) => {


  const showSideBar = () => {
    const sidebar = document.querySelector(`.${styles.sideContainer}`);
    if (sidebar) {
      sidebar.style.display = 'flex';
    } else {
      console.warn('Sidebar element not found');
    }
  }

  const hideSideBar = () => {
    const sidebar = document.querySelector(`.${styles.sideContainer}`);
    if (sidebar) {
      sidebar.style.display = 'none';
    } else {
      console.warn('Sidebar element not found');
    }
  }


  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            width={40}
            height={40}
            alt="logo" />
        </div>

        <div className={`${styles.optionsContainer} ${styles.optionsContainerA}`}>
          <ul className={styles.options}>
            <li className={styles.hideOnSmallScreen} onClick={() => onScrollToSection("about")}>About</li>
            <li className={styles.hideOnSmallScreen} onClick={() => onScrollToSection("projects")}>Projects</li>
            <li className={styles.hideOnSmallScreen} onClick={() => onScrollToSection("contacts")}>Contacts</li>
            <li className={styles.menuButton} onClick={showSideBar}> <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg> </li>
          </ul>
        </div>

        <div className={`${styles.optionsContainerB} ${styles.sideContainer}`}>
          <ul className={styles.options}>
            <li onClick={hideSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></li>
            <li onClick={() => onScrollToSection("about")}>About</li>
            <li onClick={() => onScrollToSection("projects")}>Projects</li>
            <li onClick={() => onScrollToSection("contacts")}>Contacts</li>
          </ul>



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

        </div>
      </div>
    </>


  )
}

export default Navbar
