import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

import landingImg from '../../assets/landing-v2.png';

import { device } from '../../styles/device';

export const Container = styled.div`
  align-items: center;
  /* background: var(--gradient-landing-page); */
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const Wrapper = styled.div`
  animation: 1000ms ease-out 0s 1 fadeIn;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-height: 650px;
  max-width: 1300px;
  position: relative;
  width: 100%;

  padding: 0 32px;

  @media ${device.laptop} {
    align-items: flex-start;
    background: url(${landingImg}) no-repeat 72% center;
    background-size: 48%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Main = styled.div`
  max-width: 350px;
  padding-bottom: 32px;
  padding-top: 32px;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
    padding-bottom: 50px;
    padding-top: 0;
  }

  h1 {
    font-size: 40px;
    font-weight: 900;
    line-height: 40px;

    @media ${device.laptop} {
      font-size: 76px;
      line-height: 70px;
    }
  }

  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    margin-top: 40px;

    strong {
      border-bottom: solid 1px;
    }

    /* @media ${device.laptop} {
      font-size: 24px;
      line-height: 34px;
      margin-top: 40px;
    } */
  }
`;

export const Location = styled.div`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 32px;

  strong {
    display: block;
    font-weight: 800;
  }

  @media ${device.laptop} {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 0;
    position: absolute;
    right: 32px;
    text-align: right;
    top: 0;
  }
`;

export const Button = styled(Link)`
  align-items: center;
  background-color: var(--button-color-actions);
  border-radius: 50%;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
  transition: all 300ms ease;

  svg {
    fill: ${colors.white};
  }

  &:hover {
    background-color: var(--button-hover-color-actions);

    svg {
      fill: ${colors.white};
    }
  }

  @media ${device.laptop} {
    width: 80px;
    height: 80px;
    position: absolute;
    right: 32px;
    bottom: 0;
  }
`;
