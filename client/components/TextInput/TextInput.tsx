import React, { useState } from 'react';

import styles from './TextInput.module.scss';

type TextInputProps = {
  name: string;
  key: number;
  label: string;
  type?: 'text' | 'email' | 'phone' | 'password';
  isRequired?: boolean
}

const TextInput = ({ name, key, type = 'text', label, isRequired = false }: TextInputProps) => {
  const [inputField, setInputField] = useState();

  return <div className={styles.wrapper} key={key}>
    <label htmlFor={name} className={styles.label}>{label}</label>
    <input
      className={styles['text-input']}
      name={name}
      title={label}
      type={type}
      required={isRequired}
      onChange={(e) => (e.target.value)}
    />
  </div>;
}

export default TextInput;
