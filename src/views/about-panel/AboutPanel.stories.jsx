import React from 'react';
import { storiesOf } from '@storybook/react';

import { AboutPanel } from './AboutPanel';

storiesOf('views/AboutPanel', module)
  .add('default', () => {
    return (
      <AboutPanel />
    )
  });
