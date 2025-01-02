import styles from './TopBar.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function TopBar() {
        return (
        <div className={styles.container}>
          <div className={styles["header-bar"]}>
            <div className={styles.left}>
              <span className={styles.name}>Genís Bosch</span>
              <span className={styles.role}>Software Developer</span>
            </div>
            <div className={styles.right}>
              <NavLink className={({ isActive}) => (isActive ? `${styles.selected} ${styles.tab}`: styles.tab)} to ="/">Welcome</NavLink>
              {/* <NavLink className={({ isActive}) => (isActive ? `${styles.selected} ${styles.tab}`: styles.tab)}to ="/work">Work</NavLink>*/}
              <NavLink className={({ isActive}) => (isActive ? `${styles.selected} ${styles.tab}`: styles.tab)} to ="/resume">Resume</NavLink>
              <NavLink className={({ isActive}) => (isActive ? `${styles.selected} ${styles.tab}`: styles.tab)} to ="/about">About</NavLink>
            </div>
          </div>
        </div>
        );
}