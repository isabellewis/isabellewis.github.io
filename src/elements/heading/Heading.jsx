import React, { PureComponent } from 'react';
import {
	HeadingOne
} from './Heading.style';


export class Heading extends PureComponent {
	render () {
		const {
			title
		} = this.props;
	
		return (
			<HeadingOne className='heading-text'>
				{ title }
			</HeadingOne>
		);
	}
}
