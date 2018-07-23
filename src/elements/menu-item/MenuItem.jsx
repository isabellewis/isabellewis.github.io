import React, { PureComponent } from 'react';
import styled from 'styled-components';

const MenuItemWrapper = styled.li`
	color: #001;
	cursor: pointer;
	display: block;
	font-family: 'Archivo Narrow', sans-serif;
	font-size: 15px;
	list-style-type: none;
	padding: 20px 10px;
	transition: color .5s;

	:hover {
		color: #78cedb;
	}

	@media only screen and (min-width: 576px) {
		display: inline-block;
		padding: 0 30px;
	}
`;


export class MenuItem extends PureComponent {
	constructor(props) {
		super(props);

		this.menuItemScroll = this.menuItemScroll.bind(this);
	}

	menuItemScroll () {
		const {
			menuItemLocation
		} = this.props;

		document.getElementById(menuItemLocation) &&
		document.getElementById(menuItemLocation).scrollIntoView({
			behavior: 'smooth'
		});
	};

	render () {
		const {
			menuItemText,
		} = this.props;
	
		return (
			<MenuItemWrapper onClick={this.menuItemScroll} onClick = {this.menuItemScroll}>
				<a>
					{ menuItemText }
				</a>
			</MenuItemWrapper>
		);
	}
}	
