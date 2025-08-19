import styles from './Contacts.module.scss'
import Image from 'next/image'

const Contacts = () => {
  return (
    <>
      <div className={styles.bgContainer}>
        <div className={styles.contactsParenteContainer}>
          <div className={styles.contactsContainer}>
            <div>
              <h1 className={styles.contacts}>{`{ Get In Touch }`}</h1>
              <h1 className={styles.shortContacts}>
                I’m always excited to connect with like-minded individuals and potential collaborators.
                Whether you have questions about my work, want to discuss a project, or just want to say hello, feel free to reach out.
                Let’s connect!
              </h1>
            </div>
            <div className={styles.iconWrapper}>
              <div className={styles.iconContainer}>
                <div className={styles.iconImageContainer}>
                  <Image
                    src="/static/images/Contacts/gmail.png"
                    width={100}
                    height={100}
                    alt="Gmail"
                  />
                </div>
                <h1>cayabyabjeremy25@gmail.com</h1>
              </div>
              <div className={styles.iconContainer}>
                <div className={styles.iconImageContainer}>
                  <Image
                    src="/static/images/Contacts/phone-2.png"
                    width={100}
                    height={100}
                    alt="Phone"
                  />
                </div>
                <h1>+63 9081161458</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts
