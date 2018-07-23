import React from 'react';
import { shallow } from 'enzyme';
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


describe('PortfolioBox', () => {
	let component;

	beforeEach(() => {
		component = shallow(<PortfolioBox projectData={projectData} />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});