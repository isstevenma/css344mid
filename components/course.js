import styles from '../styles/course.module.scss'
import React, { useState } from 'react';

const Course = ({ text, grade, credits }) => {
    return (
        <div className={styles.root}>
            <button type="button" className={styles.button}>
                <div className={styles.infoSection}>
                    <span className={styles.requirement}>
                        {text}
                    </span>
                    <span className={styles.span}>
                        {grade}
                    </span>
                    <span className={styles.span}>
                        {credits}
                    </span>
                </div>
            </button>
        </div>
    );
}

export default Course;