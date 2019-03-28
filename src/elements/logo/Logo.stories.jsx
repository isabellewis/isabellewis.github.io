import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Logo } from './Logo';

storiesOf('elements/LogoText', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Logo
        label={text('Label', 'Logo text')}
      />
    )
  });
