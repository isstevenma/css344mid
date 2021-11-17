import Collapsible from '../components/collapsible'
import Course from '../components/course'
import styles from '../styles/degree.module.scss'
import CheckIcon from '@mui/icons-material/Check';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Degree() {
    let bee = [<Collapsible
        contents={[<Course text="Course" grade="100" credits="3" />,
        <Course text="Course" grade="100" credits="3" />,
        <Course text="Course" grade="100" credits="3" />]}
        text="Requirement"
        completed="50%"
        icon={<WatchLaterIcon/>}
        cip="5/12"
    />,
    <Collapsible
        contents={[<Course text="Course" grade="100" credits="3" />,
        <Course text="Course" grade="100" credits="3" />,
        <Course text="Course" grade="100" credits="3" />]}
        text="Requirement"
        completed="100%"
        cip="12/12"
        icon={<CheckIcon/>}
    />,
    <Collapsible
        contents={[]}
        text="Requirement"
        completed="0%"
        cip="0/12"
        icon={<CancelIcon/>}
    />
    ];

    return (
        //Have to do student info at top
        <section className={styles.root}>
            <div className={styles.studentInfo}>
                <h1 className={styles.h1}>Student Name</h1>
                <h2 className={styles.h1}>Year Level</h2>
                <h2 className={styles.h1}>Culmulative GPA: 100</h2>
            </div>
            <div className={styles.collapsibleWrapper}>
                <Collapsible contents={bee} text="Major" completed="50%" cip="60/120" icon={<WatchLaterIcon/>}/>
            </div>
        </section>
    )
}