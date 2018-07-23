import React from 'react';
import { storiesOf } from '@storybook/react';

import { PortfolioPanel } from './PortfolioPanel';

storiesOf('views/PortfolioPanel', module)
  .add('default', () => {
    return (
      <PortfolioPanel />
    );
  });