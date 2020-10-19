import React, { useRef, useEffect } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputMaskProps extends InputProps {
  name: string;
  label?: string;
}

const InputMask: React.FC<InputMaskProps> = ({ name, label, ...rest }) => {
  const inputMaskRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputMaskRef.current,
      path: 'value',
      setValue(ref, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <ReactInputMask
        ref={inputMaskRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span className="form-error">{error}</span>}
    </Container>
  );
};

export default InputMask;
