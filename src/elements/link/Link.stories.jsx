import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Link } from './Link';

storiesOf('elements/Link', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Link
        label={text('Label', 'Link text')}
        link={text('Href', 'https://www.google.com')}
      />
    )
  });
