import React from 'react';
import styled from 'styled-components';

export const ShortCopyP = styled.p`
	font-family: 'Archivo Narrow', sans-serif;
	font-size: 18px;
`;

export const ShortCopy = ({
	shortCopyText
}) => (
	<ShortCopyP className='short-copy-text'>
		{ shortCopyText }
	</ShortCopyP>
);
