import React, { PureComponent } from 'react';
import { PortfolioItem, ShortCopy, Link } from '../../elements/';
import {
  PortfolioBoxWrapper,
  PortfolioBoxContent,
  ArrowIcon,
  PortfolioBoxTitle,
  UpperPanel,
  LowerPanel,
  ButtonPanel
} from './PortfolioBox.style';

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

    let projInfo = projectData.projects[activeIndex];

    return (
      <PortfolioBoxWrapper>
        <UpperPanel>
          <ArrowIcon className="material-icons left" onClick={this.arrowDecrease}>keyboard_arrow_left</ArrowIcon>
          <PortfolioBoxContent>
            <PortfolioBoxTitle>{projInfo.name}</PortfolioBoxTitle>
            <ShortCopy shortCopyText={projInfo.description}/>
            <ShortCopy shortCopyText={projInfo.technologies}/>
            <ButtonPanel>
              <Link link={projInfo.github} linkClass='primary' label='Github' />
              <Link link={projInfo.livewebsite} linkClass='secondary' label='Live site' />
            </ButtonPanel>

          </PortfolioBoxContent>
          <ArrowIcon className="material-icons right" onClick={this.arrowIncrease}>keyboard_arrow_right</ArrowIcon>
        </UpperPanel>
        <LowerPanel>
          <PortfolioItem
            index={(activeIndex > 0) ? (activeIndex - 1) : (projectData.projects.length - 1)}
            projectData={projectData}
            current={false}
          />
          <PortfolioItem
            index={activeIndex}
            projectData={projectData}
            current={true}
          />
          <PortfolioItem
            index={(activeIndex < (projectData.projects.length -1)) ? (activeIndex + 1) : 0}
            projectData={projectData}
            current={false}
          />
        </LowerPanel>
      </PortfolioBoxWrapper>
    );
  }
};