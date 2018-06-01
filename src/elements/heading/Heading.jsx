import React from 'react';
import styled from 'styled-components';

export const HeadingOne = styled.h1`
	font-size: 200px;
	margin: 40px 20px;
	overflow-wrap: break-word;
	word-break: break-all;
`;

export const Heading = ({
	title,
}) => (
	<HeadingOne className="heading-text">
		{ title }
	</HeadingOne>
);
