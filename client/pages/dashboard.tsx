import Head from 'next/head';
import styles from '../styles/Home.module.scss';


export default function Dashboard() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Task Manager Momo</title>
        <meta name="description" content="The best task manager application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <h1>Dashboard</h1>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://beatricew.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Beatrice Williams
        </a>
      </footer>
    </div>
  )
}
