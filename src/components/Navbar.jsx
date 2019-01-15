/* eslint-disable prettier/prettier */
/* global tw */
import React from 'react'
import styled from 'react-emotion'
import dCenWhite from '../images/logo/logo_dcen_white.png'
import { Contact, Logo, Wrapper } from '../styles'

const Navigator = styled.div`
  height: ${props => (props.scrollTop < 60 ? '80px' : '60px')};
  width: 100%;
  background-color: transparent;
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
    @media (max-width: 575.98px) {
      margin-right: 0;
      padding: 8px 12px;
    }
  }
`

const Menu = styled.div`
  @media (max-width: 575.98px) {
    display: none;
  }
`

export const Navbar = ({ scrollTop }) => (
  <Navigator scrollTop={scrollTop}>
    <Wrapper>
      <div>
        <Logo
          src={dCenWhite}
          alt='D-cen White Logo'
          width={scrollTop < 60 ? 60 : 50}
        />
      </div>
      <Contact href='#'>Contact</Contact>
      <Menu>
        <a href='#'>Team</a>
        <a href='#'>Services</a>
        <a href='#'>Product</a>
        <a href='#'>Communities</a>
        <a href='#'>Vision</a>
      </Menu>
    </Wrapper>
  </Navigator>
)
