import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import Toggle, { ToggleProps } from 'react-toggle';

import { Container } from './styles';

interface ToggleToggleProps extends ToggleProps {
  name: string;
  label?: string;
}

const ToogleSwitch: React.FC<ToggleToggleProps> = ({
  name,
  label,
  ...rest
}) => {
  const toggleRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: toggleRef.current,
      getValue: (ref: any) => {
        return ref.props.checked;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Toggle
        id={fieldName}
        ref={toggleRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span>{error}</span>}
    </Container>
  );
};

export default ToogleSwitch;
