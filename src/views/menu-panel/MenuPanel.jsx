import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components';
import { Logo } from '../../elements';

const MenuWrapper = styled.nav`
	background: #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
	opacity: .85;
	padding: 40px 15px 10px;
	width: 100%;

	@media only screen and (min-width: 576px) {
		padding: 10px 40px 10px 40px;
	}
`;

export const MenuPanel = () => (
	<MenuWrapper>
    <Logo label='ISABEL LEWIS' />
		<Menu />
	</MenuWrapper>
);
