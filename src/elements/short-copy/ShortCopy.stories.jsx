import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

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
