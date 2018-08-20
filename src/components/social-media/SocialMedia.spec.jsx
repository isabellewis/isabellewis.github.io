import React from 'react';
import { shallow } from 'enzyme';
import { SocialMedia } from './SocialMedia';


describe('SocialMedia', () => {
	let component;

	beforeEach(() => {
		component = shallow(<SocialMedia theme="footer" />);
	});

	it('should match the snapshot for footer', () => {
		expect(component).toMatchSnapshot();
	});

	it('should match the snapshot for header', () => {
    component = shallow(<SocialMedia theme="header" />);
    expect(component).toMatchSnapshot();
	});
});