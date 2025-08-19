import React from 'react'
import styles from './Projects.module.scss'
import { projectList } from '../../data/Data'
import Image from 'next/image'
const Projects = () => {

    const displayProject = projectList.map((project, index) => {
        return (
            <div key={index} className={styles.projectContainer}
                style={{
                    display: 'flex',
                    flexDirection: project.invert ? 'row' : 'row-reverse', gap: '15px',
                }}>

                <div className={styles.imageContainer}>
                    <a href={project.link} target='_blank'>
                        <Image width={600} height={400} className={styles.projectImage} src={project.image} />
                    </a>
                </div>


                <div className={styles.infoContainer}>
                    <div className={styles.titleContainer}>
                        <h1>{project.name}</h1>
                    </div>
                    <p className={styles.description}>{project.description}</p>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className={styles.projectsParentContainer}>
                <h1 className={styles.projects}>{`{ Featured Projects }`}</h1>
                <div className={styles.projectWrapper}>
                    {displayProject}
                </div>
            </div>

        </>

    )
}

export default Projects
