import React from 'react';
import { storiesOf } from '@storybook/react';

import { PortfolioBox } from './PortfolioBox';

const projectData = {
  projects: [
    {
      name: '0React Project Name Goes Here',
      technologies: 'HTML, CSS, JavaScript, Webpack',
      background: '#ffaeae',
      github: 'https://github.com/isabellewis/isabellewis',
      livewebsite: 'https://github.com/isabellewis/isabellewis',
      description: 'Descriptions will go here'
    },
    {
      name: '1React Project Name Goes Here',
      technologies: 'HTML, CSS, JavaScript, Webpack',
      background: '#ffaeae',
      github: 'https://github.com/isabellewis/isabellewis',
      livewebsite: 'https://github.com/isabellewis/isabellewis',
      description: 'Descriptions will go here'
    },
    {
      name: '2React Project Name Goes Here',
      technologies: 'HTML, CSS, JavaScript, Webpack',
      background: '#ffaeae',
      github: 'https://github.com/isabellewis/isabellewis',
      livewebsite: 'https://github.com/isabellewis/isabellewis',
      description: 'Descriptions will go here'
    },
    {
      name: '3React Project Name Goes Here',
      technologies: 'HTML, CSS, JavaScript, Webpack',
      background: '#ffaeae',
      github: 'https://github.com/isabellewis/isabellewis',
      livewebsite: 'https://github.com/isabellewis/isabellewis',
      description: 'Descriptions will go here'
    },
    {
      name: '4React Project Name Goes Here',
      technologies: 'HTML, CSS, JavaScript, Webpack',
      background: '#ffaeae',
      github: 'https://github.com/isabellewis/isabellewis',
      livewebsite: 'https://github.com/isabellewis/isabellewis',
      description: 'Descriptions will go here'
    }
  ]
}

storiesOf('components/PortfolioBox', module)
  .add('default', () => {
    return (
      <PortfolioBox projectData={projectData} />
    )
  });
