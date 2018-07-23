import React from 'react';
import { storiesOf } from '@storybook/react';

import { Footer } from './Footer';

storiesOf('views/Footer', module)
  .add('default', () => {
    return (
      <Footer />
    )
  });
