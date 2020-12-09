import styled from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.button`
  background-color: ${colors.green};
  border-radius: 20px;
  border: 0;
  color: ${colors.white};
  font-weight: 800;
  height: 64px;
  margin-top: 16px;
  padding: 0 16px;
  transition: background-color 300ms ease;
  width: 100%;

  &:hover {
    background-color: ${(props): string =>
      props && shade(0.2, colors.greenLight)};
  }
`;
