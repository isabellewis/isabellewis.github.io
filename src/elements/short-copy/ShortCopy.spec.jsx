import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ShortCopy } from './ShortCopy';

describe('ShortCopy', () => {
	let component;

	beforeEach(() => {
		component = shallow(<ShortCopy title='ShortCopy test text' />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});