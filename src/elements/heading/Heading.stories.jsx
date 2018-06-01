import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Heading } from './Heading';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Heading
        title={text('Title', 'Heading')}
      />
    )
  });
