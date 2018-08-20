import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { PortfolioPanel } from './PortfolioPanel';

describe('views/PortfolioPanel', () => {
	let component;

	beforeEach(() => {
		component = shallow(<PortfolioPanel />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});