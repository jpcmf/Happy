import { create } from '@storybook/theming/create';

import happyLogo from '../src/assets/logo.svg';

export default create({
  base: 'light',
  brandTitle: 'Happy Storybook',
  brandUrl: 'https://happyhappy.netlify.app',
  brandImage: happyLogo,
});
