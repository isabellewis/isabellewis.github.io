// import React from 'react';
// import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
// import { PortfolioItem } from './PortfolioItem';

// describe('elements/PortfolioItem', () => {
// 	let component;

// 	beforeEach(() => {
// 		component = shallow(<PortfolioItem portfolioItemText='PortfolioItem test text' />);
// 	});

// 	it('should match the snapshot', () => {
// 		expect(component).toMatchSnapshot();
// 	});

// 	it('should match the snapshot when long text is applied', () => {
// 		component = shallow(<PortfolioItem portfolioItemText='PortfolioItem test text test text test text test text test text test text test text test text test text test text' />);
// 		expect(component).toMatchSnapshot();
// 	});

// 	//TO DO - fix this
// 	// it('should toggle the modal when clicked', () => {
// 	// 	component = shallow(<PortfolioItem portfolioItemText='PortfolioItem test text' />);
// 	// 	expect(component).toMatchSnapshot();
// 	// });
// });