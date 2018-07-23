import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { SectionHeading } from './SectionHeading';

storiesOf('elements/SectionHeading', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <SectionHeading
        title={text('Section Heading Text', 'Hello')}
      />
    )
  });
