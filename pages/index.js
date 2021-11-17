import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/home.module.scss'

//https://colorhunt.co/palette/05374239a2dba2dbfae8f0f2

export default function Home() {
  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>Home!</h1>
    </div>
  );
}
