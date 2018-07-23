import React, { PureComponent } from 'react';
import styled from 'styled-components';
// import img from '../../assets/portfolio/london2.jpg';

const PortfolioBoxWrapper = styled.div`
  display: none;

	@media only screen and (min-width: 576px) {
    display: block;
    height: 50%;
    padding: 60px 0;
    text-align: center;
    width: 100%;
	}
`;

// background: url(${img});
const PortfolioBoxContent = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  height: 100%;
  opacity: .5;
  overflow: hidden;
  width: 50%;
`;

const ArrowIcon = styled.i`
  color: #ffaeae;
  cursor: pointer;
  display: inline-block;
  font-size: 100px;
  user-select: none;

	@media only screen and (min-width: 768px) {
		font-size: 150px;
  }
  
	@media only screen and (min-width: 992px) {
		font-size: 200px;
	}
`;

const PortfolioBoxTitle = styled.h2`
  color: #000;
  font-family: 'Archivo Narrow',sans-serif;
  font-size: 45px;
  opacity: 1;
`;

const PortfolioItemDiv = styled.div`
  background: #ffaeae;
  display: inline-block;
  height: 250px;
  margin: 0 30px 0 0;
  overflow-wrap: break-word;
  padding: 30px;
  vertical-align: middle;
  white-space: normal;
  width: 250px;
`;

const UpperPanel = styled.div`
  height: 100%;
`;

const LowerPanel = styled.div`
  padding: 50px 0;
`;

export class PortfolioBox extends PureComponent {
  constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0
    }
    
    this.arrowDecrease = this.arrowDecrease.bind(this);
    this.arrowIncrease = this.arrowIncrease.bind(this);
  }
  
  arrowDecrease() {
    const {
      projectData
    } = this.props;

    const {
      activeIndex
    } = this.state;

    const newIndex = activeIndex > 0 ? activeIndex - 1 : projectData.projects.length -1;

    this.setState (
      {
        activeIndex: newIndex
      }
    )
  }

  arrowIncrease() {
    const {
      projectData
    } = this.props;

    const {
      activeIndex
    } = this.state;

    const newIndex = activeIndex < projectData.projects.length - 1 ? activeIndex + 1 : 0;

    this.setState (
      {
        activeIndex: newIndex
      }
    )
  }

  render() {
    const {
      projectData
    } = this.props;

    const {
      activeIndex
    } = this.state;


    return (
      <PortfolioBoxWrapper>
        <UpperPanel>
          <ArrowIcon className="material-icons" onClick={this.arrowDecrease}>{this.state.menuOpen ? 'close' : '' }keyboard_arrow_left</ArrowIcon>
          <PortfolioBoxContent>
            <PortfolioBoxTitle>{this.state.activeIndex}</PortfolioBoxTitle>
          </PortfolioBoxContent>
          <ArrowIcon className="material-icons" onClick={this.arrowIncrease}>keyboard_arrow_right</ArrowIcon>
        </UpperPanel>
        <LowerPanel>
          <PortfolioItemDiv>
            <h2>{projectData.projects[activeIndex > 0 ? activeIndex - 1 : projectData.projects.length - 1].name}</h2>
          </PortfolioItemDiv>
          <PortfolioItemDiv>
            <h2>{projectData.projects[activeIndex].name}</h2>
          </PortfolioItemDiv>
          <PortfolioItemDiv>
            <h2>{projectData.projects[activeIndex < projectData.projects.length -1 ? activeIndex + 1 : 0].name}</h2>
          </PortfolioItemDiv>
        </LowerPanel>
      </PortfolioBoxWrapper>
    );
  }
};
