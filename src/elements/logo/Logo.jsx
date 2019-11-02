import React from 'react';
import {
  LogoText
} from './Logo.style';

export const Logo = ({
  label
}) => (
	<LogoText href='/'>
		{ label }
	</LogoText>
);