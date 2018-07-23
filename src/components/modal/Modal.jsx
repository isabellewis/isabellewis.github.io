import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
	background: white;
	display: block;
	height: 55%;
	left: 50%;
	padding: 30px;
	position: fixed;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 55%;
`;

const OuterWrapper = styled.div`
	&.closed {
		display: none;
	}

	&.open {
		background: rgba(0,0,0,0.5);
		display: block;
		height: 100%;
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
	}
`;

const CloseIcon = styled.i`
	cursor: pointer;
	float: right;
	vertical-align: middle;
`;

export class Modal extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<OuterWrapper className={this.props.open ? 'open' : 'closed'} id="hello">
				<ModalWrapper>
					<CloseIcon className="material-icons" onClick={this.props.toggle}>close</CloseIcon>
					<h2>Hello yes helloooo</h2>
					<p>{this.props.text}</p>
				</ModalWrapper>
			</OuterWrapper>
		);
	}
} 