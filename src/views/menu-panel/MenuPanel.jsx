import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components';

const MenuWrapper = styled.nav`
	background: #fff;
	opacity: .85;
	padding: 10px 15px;
	width: 100%;

	@media only screen and (min-width: 576px) {
		padding: 10px 40px 10px 20px;
	}
`;

export const MenuPanel = () => (
	<MenuWrapper>
		<Menu />
	</MenuWrapper>
);
