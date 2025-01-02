import React from "react";
import styles from './Resume.module.css';
import WorkCard from "../../components/work-card/WorkCard";
import EducationCard from "../../components/education-card/EducationCard";

import { jobs } from "./Jobs";
import { degrees } from "./Degrees";


class Resume extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.jobs}>
                    <div className={styles.header}>
                        Career
                    </div>
                    <div className={styles["job-items"]}>
                            {jobs.map((job, index) => {
                                return <WorkCard role={job.role} key={index} company={job.company} period={job.period} description={job.description} image={job.image} />
                            })}
                    </div>
                </div>
                <div className={styles.education}>
                    <div className={styles.header}>Education</div>
                    <div className={styles["education-items"]}>
                        {degrees.map((degree, index) => {
                            return <EducationCard key={index} degree={degree.degree} university={degree.university} period={degree.period} image={degree.image} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;