import styled from 'styled-components';

const HeadingTwo = styled.h2`
	color: #3f3f3f;
	cursor: default;
	font-family: "Courier New", Courier, monospace;
	font-size: 20px;
	font-weight: 200;
	margin: 0 0 0 auto;
	min-height: 30px;
	min-width: 5px;
	overflow: hidden;
	white-space: nowrap;

	@media only screen and (min-width: 576px) {
		font-size: 30px;
		min-height: 40px;
	}

	@media only screen and (min-width: 768px) {
		font-size: 40px;
		min-height: 50px;
	}

	@media only screen and (min-width: 992px) {
		font-size: 50px;
		min-height: 70px;
	}
`;

export {
  HeadingTwo
};