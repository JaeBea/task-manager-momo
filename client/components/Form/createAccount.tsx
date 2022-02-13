import React, { useState } from 'react';
import { TextInputProps } from '../TextInput';
import { useRouter } from 'next/router';

import styles from './Form.module.scss';
import { generateFields } from './utilities';
import { createUser } from '../../services/user';

export default function CreateAccount () {
  const router = useRouter();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userDetails = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email
    }
    
    createUser(userDetails).then((res) => {
      if (res.status === 201) {
        router.push('/dashboard');
      }
    });
  }

  return (
  <form className={styles.card} onSubmit={handleSubmit}>
    <h2>Create Account</h2>
    {generateFields(newAcctFields)}
    <button className={styles.button}>Submit</button>
  </form>
  );
}
