import React from 'react';
import { storiesOf } from '@storybook/react';

import { CVPanel } from './CVPanel';

storiesOf('views/CVPanel', module)
  .add('default', () => {
    return (
      <CVPanel />
    )
  });
