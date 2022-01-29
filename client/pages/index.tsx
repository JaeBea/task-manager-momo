import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Form from '../components/Form';

const loginFields =  [
    {
      name: 'username',
      label: 'Username'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password'
    }
  ];

const newAcctFields =  [
    {
      name: 'first_name',
      label: 'First Name'
    },
    {
      name: 'last_name',
      label: 'Last Name'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email'
    },
    {
      name: 'username',
      label: 'Username'
    },
    {
      //name: 'password',
      label: 'Password',
      type: 'password'
    }
  ];

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
          <Form title='Sign In' fields={loginFields} destination='/api/auth/login' />
          <div className={styles.vl}></div>
          <Form title='Create Account' fields={newAcctFields} destination='/api/user/create' />
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
