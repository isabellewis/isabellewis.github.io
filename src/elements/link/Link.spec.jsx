import React from 'react';
import { shallow } from 'enzyme';
import { Link } from './Link';

describe('elements/Link', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Link label='Link test text' />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});