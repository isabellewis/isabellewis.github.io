import styled from 'styled-components';

const HoverTyping = styled.div`
	animation: none;
	border-right: 8px solid transparent;
	display: inline-block;
	padding-right: 8px;
	
	@keyframes blink {
		from, to { border-color: transparent }
		50% { border-color: #000; }
	}


	@media only screen and (min-width: 576px) {
		animation: .8s blink step-end infinite;
	}
`;

export {
  HoverTyping,
};