import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  small?: string;
}

const Input: React.FC<TextAreaProps> = ({ name, label, small, ...rest }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: textAreaRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      {label && (
        <label htmlFor={fieldName}>
          {label}
          <span>{small}</span>
        </label>
      )}

      <textarea
        id={fieldName}
        ref={textAreaRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span className="form-error">{error}</span>}
    </Container>
  );
};

export default Input;
