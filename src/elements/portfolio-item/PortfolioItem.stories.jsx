import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { PortfolioItem } from './PortfolioItem';

storiesOf('elements/PortfolioItem', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <PortfolioItem
        portfolioItemText={text('Portfolio Item Text', 'Hello')}
        portfolioItemLink='https://github.com/isabellewis'
      />
    )
  });
