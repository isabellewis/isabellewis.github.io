import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Heading } from './Heading';

describe('Heading', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Heading title='Heading test text' />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});