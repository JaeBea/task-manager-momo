import React, { useState } from 'react';
import { TextInputProps } from '../TextInput';

import styles from './Form.module.scss';
import { generateFields } from './utilities';

const destination = 'http://localhost:3100/api/user/create';

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(e)
  let res = await fetch(destination, {
    method: 'POST',
    body: JSON.stringify({
      type: 'user',
        attributes: {
          first_name: e.firstName,
          last_name: e.lastName,
          username: e.username,
          email: e.email
        }
    })
  })
}

export default function CreateAccount () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const newAcctFields: TextInputProps[] =  [
    {
      name: 'first_name',
      label: 'First Name',
      value: firstName,
      setState: setFirstName
    },
    {
      name: 'last_name',
      label: 'Last Name',
      value: lastName,
      setState: setLastName
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      value: email,
      setState: setEmail
    },
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
      setState: setpassword
    }
  ];

  return (
  <form className={styles.card} onSubmit={handleSubmit}>
    <h2>Create Account</h2>
    {generateFields(newAcctFields)}
    <button className={styles.button}>Submit</button>
  </form>
  );
}
