import React from 'react';

import { Container, Wrapper, Main, Location, Button } from './styles';

import { ReactComponent as LogoImg } from '../../assets/logo.svg';
import { ReactComponent as ArrowLeftImg } from '../../assets/arrow-left.svg';

// import { ReactComponent as LandingImg } from '../../assets/landing.svg';
// import { ReactComponent as MarkerImg } from '../../assets/marker.svg';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <LogoImg />

          <Main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </Main>

          <Location>
            <strong>Curitiba</strong>
            <span>Paraná</span>
          </Location>

          <Button to="/">
            <ArrowLeftImg />
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
