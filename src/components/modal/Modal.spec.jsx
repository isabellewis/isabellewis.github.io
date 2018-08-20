import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from './Modal';

describe('Modal', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Modal open={true} text='Modal test text' />);
	});

	it('should match the snapshot when open', () => {
		expect(component).toMatchSnapshot();
	});

	it('should match the snapshot when closed', () => {
		component = shallow(<Modal open={false} text='Modal test text' />);
		expect(component).toMatchSnapshot();
	});
});