import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Aside = styled.aside`
  align-items: center;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 32px 24px;
  position: fixed;

  svg {
    width: 48px;
  }

  footer a,
  footer button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12afcb;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer a:hover,
  footer button:hover {
    background: #17d6eb;
  }
`;

export const MarkerWrapper = styled(Link)`
  animation: float 6s ease-in-out infinite;
`;
