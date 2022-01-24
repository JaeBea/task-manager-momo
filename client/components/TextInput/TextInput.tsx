import React from 'react';

import styles from './TextInput.module.scss';

type TextInputProps = {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'phone' | 'password';
  value?: string;
  isRequired?: boolean
}

const TextInput = ({id, type='text', value, label, isRequired=false}: TextInputProps) => {
  return <div className={styles.wrapper}>
    <label htmlFor={id} className={styles.label}>{label}</label>
    <input className={styles['text-input']} name={id} type={type} value={value} required={isRequired} />
  </div>;
}

export default TextInput;
