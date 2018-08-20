import React, { PureComponent } from 'react';
import {
  ModalWrapper,
  OuterWrapper,
  CloseIcon
} from './Modal.style';

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
