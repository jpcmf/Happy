import React from 'react';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs'; //eslint-disable-line
import { storiesOf } from '@storybook/react'; //eslint-disable-line
import { Button } from '../../components';

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Primary', (args: any) => <Button {...args}>Primary</Button>);
