import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from './Modal';

describe('Modal', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Modal title='Modal test text' />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});