import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import { ShortCopy } from './ShortCopy';

storiesOf('elements/ShortCopy', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <ShortCopy
        shortCopyText={text('Title', 'Short Copy')}
      />
    )
  });
