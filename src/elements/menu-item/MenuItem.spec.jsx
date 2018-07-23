import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from './MenuItem';

describe('MenuItem', () => {
	let component;

	beforeEach(() => {
		component = shallow(<MenuItem menuItemText='MenuItem test text' menuItemLocation='aboutPanel' />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});