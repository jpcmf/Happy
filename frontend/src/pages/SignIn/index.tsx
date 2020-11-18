import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationsErrors';

import SignInFormData from './interface';

import { Container, Button } from './styles';

import { Sidebar, Input } from '../../components';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O campo E-mail é de preenchimento obrigatório.')
            .email(
              'O endereço usado no campo E-mail não é um endereço de e-mail válido.',
            ),
          password: Yup.string().required(
            'O campo Senha é de preenchimento obrigatório.',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email: data.email, password: data.password });

        history.push('/orphanages/create');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Sidebar />

      <main>
        <Form
          onSubmit={handleSubmit}
          ref={formRef}
          className="create-orphanage-form"
        >
          <fieldset>
            <legend>Login</legend>

            <div className="input-block">
              <Input
                name="email"
                label="E-mail"
                placeholder="Insira seu e-mail"
              />
            </div>

            <div className="input-block">
              <Input
                name="password"
                label="Senha"
                placeholder="Insira sua senha"
                type="password"
              />
            </div>
          </fieldset>

          <button className="login-button" type="submit">
            Entrar
          </button>

          <Button to="/orphanages/create">create</Button>
        </Form>
      </main>
    </Container>
  );
};

export default SignIn;
