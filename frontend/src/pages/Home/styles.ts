import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

import landingImg from '../../assets/landing.png';

export const Container = styled.div`
  align-items: center;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const Wrapper = styled.div`
  align-items: flex-start;
  background: url(${landingImg}) no-repeat 80% center;
  background-size: 48%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  max-height: 650px;
  max-width: 1100px;
  position: relative;
  width: 100%;
`;

export const Main = styled.div`
  max-width: 350px;
  padding-bottom: 50px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
    margin-top: 40px;
  }
`;

export const Location = styled.div`
  font-size: 24px;
  line-height: 34px;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;

  strong {
    display: block;
    font-weight: 800;
  }
`;

export const Button = styled(Link)`
  align-items: center;
  background-color: ${colors.yellow};
  border-radius: 30px;
  bottom: 0;
  display: flex;
  height: 80px;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 80px;
  transition: all 300ms ease;

  svg {
    fill: ${colors.marrom};
  }

  &:hover {
    background-color: ${colors.blue};

    svg {
      fill: ${colors.mediumBlue};
    }
  }
`;
