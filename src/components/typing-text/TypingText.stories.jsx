import React from 'react';
import { storiesOf } from '@storybook/react';

import { TypingText } from './TypingText';

storiesOf('components/TypingText', module)
  .add('default', () => {
    return (
      <TypingText
        textValues={['value1', 'value2', 'value3']}
      />
    )
  });
