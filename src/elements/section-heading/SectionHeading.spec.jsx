import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { SectionHeading } from './SectionHeading';

describe('elements/Section Heading', () => {
	let component;

	beforeEach(() => {
		component = shallow(<SectionHeading title='Section Heading test text' />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should match the snapshot when no title is given', () => {
		expect(component).toMatchSnapshot();
	});
});