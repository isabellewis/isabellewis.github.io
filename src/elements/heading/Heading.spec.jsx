import React from 'react';
import { shallow } from 'enzyme';
import { Heading } from './Heading';

describe('elements/Heading', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Heading title='Heading test text' />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should match the snapshot when no title is given', () => {
		component = shallow(<Heading />);
		expect(component).toMatchSnapshot();
	});
});