import React from 'react';
import { storiesOf } from '@storybook/react';

import { HeroPanel } from './HeroPanel';

storiesOf('views/HeroPanel', module)
  .add('default', () => {
    return (
      <HeroPanel />
    )
  });
