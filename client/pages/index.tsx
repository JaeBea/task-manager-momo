import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import SignIn from '../components/Form/signin';
import CreateAccount from '../components/Form/createAccount';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Task Manager Momo</title>
        <meta name="description" content="The best task manager application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <SignIn />
          <div className={styles.vl}></div>
          <CreateAccount />
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
