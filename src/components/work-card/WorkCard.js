import styles from './WorkCard.module.css';

export default function WorkCard ({role, company, period, description}) {
    return (
    <div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.logo}></div>
            <div className={styles.text}>
                <div className={styles.role}>{role}</div>
                <div className={styles.company}>{company}</div>
            </div>
        </div>
        <div className={styles.period}>{period}</div>
        <div className={styles.description}>{description}</div>
    </div>);
}