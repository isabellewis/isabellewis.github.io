import styled from 'styled-components';

const HeadingOne = styled.h1`
	cursor: default;
	font-family: "Courier New", Courier, monospace;
	font-size: 50px;
	font-weight: 200;
	margin: 0 0 0 auto;
	min-height: 70px;
	min-width: 5px;
	overflow: hidden;
	white-space: nowrap;

	@media only screen and (min-width: 576px) {
		font-size: 60px;
		min-height: 80px;
	}

	@media only screen and (min-width: 768px) {
		font-size: 70px;
		min-height: 90px;
	}

	@media only screen and (min-width: 992px) {
		font-size: 90px;
		min-height: 110px;
	}
`;

export {
  HeadingOne
};