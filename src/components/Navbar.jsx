/* global tw */
import React, { Component } from 'react';
import styled from 'react-emotion';
import { Events, Link, scroller } from 'react-scroll';
import dCenWhite from '../images/logo/logo_dcen_white.png';
import { Contact, Logo, Wrapper } from '../styles';

const Navigator = styled.div`
  height: ${props => (props.scrollTop < 60 ? '80px' : '60px')};
  width: 100%;
  position: fixed;
  background-color: ${props => (props.scrollTop < 60 ? 'transparent' : 'rgba(0, 0, 0,0.9)')};
  font-family: akrobat-bold, fantasy;
  text-transform: uppercase;
  z-index: 99;
  transition: 0.6s;
  box-shadow: ${props => (props.scrollTop < 60 ? 'none' : '0 11px 10px -5px rgba(50, 50, 50, 0.25)')};
  a {
    margin-top: 2.4rem;
    font-size: 1.4rem;
    float: right;
    display: block;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin-right: 3.2rem;
    text-decoration: none;
    &:hover {
      color: #ffffff;
      cursor: pointer;
      border-bottom: 2px solid #e79627;
      padding-bottom: 0.2rem;
    }
    @media (max-width: 575.98px) {
      margin-right: 0;
      padding: 8px 12px;
    }
  }
`;

const Menu = styled.div`
  @media (max-width: 575.98px) {
    display: none;
  }
`;

class Navbar extends Component {
  state = {
    isActive: false,
    isScrollDown: false,
  };
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', to, element);
    });
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
  }

  scrollTo(to) {
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      smooth: true,
    });
  }
  render() {
    return (
      <Navigator scrollTop={this.props.scrollTop && this.props.scrollTop}>
        <Wrapper>
          <div>
            <Logo src={dCenWhite} alt="D-cen White Logo" width={this.props.scrollTop < 60 ? 60 : 50} />
          </div>
          <Contact>Contact</Contact>
          <Menu>
            <Link
              to="commanders"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => this.scrollTo('commanders')}
            >
              Team
            </Link>
            <Link
              to="services"
              activeClass="active"
              spy
              smooth
              duration={500}
              onClick={() => this.scrollTo('services')}
            >
              Services
            </Link>
            <Link to="product" activeClass="active" spy smooth duration={500}>
              Product
            </Link>
            <Link to="communities" activeClass="active" spy smooth duration={500}>
              Communities
            </Link>
            <Link activeClass="active" to="visions" spy smooth duration={500}>
              Vision
            </Link>
          </Menu>
        </Wrapper>
      </Navigator>
    );
  }
}

export default Navbar;
