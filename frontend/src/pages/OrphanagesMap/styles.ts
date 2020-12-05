import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
  display: flex;
`;

export const Aside = styled.aside`
  animation: 750ms ease 0s 1 slideInFromLeft100;
  background: var(--gradient-landing-page);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 80px;
  width: 440px;

  header {
    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }

    svg {
      animation: float 6s ease-in-out infinite;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    line-height: 28px;

    strong {
      font-weight: 800;
    }
  }
`;

export const MapWrapper = styled.div`
  animation: 5000ms ease-out 0s 1 fadeIn;
  flex: 1;
  height: 100%;
  width: 100%;

  > div {
    z-index: 0;
  }

  .map-popup {
    .leaflet-popup-content-wrapper {
      background-color: ${colors.white};
      border-radius: 15px;
      box-shadow: none;
    }

    .leaflet-popup-content {
      align-items: center;
      color: ${colors.darkBlue};
      display: flex;
      font-size: 16px;
      font-weight: 700;
      justify-content: space-between;
      margin: 6px 8px 6px 15px;
      max-width: 250px;

      a {
        align-items: center;
        background-color: ${colors.midBlue};
        border-radius: 12px;
        box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
        display: flex;
        height: 40px;
        justify-content: center;
        width: 40px;
        flex-shrink: 0;
      }
    }

    .leaflet-popup-tip-container {
      display: none;
    }
  }
`;

export const Button = styled(Link)`
  align-items: center;
  background-color: ${colors.midBlue};
  border-radius: 20px;
  bottom: 40px;
  display: flex;
  height: 64px;
  justify-content: center;
  position: absolute;
  right: 40px;
  transition: all 300ms ease;
  width: 64px;
  z-index: 1;

  &:hover {
    background-color: ${colors.lightBlue};
  }
`;
