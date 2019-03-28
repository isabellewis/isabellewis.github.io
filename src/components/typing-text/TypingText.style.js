import styled from 'styled-components';

const TypingTextWrapper = styled.div`
	animation: none;
	border-right: 6px solid transparent;
	display: inline-block;
	padding-right: 8px;
	
	@keyframes blink {
		from, to { border-color: transparent }
		50% { border-color: #3f3f3f; }
	}


	@media only screen and (min-width: 576px) {
		animation: .9s blink step-end infinite;
	}
`;

export {
  TypingTextWrapper,
};