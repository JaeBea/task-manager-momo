import React, { useState } from 'react';

import styles from './TextInput.module.scss';

export type TextInputProps = {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'phone' | 'password';
  isRequired?: boolean
}

export default function TextInput ({ name, type='text', label, isRequired=true }: TextInputProps) {
  const [data, setData] = useState();

  return <div className={styles.wrapper}>
    <label htmlFor={name} className={styles.label}>{label}</label>
    <input
      className={styles.textField}
      name={name}
      title={label}
      type={type}
      required={isRequired}
      value={data}
      onChange={(e) => (e.target.value)}
    />
  </div>;
}
