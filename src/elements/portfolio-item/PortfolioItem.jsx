import React, { PureComponent } from 'react';
import styled from 'styled-components';

const PortfolioItemDiv = styled.div`
  background: #ffaeae;
  display: inline-block;
  font-family: 'Archivo Narrow',sans-serif;
  height: 200px;
  margin: 0 15px 0 0;
  overflow-wrap: break-word;
  padding: 30px;
  vertical-align: middle;
  white-space: normal;
  width: 200px;

  &.animate {
   animation: fadeBox ease-in 1s;
  }

  &.active {
    background: #fff;
    border: 5px solid #ffaeae;
  }

  &.inactive {
    &:hover {
      background: #ff8383;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 992px) {
    height: 250px;
    margin: 0 30px 0 0;
    width: 250px;
  }

	@keyframes fadeBox {
		from {
			opacity: 0;
		}
		to {
			opactity: 1;
		}
	}
`;

export class PortfolioItem extends PureComponent {
	constructor(props) {
    super(props);

		this.state = {
			rendered: true
		}
  }

  componentDidUpdate() {
    this.setState ({
      rendered: true
    });
  }

  updateItem() {
    console.log('clicked');
  }

  render() {
    const {
      projectData,
      index,
      current
    } = this.props;

    return (
      <PortfolioItemDiv className={`${index}${current ? ' active' : ' inactive'}${this.state.rendered ? ' animate' : ''}`} onClick={this.updateItem}>
        <h2>{projectData.projects[index].name}</h2>
      </PortfolioItemDiv>
    );
  }
} 
