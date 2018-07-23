import React from 'react';
import styled from 'styled-components';

import { SectionHeading } from '../../elements';
import { PortfolioScroll, PortfolioBox } from '../../components';

const PortfolioWrapper = styled.div`
  height: 100%;
  padding: 30px 0;
`;

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

export const PortfolioPanel = () => (
  <PortfolioWrapper id="portfolioPanel">
    <PortfolioBox projectData={projectData} />
  </PortfolioWrapper>
);
