import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Modal } from '../../components';

const PortfolioItemDiv = styled.div`
  background: #ffaeae;
  cursor: pointer;
  display: inline-block;
  height: 300px;
  margin: 0 30px 0 0;
  overflow-wrap: break-word;
  padding: 30px;
  vertical-align: middle;
  white-space: normal;
  width: 300px;
`;

const PortfolioItemTextP = styled.p`
  color: #fff;
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 40px;
`;

const PortfolioItemA = styled.a`
  height: 300px;
  width: 300px;
`;

export class PortfolioItem extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false
		}

		this.modalToggle = this.modalToggle.bind(this);
	}

	modalToggle() {
		this.setState (
			{
				modalOpen: !this.state.modalOpen
			}
		);
  }

  render() {
    const {
      portfolioItemText,
      portfolioItemLink
    } = this.props;

    // return (
    //   <PortfolioItemA href={portfolioItemLink} target="_blank">
    return (
      <PortfolioItemA>
        <PortfolioItemDiv onClick={this.modalToggle}>
          <PortfolioItemTextP>{ portfolioItemText.length < 45 ? portfolioItemText : portfolioItemText.substring(0, 43) + '...' }</PortfolioItemTextP>
        </PortfolioItemDiv>
        <Modal open={this.state.modalOpen} text={portfolioItemText} toggle={this.modalToggle} />
      </PortfolioItemA>
    );
  }
} 
