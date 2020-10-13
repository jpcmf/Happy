import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
    }

    *:focus {
      outline: 0;
    }

    html, body, #root {
      height: 100%;
    }

    body {
      -webkit-font-smoothing: antialiased !important;
      background-color: ${colors.gray};
      color: ${colors.white};
    }

    body, input, button, textarea {
      font: 600 18px 'Nunito', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
    }
`;
