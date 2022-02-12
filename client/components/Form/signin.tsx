import React, {useState} from 'react';
import { TextInputProps } from '../TextInput';

import styles from './Form.module.scss';
import { generateFields } from './utilities';

const destination = 'http://localhost:3100/api/auth/login';

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(e)
  let res = await fetch(destination, {
    method: 'POST',
    body: JSON.stringify({
      username: e.username,
      password: e.password

    })
  })
}

export default function SignIn () {
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

  return (
  <form className={styles.card} onSubmit={handleSubmit}>
    <h2>Sign In</h2>
    {generateFields(loginFields)}
    <button className={styles.button}>Submit</button>
  </form>
  );
}
