import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  input {
    ${(props) =>
      props.isErrored &&
      css`
        border-color: ${colors.danger} !important;
      `}
  }
`;
