import React from 'react';
import styled from 'styled-components';

export const ShortCopyP = styled.p`
	font-family: 'Barlow', sans-serif;
	font-size: 16px;
`;

export const ShortCopy = ({
	shortCopyText
}) => (
	<ShortCopyP className='short-copy-text'>
		{ shortCopyText }
	</ShortCopyP>
);
