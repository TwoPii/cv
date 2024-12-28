import React from "react";
import styles from './Resume.module.css';
import WorkCard from "../../components/work-card/WorkCard";
import EducationCard from "../../components/education-card/EducationCard";

class Resume extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.jobs}>
                    <div className={styles.header}>
                        Career
                    </div>
                    <div className={styles["job-items"]}>
                        <WorkCard role="Technical Lead" company="Ypsomed Software S.L." period="January 2022 - December" 
                            description="Description of the activities that I did: Lorem ipsum dolor sit amet." />
                        <WorkCard role="Technical Lead" company="Ypsomed Software S.L." period="January 2022 - December" 
                            description="Description of the activities that I did: Lorem ipsum dolor sit amet." />
                        <WorkCard role="Technical Lead" company="Ypsomed Software S.L." period="January 2022 - December" 
                            description="Description of the activities that I did: Lorem ipsum dolor sit amet." />
                    </div>
                </div>
                <div className={styles.education}>
                    <div className={styles.header}>Education</div>
                    <div className={styles["education-items"]}>
                        <EducationCard degree={"Data Science Master"} university={"Universitat Oberta de Catalunya"} period={"2021-2022"} />
                        <EducationCard degree={"Computer Science Degree"} university={"Universitat Politècnica de Catalunya"} period={"2015 - 2020"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;