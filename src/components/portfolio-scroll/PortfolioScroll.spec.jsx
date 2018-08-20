import React from 'react';
import { shallow } from 'enzyme';
import { PortfolioScroll } from './PortfolioScroll';

describe('PortfolioScroll', () => {
	let component;

	beforeEach(() => {
		component = shallow(<PortfolioScroll />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});