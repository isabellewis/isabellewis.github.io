import React, { Component } from 'react';
import { Heading } from '../../elements';

import {
  HoverTyping,
} from './TypingText.style';

export class TypingText extends Component {
	constructor(props) {
    super(props);

		this.state = {
			textIndex: 0,
			textDisplayed: 'Isabel',
			animating: false,
			deleting: false,
			writing: false,
		};

		this.startAnimation = this.startAnimation.bind(this);
	}

	textChange() {
		const {
			textIndex,
			textDisplayed,
			deleting,
			writing,
		} = this.state;

		const {
			textValues
		} = this.props;

		if (deleting && textDisplayed.length > 0) {
			this.setState(prevState => ({
				textDisplayed: prevState.textDisplayed.slice(0, -1)
			}));
		} else if (deleting && textDisplayed.length === 0) {
			const nextIndex = textIndex < textValues.length - 1 ? textIndex + 1 : 0;
			this.setState(prevState => ({
				deleting: false,
				writing: true,
				textIndex: nextIndex,
				textDisplayed: prevState.textDisplayed + textValues[nextIndex][0],
			}));
		} else if (writing && textDisplayed.length < textValues[textIndex].length) {
			this.setState(prevState => ({
				textDisplayed: prevState.textDisplayed + textValues[prevState.textIndex][prevState.textDisplayed.length],
			}));
		} else {
			this.endAnimation();
		}
	}

	endAnimation() {
		this.setState({
			animating: false,
			deleting: false,
			writing: false,
		});
		clearInterval(this.interval);
	}

	startAnimation() {
		if (!this.state.animating) {
			this.setState({
				animating: true,
				deleting: true,
			});
			this.interval = setInterval(() => this.textChange(), 500);
		}
	}

	render() {
		return (
      <HoverTyping onMouseOver={this.startAnimation}>
        <Heading title={this.state.textDisplayed} />
      </HoverTyping>
		);
	}
}
