import React, { useState } from 'react';

import styles from './TextInput.module.scss';

export type TextInputProps = {
  name: string;
  label: string;
  value: string;
  setState: Function;
  type?: 'text' | 'email' | 'phone' | 'password';
  isRequired?: boolean;

}

export default function TextInput ({ name, type='text', label, isRequired=true, value, setState}: TextInputProps) {
  return <div className={styles.wrapper}>
    <label htmlFor={name} className={styles.label}>{label}</label>
    <input
      className={styles.textField}
      name={name}
      title={label}
      type={type}
      required={isRequired}
      value={value}
      onChange={(e) => setState(e.target.value)}
    />
  </div>;
}
