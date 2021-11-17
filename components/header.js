
import styles from '../styles/header.module.scss'
import Link from "next/link"

const Header = () => {
    return (
        <div className={styles.root}>
            <section className={styles.header}>
                <h1 className={styles.h1}>UBC Degree Navigator</h1>
                <div className={styles.iconSection}>
                    <div className={styles.textSection}>
                        <Link href="/"><a className={styles.text}>Home</a></Link>
                        <Link href="/degree"><a className={styles.text}>My Degree</a></Link>
                        <div className={styles.formWrapper}>
                        <form className={styles.form}>
                            <input type="text" placeholder="Search" className={styles.search} />
                            <button>plab</button>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;