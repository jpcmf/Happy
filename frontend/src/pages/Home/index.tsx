import React from 'react';

import { Container, Wrapper, Main, Location, Button } from './styles';

import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as ArrowLeftImg } from '../../assets/arrow-left.svg';

const Home: React.FC = () => {
  return (
    <>
      <Container className="container-lp">
        <Wrapper>
          <LogoImg />

          <Main>
            <h1>Leve felicidade para o mundo</h1>
            <p>
              Visite uma <strong>instituição de acolhimento</strong> e mude o
              dia de muitas crianças.
            </p>
          </Main>

          <Location>
            <strong>Curitiba</strong>
            <span>Paraná</span>
          </Location>

          <Button to="/app">
            <ArrowLeftImg />
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
