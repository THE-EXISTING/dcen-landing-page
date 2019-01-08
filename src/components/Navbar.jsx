/* global tw */
import React from 'react';
import styled from 'react-emotion';
import dCenWhite from '../images/logo/logo_dcen_white.png';
import { Contact, Logo, Navigator, Wrapper } from '../styles';

const Menu = styled.div`
  @media (max-width: 575.98px) {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    font-size: 12px;
    flex-direction: row-reverse;
    width: 100%;
  }
`;

export const Navbar = () => (
  <Navigator>
    <Wrapper>
      <div>
        <Logo src={dCenWhite} alt="D-cen White Logo" />
      </div>
      <Contact href="#">Contact</Contact>
      <Menu>
        <a href="#">Team</a>
        <a href="#">Services</a>
        <a href="#">Product</a>
        <a href="#">Communities</a>
        <a href="#">Vision</a>
      </Menu>
    </Wrapper>
  </Navigator>
);
