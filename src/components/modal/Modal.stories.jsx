import React from 'react';
import { storiesOf } from '@storybook/react';

import { Modal } from './Modal';

storiesOf('components/Modal', module)
  .add('default', () => {
    return (
      <Modal open="true" />
    )
  });
