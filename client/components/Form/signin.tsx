import { useRouter } from 'next/router';
import React, {useState} from 'react';
import { TextInputProps } from '../TextInput';

import styles from './Form.module.scss';
import { generateFields } from './utilities';
import { checkAuth } from '../../services/user';

export default function SignIn () {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginFields: TextInputProps[] =  [
    {
      name: 'username',
      label: 'Username',
      value: username,
      setState: setUsername
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      value: password,
      setState: setPassword
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password
    };

    checkAuth(credentials).then((res) => {
      switch (res.status) {
        case 401:
          alert('Try again! It is not that hard.');
          break;
        case 200:
          router.push('/dashboard');
          break;
        default:
          alert('Something went wrong');
      }
    });
  }

  return (
  <form className={styles.card} onSubmit={handleSubmit}>
    <h2>Sign In</h2>
    {generateFields(loginFields)}
    <button className={styles.button}>Submit</button>
  </form>
  );
}
