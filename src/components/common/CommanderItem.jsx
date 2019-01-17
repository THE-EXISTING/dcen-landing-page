/* eslint-disable prettier/prettier */
/* global tw */

import media from 'emotion-media-query';
import React, { Component } from 'react';
import styled from 'react-emotion';
import Facebook from '../../images/icon/Facebook.svg';
import Github from '../../images/icon/Github.svg';
import LinkedIn from '../../images/icon/LinkedIn.svg';

const CommanderItemContainer = styled.div`
  font-family: akrobat-regular, fantasy;
  position: relative;
  width: 200px;
  box-sizing: border-box;
  padding: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s;
  will-change: transition;
  z-index: 2;
  box-shadow: 0 0 0 1px gray;
  border-radius: 4px;
  ${media.lessThan('medium')`
    margin: 5px auto;
    height: 443px;
  `};

  &:hover {
    box-shadow: 0 0 0 2px #f29103;
    border-radius: 4px;
  }
`;

const TeamImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 2px solid white;
  margin: auto;
  transition: all 0.3s;
  border: ${props => (props.isHover ? `2px solid #f29103` : `2px solid white`)};
`;

const FontAvenirContainer = styled.div`
  letter-spacing: 1px;
`;

const ImgOverlay = styled.img`
  position: absolute;
  width: 200px;
  right: -100px;
  bottom: 0;
  opacity: 0.02;
`;

const ImgOverlayMobile = styled(ImgOverlay)`
  display: none;
  ${media.lessThan('medium')`
    display: block;
  `};
`;

const SocialContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 1rem;
  z-index: 2;
`;

const ImgSocial = styled.img`
  margin: 0.5rem;
  opacity: 0.34;
  cursor: pointer;
  transition: all 0.3s;
  will-change: transition;

  &:hover {
    opacity: 1;
  }
`;
class CommanderItem extends Component {
  state = {
    isHover: false
  };

  handleOnMouseHover = () => {
    this.setState({
      isHover: true
    });
  };

  handleOnMouseLeave = () => {
    this.setState({
      isHover: false
    });
  };

  openNewTab = url => {
    window.open(url, '_blank');
  };

  renderIcon = index => {
    if (index === 0) {
      return Facebook;
    } else if (index === 1) {
      return LinkedIn;
    } else if (index === 2) {
      return Github;
    }
  };

  render() {
    const { img, nickname, name, position, social, activeSlide } = this.props;
    const { isHover } = this.state;

    return (
      <CommanderItemContainer
        className="active-border"
        onMouseOver={this.handleOnMouseHover}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <div>
          <TeamImg src={img} isHover={isHover} activeSlide={activeSlide} />
          <FontAvenirContainer>
            <p
              style={{
                fontSize: '1.6rem',
                marginBottom: '0',
                fontFamily: 'avenirnext-medium'
              }}
            >
              {nickname}
            </p>
            <p style={{ fontSize: '1.4rem', marginTop: '2px' }}>{name}</p>
            <p
              style={{
                fontSize: '2rem',
                letterSpacing: '1.5px',
                fontFamily: 'avenirnext-demi'
              }}
            >
              {position}
            </p>
          </FontAvenirContainer>
        </div>
        <SocialContainer>
          {social.map((item, i) => (
            <ImgSocial
              key={item}
              src={this.renderIcon(i)}
              alt=""
              onClick={() => this.openNewTab(item)}
            />
          ))}
        </SocialContainer>
        {/* {isHover && <ImgOverlay src='/static/Icon/Mascot.svg' alt='' />}
        <ImgOverlayMobile src='/static/Icon/Mascot.svg' alt='' />  */}
      </CommanderItemContainer>
    );
  }
}

export default CommanderItem;
