import { createGlobalStyle } from 'styled-components';

import 'leaflet/dist/leaflet.css';
import colors from './colors';
import './animations.css';

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

    html {
      scroll-behavior: smooth;
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
      font: 600 16px 'Nunito', sans-serif;
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

    .form-error {
      animation: 1s ease-out 0s 1 slideInFromLeft;
      color: ${colors.danger};
      display: block;
      font-size: 12px;
      margin-top: 5px;
      padding-right: 5px;
      text-align: right;
    }
`;
