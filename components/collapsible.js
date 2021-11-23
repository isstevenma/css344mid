import styles from '../styles/collapsible.module.scss'
import React, { useState, useRef } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Course from './course';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CancelIcon from '@mui/icons-material/Cancel';

const Collapsible = ({ contents, text, completed, cip, icon }) => {
    const collapRef = useRef();
    const [expand, setExpand] = useState(false);
    const onClick = () => {
        setExpand(!expand);
        collapRef.current.scrollIntoView({behavior: 'smooth'});
    }
    // const toScrollTo = <Course {...contents[0].props} ref={collapRef}/>;
    // contents[0] = toScrollTo;
    return (
        <div className={styles.root}>
            <button type="button" onClick={onClick} className={`${styles.button} ${expand == true && styles.buttonAfter}`}>
                <div className={styles.infoSection}>
                    <span className={styles.requirement}>
                        {text}
                    </span>
                    <span className={styles.span}>
                        Credits Completed: {completed}
                    </span>
                    <span className={styles.span}>
                        CIP: {cip}
                    </span>
                    <span className={`${styles.span} ${styles.spanIcon}`}>
                        {icon}
                    </span>
                </div>
            </button>
            <div className={`${styles.content} ${expand == true && styles.contentAfter}` } >
                {contents}
                <div ref={collapRef}/>
            </div>
        </div>
    );
}

export default Collapsible;