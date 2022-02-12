import React from 'react';

import TextInput, {TextInputProps} from '../TextInput'

export function generateFields(props: TextInputProps[]) {
  let fields = props.map((fieldProps, i) => {
    return <TextInput key={i} {...fieldProps} />;
  });

  return fields;
}
