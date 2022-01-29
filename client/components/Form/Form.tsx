import React from 'react';

import styles from './Form.module.scss'

import TextInput, {TextInputProps} from '../TextInput'
import { json } from 'stream/consumers';


type formProps = {
  title: string;
  fields: TextInputProps[];
  description?: string;
  destination: string;
}

const baseApi = 'http://localhost:3100';

const generateFields = (props: TextInputProps[]) => {
  let fields = props.map((fieldProps, i) => {
    return <TextInput key={i} {...fieldProps} />;
  });

  return fields;
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e)
  let res = await fetch(`${baseApi}`,{
    method: 'POST',
    body: JSON.stringify({

    })
  })
}

export default function Form ({title, fields, description = null, destination}: formProps) {
  return (
  <form className={styles.card} onSubmit={handleSubmit}>
    <h2>{title}</h2>
    <p>{description}</p>
    {generateFields(fields)}
    <button className={styles.button}>Submit</button>
  </form>
  );
}
