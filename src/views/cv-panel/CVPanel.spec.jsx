import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { CVPanel } from './CVPanel';

describe('views/CVPanel', () => {
	let component;

	beforeEach(() => {
		component = shallow(<CVPanel />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});