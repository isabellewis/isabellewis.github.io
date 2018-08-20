import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MenuPanel } from './MenuPanel';

describe('views/MenuPanel', () => {
	let component;

	beforeEach(() => {
		component = shallow(<MenuPanel />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});