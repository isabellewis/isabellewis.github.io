import React, { PureComponent } from 'react';
import {
	HeadingTwo
} from './TypingTextHeading.style';


export class TypingTextHeading extends PureComponent {
	render () {
		const {
			title
		} = this.props;
	
		return (
			<HeadingTwo className='heading-text'>
				{ title }
			</HeadingTwo>
		);
	}
}
