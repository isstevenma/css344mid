import Collapsible from '../components/collapsible'
import Course from '../components/course'
import styles from '../styles/degree.module.scss'
import CheckIcon from '@mui/icons-material/Check';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CancelIcon from '@mui/icons-material/Cancel';

let coureCourses = [
    <Collapsible
    contents={[
        <Course text="VISA110" grade="Grade: 100" credits="Credits: 3" key="1"/>,
        <Course text="VISA210" grade="Grade: 100" credits="Credits: 3" key="2"/>,
        <Course text="VISA241" grade="Grade: 100" credits="Credits: 3" key="3"/>,
        <Course text="JRNL100" grade="Grade: 100" credits="Credits: 3" key="4"/>,
        <Course text="INFO250" grade="Grade: 100" credits="Credits: 3" key="5"/>,
        <Course text="FIST100" grade="Grade: 100" credits="Credits: 3" key="6"/>,
        <Course text="FIST240" grade="Grade: 100" credits="Credits: 3" key="7"/>,
        <Course text="FIPR133" grade="Grade: 100" credits="Credits: 3" key="8"/>,
        <Course text="ENGL232" grade="Grade: 100" credits="Credits: 3" key="9"/>,
        <Course text="CRWR213" grade="Grade: 100" credits="Credits: 3" key="10"/>,
        <Course text="CPSC110" grade="Grade: 100" credits="Credits: 3" key="11"/>,
        <Course text="ASTU100" grade="Grade: 100" credits="Credits: 3" key="12"/>,
        <Course text="ARTH380" grade="Grade: CIP" credits="Credits: 3" key="13"/>,
        <Course text="CRWR312" grade="Grade: CIP" credits="Credits: 3" key="14"/>,
        <Course text="ENGL332" grade="Grade: CIP" credits="Credits: 3" key="15"/>,
        <Course text="Link to other required courses"/>
    ]}
    text="Core Courses"
    completed="68% | 36/66"
    cip="9"
    icon={<WatchLaterIcon/>}
    key="r1"
    />
];

let courePlusCourses = [
    <Collapsible
    contents={[
        <Course text="CRWR206" grade="Grade: 100" credits="Credits: 3" key="1"/>,
        <Course text="CPSC210" grade="Grade: 100" credits="Credits: 3" key="2"/>,
        <Course text="ACAM250" grade="Grade: 100" credits="Credits: 3" key="3"/>,
        <Course text="ENGL201" grade="Grade: CIP" credits="Credits: 3" key="4"/>,
        <Course text="Link to other qualifiable courses"/>
    ]}
    text="Core Plus Courses"
    completed="75% | 9/12"
    cip="3"
    icon={<WatchLaterIcon/>}
    key="r1"
    />
];

let electives = [
    <Collapsible
        contents={[<Course text="ENGL 112" grade="Grade: 100" credits="Credits: 3" key="1"/>,
        <Course text="ENGL 227" grade="Grade: 100" credits="Credits: 3" key="2"/>,
        <Course text="CRWR 200" grade="Grade: 100" credits="Credits: 3" key="3"/>,
            <Course text="CRWR 203" grade="Grade: 100" credits="Credits: 3" key="4"/>,
            <Course text="CRWR 213" grade="Grade: 100" credits="Credits: 3" key="5"/>
            ]}
        text="Electives (Any)"
        completed="36% | 15/42"
        cip="0"
        icon={<WatchLaterIcon/>}
        key="r12"
    />
]

let upperLevel = [
    <Collapsible
        contents={[<Course text="CPSC 310" grade="Grade: 100" credits="Credits: 4" key="1"/>,
            <Course text="CPSC 313" grade="Grade: 100" credits="Credits: 3" key="1"/>,
            <Course text="CPSC 319" grade="Grade: 100" credits="Credits: 4" key="4"/>,
            <Course text="CPSC 320" grade="Grade: 100" credits="Credits: 3" key="1"/>]}
        text="Upper-level Courses"
        completed="21% | 10/48"
        cip="0"
        icon={<WatchLaterIcon/>}
        key="r12"
    />
]

const mediaStudies = [coureCourses, courePlusCourses, electives, upperLevel];
export default mediaStudies;

