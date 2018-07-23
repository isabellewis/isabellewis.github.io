import React from 'react';
import { storiesOf } from '@storybook/react';

import { MenuPanel } from './MenuPanel';

storiesOf('views/MenuPanel', module)
  .add('default', () => {
    return (
      <MenuPanel />
    )
  });
