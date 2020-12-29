import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import { device } from '../../styles/device';

export const Aside = styled.aside`
  align-items: center;
  animation: 700ms ease 0s 1 slideInFromLeft100;
  background: var(--gradient-landing-page);
  display: flex;
  justify-content: flex-start;
  padding: 14px 24px;
  width: 100%;

  @media ${device.laptop} {
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 32px 24px;
    position: fixed;
    width: auto;
  }

  a {
    display: none;

    svg {
      width: 48px;
    }

    @media ${device.laptop} {
      display: block;
    }
  }

  footer {
  }

  footer a,
  footer .button {
    align-items: center;
    background: var(--button-color-actions);
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    transition: background-color 0.2s;
    width: 48px;
  }

  footer a:hover,
  footer .button:hover {
    background: var(--button-hover-color-actions);
  }
`;

export const MarkerWrapper = styled(Link)`
  @media ${device.laptop} {
    animation: float 6s ease-in-out infinite;
  }
`;

export const LogoutButton = styled.button`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 50%;
  border: 2px solid ${colors.white};
  cursor: pointer;
  display: flex;
  height: 3rem;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.3rem;
  /* position: absolute; */
  /* right: 1.5rem; */
  /* top: 1.5rem; */
  transition: all 300ms ease;
  width: 3rem;
  z-index: 1;

  &:hover {
    opacity: 0.5;
  }

  svg {
    stroke: ${colors.danger};
  }
`;
