import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from './Menu';

describe('Menu', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Menu title='Menu test text' />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});