/* eslint-disable prettier/prettier */
/* global tw */
import React from 'react'
import styled from 'react-emotion'
import { Link, animateScroll as scroll } from 'react-scroll'
import dCenWhite from '../images/logo/logo_dcen_white.png'
import { Contact, Logo, Wrapper } from '../styles'

const Navigator = styled.div`
  height: ${props => (props.scrollTop < 60 ? '80px' : '60px')};
  width: 100%;
  position: fixed;
  background-color: ${props =>
    props.scrollTop < 60 ? 'transparent' : 'rgba(0, 0, 0,0.9)'};
  font-family: akrobat-bold, fantasy;
  text-transform: uppercase;
  z-index: 99;
  transition: 0.6s;
  box-shadow: ${props =>
    props.scrollTop < 60 ? 'none' : '0 11px 10px -5px rgba(50, 50, 50, 0.25)'};
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
    &.active {
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
  @media (max-width: 575.98px) {
    height: ${props => (props.scrollTop < 60 ? '45px' : '50px')};
  }
`
const Menu = styled.div`
  @media (max-width: 575.98px) {
    display: none;
  }
`
const ContactHeader = styled(Contact)`
  @media (max-width: 575.98px) {
    font-size: 1.5rem;
    padding: 8px 15px;
  }
`
const Linktotop = styled.div``
export class Navbar extends React.Component {
  constructor (props) {
    super(props)
  }
  scrollToTop = () => {
    scroll.scrollToTop()
  }
  render () {
    return (
      <Navigator scrollTop={this.props.scrollTop}>
        <Wrapper>
          <Linktotop onClick={this.scrollToTop}>
            <Logo
              src={dCenWhite}
              alt='D-cen White Logo'
              width={this.props.scrollTop < 60 ? 60 : 50}
            />
          </Linktotop>
          <ContactHeader>Contact</ContactHeader>
          <Menu>
            <Link
              to='commanders'
              activeClass='active'
              spy
              smooth={'easeInQuad'}
              duration={500}
            >
              Team
            </Link>
            <Link
              to='services'
              activeClass='active'
              spy
              smooth={'easeInQuad'}
              duration={500}
              offset={-50}
            >
              Services
            </Link>
            <Link
              to='product'
              activeClass='active'
              spy
              smooth={'easeInQuad'}
              duration={500}
              offset={-50}
            >
              Product
            </Link>
            <Link
              to='communities'
              activeClass='active'
              spy
              smooth={'easeInQuad'}
              duration={500}
              offset={-50}
            >
              Communities
            </Link>
            <Link
              to='visions'
              activeClass='active'
              spy
              smooth={'easeInQuad'}
              duration={500}
              offset={-50}
            >
              Vision
            </Link>
          </Menu>
        </Wrapper>
      </Navigator>
    )
  }
}
