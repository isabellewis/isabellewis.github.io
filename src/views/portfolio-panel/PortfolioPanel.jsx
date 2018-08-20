import React from 'react';
import styled from 'styled-components';

import { PortfolioBox } from '../../components';

const PortfolioWrapper = styled.div`
  min-height: 100%;
  padding: 30px 0;
`;

const projectData = {
  projects: [
    {
      name: '0 First react project',
      technologies: 'HTML, CSS, JavaScript, Webpack',
      github: 'https://github.com/isabellewis/isabellewis',
      livewebsite: 'https://github.com/isabellewis/isabellewis',
      description: 'This project is all about how to do this in react'
    },
    {
      name: '1 Second project',
      technologies: 'HTML, CSS, JavaScript',
      github: 'https://github.com/isabellewis/isabellewis',
      livewebsite: 'https://github.com/isabellewis/isabellewis',
      description: 'This project is using web fundamentals to build something cool'
    },
    {
      name: '2 Third project',
      technologies: 'HTML, CSS, JavaScript, Webpack',
      github: 'https://github.com/isabellewis/isabellewis',
      livewebsite: 'https://github.com/isabellewis/isabellewis',
      description: 'Descriptions will go here'
    },
    {
      name: '3 Fourth project here',
      technologies: 'HTML, CSS, JavaScript, Webpack',
      github: 'https://github.com/isabellewis/isabellewis',
      livewebsite: 'https://github.com/isabellewis/isabellewis',
      description: 'Descriptions will go here'
    },
    {
      name: '4 The fifth and final project',
      technologies: 'HTML, CSS, JavaScript, Webpack',
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
