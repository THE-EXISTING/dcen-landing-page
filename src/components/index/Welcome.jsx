/* global tw */
import React from 'react';
import styled from 'react-emotion';
import dCenOverview from '../../images/detail/img_dcen_overview.png';
import dCenOrange from '../../images/logo/logo_dcen.png';
import welcomeBackground from '../../images/background/img_main_background.png';
import { Content, Hero, Subtitle, Wrapper } from '../../styles';
import { content } from '../../content/website';
import SVG from '../SVG';
import { colors } from '../../../tailwind';

const WelcomeSubtitle = styled(Subtitle)`
  margin-left: 2.5rem;
  @media (max-width: 575.98px) {
    margin-left: 0;
    font-size: 16px;
  }
`;

const WelcomeHero = styled(Hero)`
  @media (max-width: 575.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const DcenOrangeImage = styled.img`
  @media (max-width: 575.98px) {
    width: 75%;
  }
`;

const EmailInput = styled.input`
  font-family: avenirnext-regular, fantasy;
  border: none;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  width: 24em;
  padding-left: 1.5em;
  height: inherit;
  font-size: 0.875em;
  &:focus {
    outline: none;
  }
  @media (max-width: 575.98px) {
    padding-left: 1em;
    font-size: 0.75em;
  }
`;

const EmailButton = styled.button`
  font-family: akrobat-bold, fantasy;
  font-size: 1.125em;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: white;
  background-color: orange;
  width: 8em;
  height: inherit;
  border: none;
`;

const EmailForm = styled.form`
  ${tw('w-full justify-center items-center flex')};
  text-align: start;
  height: 2.625em;
  margin-bottom: auto;
  background-color: white;
  border-radius: 8px;
  @media (max-width: 575.98px) {
    margin-bottom: 10rem;
  }
`;

const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  @media (max-width: 575.98px) {
    width: 90%;
    margin-top: 2.5rem;
  }
`;

export const Welcome = () => (
  <Content
    speed={window.outerWidth < 575.98 ? 0.3 : 0.6}
    offset={0}
    factor={window.outerWidth < 575.98 ? 1 : 0.75}
    style={{ backgroundImage: `url(${welcomeBackground})`, backgroundSize: 'cover' }}
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
    <SVG icon="scrollDown" hiddenMobile fill={colors.white} width={8} left="50%" top="90%" />
  </Content>
);
