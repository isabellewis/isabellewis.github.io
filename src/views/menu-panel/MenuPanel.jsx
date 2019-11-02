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
	width: 100%;

  @media (min-width: 576px) {
    justify-content: left;
  }
`;

export const MenuPanel = () => (
	<MenuWrapper>
    <Logo label='ISABEL LEWIS' />
		<Menu />
	</MenuWrapper>
);
