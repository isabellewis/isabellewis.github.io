import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import { SocialMedia } from './SocialMedia';

const themes = {
  header: 'header',
  footer: 'footer'
}

storiesOf('components/SocialMedia', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const theme = select ('theme', themes, 'header');

    return (
      <SocialMedia theme={theme} />
    )
  });
