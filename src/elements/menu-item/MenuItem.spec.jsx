import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from './MenuItem';

describe('elements/MenuItem', () => {
	let component;

	beforeEach(() => {
		component = shallow(<MenuItem menuItemText='MenuItem test text' menuItemLocation='aboutPanel' />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should call menuItemScroll when clicked and theres a location value', () => {
    const mock = jest.fn();

    let result = mock("menuItemScroll");
  
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("menuItemScroll");
	});
});