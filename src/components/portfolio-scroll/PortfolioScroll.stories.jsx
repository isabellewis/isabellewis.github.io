import React from 'react';
import { storiesOf } from '@storybook/react';

import { PortfolioScroll } from './PortfolioScroll';

storiesOf('components/PortfolioScroll', module)
  .add('default', () => {
    return (
      <PortfolioScroll />
    )
  });
