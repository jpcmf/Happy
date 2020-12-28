import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

export const Aside = styled.aside`
  animation: 700ms ease 0s 1 slideInFromLeft100;
  align-items: center;
  background: var(--gradient-landing-page);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 32px 24px;
  position: fixed;

  svg {
    width: 48px;
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
  animation: float 6s ease-in-out infinite;
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
