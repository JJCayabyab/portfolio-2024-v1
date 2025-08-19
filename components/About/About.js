import styles from './About.module.scss'
import { hobbyList } from '../../data/Data'
import { techList } from '../../data/Data'
import { achievementsList } from '../../data/Data'
import Image from 'next/image'

const About = () => {
  const displayTechStack = techList.map((tech, index) => (
    <div key={index} className={styles.techContainer}>
      <Image
        src={tech.icon} // should be a public path: "/static/images/tech/..."
        className={styles.techIcon}
        width={35}
        height={35}
        alt={tech.name}
      />
      <p className={styles.techName}>{tech.name}</p>
    </div>
  ))

  const displayAchievements = achievementsList.map((achievement, index) => (
    <div className={styles.timelineContainer} key={index}>
      <div className={styles.timelineTextBox}>
        <h1>{achievement.school}</h1>
        <h5>
          {achievement.level} - {achievement.year}
        </h5>
        <h3>{achievement.description}</h3>
      </div>
      <div className={styles.schoolContainer}>
        <Image
          src={achievement.icon} // should be a public path: "/static/images/schools/..."
          width={50}
          height={50}
          alt={`${achievement.school} logo`}
        />
      </div>
    </div>
  ))

  const displayHobby = hobbyList.map((hobby, index) => (
    <div key={index} className={styles.hobbyWrapper}>
      <div
        className={styles.hobbyCont}
        style={{ backgroundColor: hobby.color }}
      >
        <Image
          src={hobby.url} // should be "/static/images/hobbies/..."
          width={150}
          height={150}
          alt={hobby.name}
        />
      </div>
      <p className={styles.hobbyName}>{hobby.name}</p>
    </div>
  ))

  return (
    <div className={styles.bgContainer}>
      <div className={styles.aboutContainer}>
        <div>
          <h1 className={styles.aboutMe}>{`{ About Me }`}</h1>
          <h1 className={styles.shortAbout}>
            I&apos;m Jeremy Jhay B. Cayabyab, a passionate front-end developer
            and UI designer with a focus on creating visually appealing,
            user-friendly interfaces. Currently, I&apos;m a 3rd-year college
            student taking BS Computer Science at Polytechnic University of the
            Philippines, honing my skills in web development and design to craft
            functional and beautiful digital experiences.
          </h1>
        </div>

        {/* Hobbies */}
        <div className={styles.hobbiesParentContainer}>
          <div
            className={`${styles.hobbiesTitleContainer} ${styles.titleContainer}`}
          >
            <h1 className={styles.hobbiesTitle}>Hobbies</h1>
            <hr />
          </div>
          <div className={styles.hobbiesWrapper}>{displayHobby}</div>
        </div>

        {/* Achievements */}
        <div className={styles.achievementsParentContainer}>
          <div
            className={`${styles.achieveTitleContainer} ${styles.titleContainer}`}
          >
            <h1 className={styles.achieveTitle}>Educational Achievements</h1>
            <hr />
          </div>
          <div className={styles.timeline}>{displayAchievements}</div>
        </div>

        {/* Tech Stack */}
        <div className={styles.techParentContainer}>
          <div
            className={`${styles.techTitleContainer} ${styles.titleContainer}`}
          >
            <h1 className={styles.techTitle}>Tech Stack</h1>
            <hr />
          </div>
          <div className={styles.techWrapper}>{displayTechStack}</div>
        </div>
      </div>
    </div>
  )
}

export default About
