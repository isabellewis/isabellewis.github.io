import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { HeroPanel } from './HeroPanel';

describe('views/HeroPanel', () => {
	let component;

	beforeEach(() => {
		component = shallow(<HeroPanel />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});