import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { MenuItem } from './MenuItem';

storiesOf('elements/MenuItem', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <MenuItem
        menuItemText={text('Menu Item Text', 'Page1')}
        menuItemLocation="aboutPanel"
      />
    )
  });