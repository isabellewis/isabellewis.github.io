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

	it('should change state when menu toggle is called', () => {
		component.instance().setState({
			menuOpen: false
		});

		component.instance().openMenuToggle();

		expect(component.instance().state.menuOpen === true);
	});
});