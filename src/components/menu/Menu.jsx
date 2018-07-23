import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuItem } from '../../elements';
import { SocialMedia } from '../';

const MenuList = styled.ul`
	display: inline-block;
	margin: 0 0 0 auto;
  overflow-x: scroll;
	padding: 0;
	vertical-align: middle;
  white-space: nowrap;

	&.active {
		display: block;
		overflow: hidden;

		@media only screen and (min-width: 576px) {
			display: inline-block;
		}
	}

	&.inactive {
		display: none;

		@media only screen and (min-width: 576px) {
			display: inline-block;
		}
	}
`;

const MenuListWrapper = styled.div`
	text-align: right;

	@media only screen and (min-width: 576px) {
		text-align: left;
	}
`;

const MenuToggleIcon = styled.i`
	cursor: pointer;
	display: inline-block;
	vertical-align: middle;

	@media only screen and (min-width: 576px) {
		display: none;
	}
`;

export class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false
		}

		this.openMenuToggle = this.openMenuToggle.bind(this);
	}

	openMenuToggle() {
		this.setState (
			{
				menuOpen: !this.state.menuOpen
			}
		);
	}

	render() {
		return (
			<MenuListWrapper>
				<MenuToggleIcon className="material-icons close" onClick={this.openMenuToggle}>{this.state.menuOpen ? 'close' : '' }</MenuToggleIcon>
				<MenuList className={this.state.menuOpen ? 'active' : 'inactive'} onClick={this.openMenuToggle}>
					<MenuItem menuItemText="home" menuItemLocation="heroPanel" />
					<MenuItem menuItemText="about" menuItemLocation="aboutPanel" />
					<MenuItem menuItemText="portfolio" menuItemLocation="portfolioPanel" />
					<MenuItem menuItemText="cv" menuItemLocation="cvPanel" />
				</MenuList>
				<MenuToggleIcon className="material-icons menu" onClick={this.openMenuToggle}>{this.state.menuOpen ? '' : 'menu' }</MenuToggleIcon>
				<SocialMedia theme='mainMenu' />
			</MenuListWrapper>
		);
	}
}
