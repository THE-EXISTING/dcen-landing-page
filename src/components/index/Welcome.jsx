/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { colors } from '../../../tailwind';
import { content } from '../../content/website';
import welcomeBackground from '../../images/background/img_main_background.png';
import dCenOverview from '../../images/detail/img_dcen_overview.png';
import dCenOrange from '../../images/logo/logo_dcen.png';
import { Content, Hero, Subtitle, Wrapper } from '../../styles';
import SVG from '../SVG';

const WelcomeSubtitle = styled(Subtitle)`
  font-size: 1.8rem;
  margin-left: 3.6rem;
  @media (max-width: 575.98px) {
    margin-left: 0;
    margin-top: 4rem;
    text-align: center;
  }
`;

const WelcomeHero = styled(Hero)`
  @media (max-width: 575.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }
`;

const DcenOrangeImage = styled.img`
  @media (max-width: 575.98px) {
    width: 50%;
  }
`;

const EmailInput = styled.input`
  font-family: avenirnext-regular, fantasy;
  font-size: 1.4rem;
  border: none;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  width: 32rem;
  padding-left: 1.2rem;
  height: inherit;
  &:focus {
    outline: none;
  }
  @media (max-width: 575.98px) {
    padding-left: 1em;
  }
`;

const EmailButton = styled.button`
  font-family: akrobat-bold, fantasy;
  font-size: 1.8rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  background-color: orange;
  width: 10rem;
  height: inherit;
  border: none;
`;

const EmailForm = styled.form`
  ${tw('w-full justify-center items-center flex')};
  text-align: start;
  width: 42rem;
  height: 4.2rem;
  margin-bottom: auto;
  background-color: white;
  border-radius: 8px;
  @media (max-width: 575.98px) {
    margin-top: 12rem;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  @media (max-width: 575.98px) {
    width: 90%;
    margin-top: 3.2rem;
  }
`;

export const Welcome = () => (
  <Content
    speed={window.outerWidth < 575.98 ? 0.3 : 0.6}
    offset={0}
    factor={window.outerWidth < 575.98 ? 0.75 : 1}
    style={{ backgroundImage: `url(${welcomeBackground})`, backgroundSize: 'cover'}}
  >
    <Wrapper style={{ display: 'flex', flexWrap: 'wrap' }}>
      <WelcomeHero>
        <DcenOrangeImage src={dCenOrange} alt="D-cen Orange Logo" />
        <WelcomeSubtitle>
          {content.frontSubtitle}
          <br />
          <span style={{ color: '#e07628' }}>{content.spanSubtitle}</span>
          <br />
          {content.backSubtitle}
        </WelcomeSubtitle>
      </WelcomeHero>
      <Hero>
        <img src={dCenOverview} style={{ maxWidth: '100%' }} alt="D-cen Product Overview" />
      </Hero>
      <Box>
        <EmailForm>
          <EmailInput type="email" required placeholder="Our newsletter subscription" />
          <EmailButton>{content.emailButton}</EmailButton>
        </EmailForm>
      </Box>
    </Wrapper>
    <SVG icon="scrollDown" hiddenMobile fill={colors.white} width={16} left="50%" top="80%" />
  </Content>
);
