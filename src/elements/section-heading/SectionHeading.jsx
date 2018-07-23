import React from 'react';
import styled from 'styled-components';

const HeadingTwo = styled.h2`
  font-family: 'Archivo Narrow', sans-serif;
	font-size: 20px;
	font-weight: 200;
	margin: 0;
`;

export const SectionHeading = ({
	title
}) => (
	<HeadingTwo>
		{ title }
	</HeadingTwo>
);
