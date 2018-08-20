import React from 'react';
import {
  LinkA
} from './Link.style';

export const Link = ({
  link,
  linkClass,
  label
}) => (
	<LinkA href={link} className={linkClass} target='_blank'>
		{ label }
	</LinkA>
);