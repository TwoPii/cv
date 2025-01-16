import styles from './EducationCard.module.css';

export default function EducationCard ({degree, university, period, image}){
    return (<div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.logo}>
                <img src={image} alt='logo'></img>
            </div>
            <div className={styles.text}>
                <div className={styles.degree}>{degree}</div>
                <div className={styles.university}>{university}</div>
            </div>
        </div>
        <div className={styles.period}>{period}</div>
    </div>);
}