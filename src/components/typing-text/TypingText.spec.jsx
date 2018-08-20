import React from 'react';
import { shallow } from 'enzyme';
import { TypingText } from './TypingText';

describe('views/TypingText', () => {
	let component;

	beforeEach(() => {
		component = shallow(<TypingText textValues={['Hello', 'TestValue1', 'TestValue2']} />);
	});

	it('should match the snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should delete the next letter', () => {
		component.instance().setState({
			textIndex: 0,
			textDisplayed: 'Hel',
			deleting: true,
			writing: false
		});

		component.instance().textChange();
		expect(component.instance().state.textIndex).toEqual(0);
		expect(component.instance().state.textDisplayed).toEqual('He');
		expect(component.instance().state.deleting).toEqual(true);
		expect(component.instance().state.writing).toEqual(false);
	});

	it('should change the state to write when the word has been deleted', () => {
		component.instance().setState({
			textIndex: 0,
			textDisplayed: '',
			deleting: true,
			writing: false
		});

		component.instance().textChange();
		expect(component.instance().state.textIndex).toEqual(1);
		expect(component.instance().state.textDisplayed).toEqual('T');
		expect(component.instance().state.deleting).toEqual(false);
		expect(component.instance().state.writing).toEqual(true);
	});

	it('should handle the nextIndex when last word in array has been animated', () => {
		component.instance().setState({
			textIndex: 2,
			textDisplayed: '',
			deleting: true,
			writing: false
		});

		component.instance().textChange();
		expect(component.instance().state.textIndex).toEqual(0);
		expect(component.instance().state.textDisplayed).toEqual('H');
		expect(component.instance().state.deleting).toEqual(false);
		expect(component.instance().state.writing).toEqual(true);
	});

	it('should write the next letter when in the writing state', () => {
		component.instance().setState({
			textIndex: 0,
			textDisplayed: 'Hel',
			deleting: false,
			writing: true
		});

		component.instance().textChange();
		expect(component.instance().state.textIndex).toEqual(0);
		expect(component.instance().state.textDisplayed).toEqual('Hell');
		expect(component.instance().state.deleting).toEqual(false);
		expect(component.instance().state.writing).toEqual(true);
	});

	it('should call endAnimation when finished typing', () => {
		component.instance().setState({
			textIndex: 0,
			textDisplayed: 'Hello',
			deleting: false,
			writing: true
		});

		component.instance().textChange();
		expect(component.instance().state.textIndex).toEqual(0);
		expect(component.instance().state.animating).toEqual(false);
		expect(component.instance().state.textDisplayed).toEqual('Hello');
		expect(component.instance().state.deleting).toEqual(false);
		expect(component.instance().state.writing).toEqual(false);
	});

	it('should set the correct state when startAnimation is called', () => {
		component.instance().setState({
			animating: false,
			textIndex: 0,
			textDisplayed: 'Hello',
			deleting: false,
			writing: false
		});

		component.instance().startAnimation();
		expect(component.instance().state.textIndex).toEqual(0);
		expect(component.instance().state.animating).toEqual(true);
		expect(component.instance().state.textDisplayed).toEqual('Hello');
		expect(component.instance().state.deleting).toEqual(true);
		expect(component.instance().state.writing).toEqual(false);
	});

	it('should not change state if animating is true', () => {
		component.instance().setState({
			animating: true,
			textIndex: 0,
			textDisplayed: 'Hello',
			deleting: false,
			writing: false
		});

		component.instance().startAnimation();
		expect(component.instance().state.textIndex).toEqual(0);
		expect(component.instance().state.animating).toEqual(true);
		expect(component.instance().state.textDisplayed).toEqual('Hello');
		expect(component.instance().state.deleting).toEqual(false);
		expect(component.instance().state.writing).toEqual(false);
	});
});
