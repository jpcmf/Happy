import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import colors from '../../../styles/colors';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription?: number;
}

const toastTypeVariations = {
  info: css`
    background-color: ${colors.lightBlue};
    color: ${colors.blueDark};
  `,
  success: css`
    background-color: ${colors.success};
    color: ${colors.white};
  `,
  error: css`
    background-color: ${colors.danger};
    color: ${colors.white};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  padding: 16px 30px 16px 16px;
  position: relative;
  width: 360px;

  + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 2px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      font-size: 14px;
      line-height: 20px;
      margin-top: 4px;
      opacity: 0.8;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    color: inherit;
    opacity: 0.6;
    position: absolute;
    right: 16px;
    top: 18px;
  }

  ${(props) =>
    !props.hasdescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
