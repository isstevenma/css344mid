import Collapsible from '../components/collapsible'
import Course from '../components/course'
import styles from '../styles/degree.module.scss'
import CheckIcon from '@mui/icons-material/Check';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CancelIcon from '@mui/icons-material/Cancel';
import mediaStudies from '../seed/mediaStudies';
export default function Degree() {
    const childrenBG = {
        backgroundColor: "#8ecced"
    };
    let arts = [<Collapsible
    contents={[<Collapsible
        contents={[<Course text="ENGL100" grade="Grade: 100" credits="Credits: 3" key="1"/>]}
        text="Writing Component"
        completed="100% | 3/3"
        icon={<CheckIcon/>}
        cip="0"
        key="r1"
    />,
    <Collapsible
        contents={[<Course text="CPSC 319" grade="Grade: CIP" credits="Credits: 4" key="1"/>]}
        text="Research Component"
        completed="0% | 0/3"
        cip="4"
        icon={<WatchLaterIcon/>}
        key="r2"
    />,
    //add link
    <Collapsible
        contents={[<Course text={<a href="https://www.calendar.ubc.ca/Vancouver/index.cfm?tree=12,197,282,55#1220">Link to Suggestions</a>} key="1"/>]}
        text="Language"
        completed="0% | 0/3"
        cip="0"
        icon={<CancelIcon/>}
        key="r3"
    />,
    <Collapsible
    contents={[<Course text="ENGL 110" grade="Grade: 80" credits="Credits: 3" key="1"/>,
               <Course text="ENGL 242" grade="Grade: 70" credits="Credits: 3" key="1"/>]}
    text="Literature"
    completed="100% | 6/6"
    cip="0"
    icon={<CheckIcon/>}
    key="r4"
/>,
    <Collapsible
    contents={[<Course text="Math 104" grade="Grade: 70" credits="Credits: 3" key="1"/>,
               <Course text="Math 105" grade="Grade: 60" credits="Credits: 3" key="1"/>]}
    text="First Year Math"
    completed="100% | 6/6"
    cip="0"
    icon={<CheckIcon/>}
    key="r5"
/>,
<Collapsible
    contents={[<Course text="LATN 101" grade="Grade: 85" credits="Credits: 3" key="1"/>]}
    text="Elective"
    completed="100% | 3/3"
    cip="0"
    icon={<CheckIcon/>}
    key="r6"
/>]}
    text= "Art Requirements"
    completed="75% | 18/24"
    icon={<WatchLaterIcon/>}
    cip="4"
    key="r1"
    />
]
    let bee = [
        <Collapsible
        contents={[<Collapsible
            contents={[<Course text="CPSC 110" grade="Grade: 90" credits="Credits: 4" key="1"/>,
                       <Course text="CPSC 121" grade="Grade: 85" credits="Credits: 4" key="1"/>]}
            text="First Year CPSC"
            completed="100% | 8/7"
            cip="0"
            icon={<CheckIcon/>}
            key="r6"
        />,
        <Collapsible
            contents={[<Course text="CPSC 210" grade="Grade: 80" credits="Credits: 4" key="1"/>,
                       <Course text="CPSC 213" grade="Grade: 85" credits="Credits: 4" key="1"/>,
                       <Course text="CPSC 221" grade="Grade: 80" credits="Credits: 4" key="1"/>]}
            text="Second Year CPSC"
            completed="100% | 12/12"
            cip="0"
            icon={<CheckIcon/>}
            key="r7"
        />,
        <Collapsible
            contents={[<Course text="MATH 200" grade="Grade: 90" credits="Credits: 3" key="1"/>,
                       <Course text="MATH 221" grade="Grade: 60" credits="Credits: 3" key="1"/>]}
            text="Second Year Math"
            completed="100% | 6/6"
            cip="0"
            icon={<CheckIcon/>}
            key="r8"
        />,
        <Collapsible
            contents={[<Course text="CPSC 310" grade="Grade: 70" credits="Credits: 4" key="1"/>,
                       <Course text="CPSC 313" grade="Grade: CIP" credits="Credits: 3" key="1"/>,
                       <Course text="CPSC 320" grade="Grade: CIP" credits="Credits: 3" key="1"/>]}
            text="Third Year Requirements"
            completed="40% | 4/10"
            cip="6"
            icon={<CheckIcon/>}
            key="r9"
        />,
        <Collapsible
            contents={[<Course text="CPSC 319" grade="Grade: 80" credits="Credits: 4" key="1"/>,
                       <Course text={<a href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-department&dept=CPSC">Link to suggestions</a>} key="1"/>]}
            text="300 or above Courses"
            completed="33% | 4/12"
            cip="0"
            icon={<CancelIcon/>}
            key="r10"
        />,
        <Collapsible
            contents={[<Course text={<a href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-department&dept=CPSC">Link to suggestions</a>} key="1"/>]}
            text="400 or above Courses"
            completed="0%"
            cip="0/9"
            icon={<CancelIcon/>}
            key="r11"
        />]}
        text="CPSC Requirements"
        completed="59% | 33/56"
        cip="6"
        icon={<WatchLaterIcon/>}
        key="r1"
        />
    ]

    let electives = [
        <Collapsible
        contents = {[<Collapsible
            contents={[<Course text="ENGL 227" grade="Grade: 80" credits="Credits: 3" key="1"/>,
                <Course text="CRWR 200" grade="Grade: 60" credits="Credits: 3" key="1"/>,
                <Course text={<a href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea">Link to suggestions</a>}/>]}
            text="Electives Outside of CPSC"
            completed="15% | 6/39"
            cip="0"
            icon={<WatchLaterIcon/>}
            key="r12"
        />,
        <Collapsible
            contents={[<Course text="ENGL 112" grade="Grade: 80" credits="Credits: 3" key="1"/>,
                <Course text="CRWR 203" grade="Grade: 90" credits="Credits: 3" key="1"/>,
                <Course text="CRWR 213" grade="Grade: 70" credits="Credits: 3" key="1"/>,
                <Course text={<a href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea">Link to suggestions</a>}/>]}
            text="Electives (Any)"
            completed="100% | 9/7"
            cip="0"
            icon={<CheckIcon/>}
            key="r12"
        />]}
        text = "Electives"
        completed="28% | 13/46"
        cip="0"
        icon={<WatchLaterIcon/>}
        key="r1"
        />
    ]

    let upperLevel = [
        <Collapsible
            contents={[<Course text="CPSC 310" grade="Grade: 90" credits="Credits: 4" key="1"/>,
                <Course text="CPSC 313" grade="Grade: 60" credits="Credits: 3" key="1"/>,
                <Course text="CPSC 319" grade="Grade: 85" credits="Credits: 4" key="4"/>,
                <Course text="CPSC 320" grade="Grade: 90" credits="Credits: 3" key="1"/>,
                <Course text={<a href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-department&dept=CPSC">Link to suggestions</a>} key="1"/>
            ]}
            text="Upper-Level Courses"
            completed="21% | 10/48"
            cip="0"
            icon={<WatchLaterIcon/>}
            key="r12"
        />
    ]
    let cpscMajor = [arts, bee, electives, upperLevel];
    return (
        //Have to do student info at top
        <section className={styles.root}>
            <div className={styles.studentInfo}>
                <h1 className={styles.h1}>Student Name</h1>
                <h2 className={styles.h1}>Year Level</h2>
                <h2 className={styles.h1}>Culmulative GPA: 100</h2>
            </div>
            <div className={styles.collapsibleWrapper}>
                <Collapsible contents={cpscMajor} text="Computer Science (BA)" completed="58%" cip="70/120" icon={<WatchLaterIcon/>}/>
                <Collapsible contents={mediaStudies} text="Media Studies (BA)" completed="50%" cip="60/120" icon={<WatchLaterIcon/>}/>
            </div>
        </section>
    )
}