import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { TypingTextHeading } from './TypingTextHeading';

storiesOf('elements/TypingTextHeading', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <TypingTextHeading
        title={text('Title', 'Typing Text Heading')}
      />
    )
  });
