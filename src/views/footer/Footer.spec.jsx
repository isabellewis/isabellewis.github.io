import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('views/Footer', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Footer />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});