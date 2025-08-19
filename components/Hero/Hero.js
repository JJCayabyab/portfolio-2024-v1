import styles from './Hero.module.scss'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={styles.groupContainer}>
      {/* Text Section */}
      <div className={styles.textContainer}>
        <p className={styles.hello}>
          Hello, I&apos;m <span className={styles.jeremy}>Jeremy</span>
        </p>
        <p className={styles.position}>
          Front-End Developer <span> X </span> UI <br /> Designer
        </p>
        <p className={styles.shortDesc}>
          I bring ideas to life by crafting seamless, interactive experiences with every pixel and line of code!
        </p>
        <a href="/static/document/resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>

      {/* Image Section */}
      <div className={styles.glowContainer}>
        <Image
          src="/static/images/my-picture-1.png"
          width={600}
          height={600}
          alt="Jeremy Cayabyab"
          className={styles.glowingImage}
          priority // ensures faster loading for hero image
        />
      </div>
    </div>
  )
}

export default Hero
