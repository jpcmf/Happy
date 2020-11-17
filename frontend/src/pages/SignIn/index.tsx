import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container } from './styles';

import { Sidebar, Input } from '../../components';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Sidebar />

      <main>
        <Form
          onSubmit={() => {}}
          ref={formRef}
          className="create-orphanage-form"
        >
          <fieldset>
            <legend>Login</legend>
          </fieldset>
        </Form>
      </main>
    </Container>
  );
};

export default SignIn;
