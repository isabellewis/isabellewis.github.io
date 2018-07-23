import React from 'react';
import { storiesOf } from '@storybook/react';

import { Menu } from './Menu';

storiesOf('components/Menu', module)
  .add('default', () => {
    return (
      <Menu />
    )
  });
