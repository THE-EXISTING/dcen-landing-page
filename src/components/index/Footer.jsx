/* eslint-disable prettier/prettier */
/* global tw */
import media from 'emotion-media-query'
import React from 'react'
import styled from 'react-emotion'
import { colors } from '../../../tailwind'
import { content } from '../../content/website'
import FooterWallpaper from '../../images/detail/img_footer_background.png'
import dCenWhite from '../../images/logo/logo_dcen_white.png'
import { Contact, Hero, Wrapper } from '../../styles'
import SVG from '../SVG'

const VisionBlock = styled.div`
  ${tw('justify-center items-center flex z-50')};
  background-color: rgba(0, 0, 0, 0.7);
  height: inherit;
`

const FooterContainer = styled.div`
  background-image: ${props => `url(${props.img})`};
  height: 50vh;
  font-family: avenirnext-medium, fantasy;
  background-size: cover;
  width: 100%;
  @media (max-width: 575.98px) {
    height: 100%;
  }
`
const Logo = styled.img`
  margin-top: 0.45rem;
  width: 10%;
`

const FooterTextContainer = styled.div`
  display: flex;
  padding: 5rem 0 0 0;
  align-items: flex-start;
  max-width: 984px;
  z-index: 2;
  @media (max-width: 575.98px) {
    padding: 2.8rem 2rem;
  }
`

const FooterContent = styled.div`
  margin-left: 2.8rem;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`

const EmailButton = styled.button`
  font-family: akrobat-bold, fantasy;
  font-size: 1.8rem;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: white;
  background-color: orange;
  width: 10rem;
  height: inherit;
  border: none;
  cursor: pointer;
`
const EmailForm = styled.form`
  ${tw('w-full justify-center items-center flex')};
  /* text-align: start; */
  width: 50%;
  height: 3.5rem;
  /* margin-bottom: auto; */
  background-color: white;
  border-radius: 4px;
  @media (max-width: 575.98px) {
    display: none;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    /* STYLES GO HERE */
    display: none;
  }
`

const EmailInput = styled.input`
  font-family: avenirnext-regular, fantasy;
  font-size: 1.4rem;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 32rem;
  padding-left: 1.2rem;
  height: inherit;
  &:focus {
    outline: none;
  }
  @media (max-width: 575.98px) {
    padding-left: 1em;
  }
`

const AddressContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding-bottom: 4rem;
  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`

const ContactContainer = styled.div`
  width: 50%;
  display: contents;
  ${media.lessThan('medium')`
    margin-top: 2.2rem;
    align-items: flex-start;
  `};
`

const SVGContainer = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: 2.5%;
  & > svg {
    margin-right: 1.2rem;
  }
`

const ContactFooter = styled(Contact)`
  font-family: avenirnext-medium, fantasy;
  font-size: 1.4rem;
  margin-top: 0;
  padding: 0 36px;
  @media (max-width: 575.98px) {
    padding: 4px 8px;
  }
`

const CopyRightsContainer = styled.div`
  width: 100%;
  margin-top: 1.4rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ${media.lessThan('medium')`
    flex-direction: column;
    img {
      align-self: flex-end;
    }
  `};
`

const CopyRightEmail = styled.div`
  font-family: avenirnext-medium, fantasy;
  font-size: 2rem;
  margin-top: 1rem;
  @media (max-width: 575.98px) {
    margin-top: 3rem;
  }
`
const LogoDcen = styled(Logo)`
  @media (max-width: 575.98px) {
    width: 25%;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 20%;
  }
`

export const Footer = () => (
  <FooterContainer img={FooterWallpaper}>
    <VisionBlock>
      <Wrapper>
        <FooterTextContainer>
          <LogoDcen src={dCenWhite} alt='D-CEN White Logo' />
          <FooterContent>
            <AddressContainer>
              <EmailForm>
                <EmailInput
                  type='email'
                  aria-label='If you feel interested about our D-CEN, Pleases enter your email. We will feed the latest news to you'
                  required
                  placeholder='Our newsletter subscription'
                />
                <EmailButton>{content.emailButton}</EmailButton>
              </EmailForm>
              <ContactContainer>
                <SVGContainer>
                  <SVG
                    icon='tumblrCircle'
                    cursor={'pointer'}
                    fill={colors['orange-lightest']}
                    hoverFill={colors.white}
                    width={16}
                    position={'relative'}
                    transitionDuration={'500ms'}
                    title={'You could click to go to our Tumblr.'}
                  />
                  <SVG
                    icon='facebookCircle'
                    cursor={'pointer'}
                    fill={colors['orange-lightest']}
                    hoverFill={colors.white}
                    width={16}
                    position={'relative'}
                    transitionDuration={'500ms'}
                    title={'You could click to go to our Facebook.'}
                  />
                  <SVG
                    icon='mediumCircle'
                    cursor={'pointer'}
                    fill={colors['orange-lightest']}
                    hoverFill={colors.white}
                    width={16}
                    position={'relative'}
                    transitionDuration={'500ms'}
                    title={'You could click to go to our Medium.'}
                  />
                </SVGContainer>
                <ContactFooter>contact</ContactFooter>
              </ContactContainer>
            </AddressContainer>
            <CopyRightsContainer>
              <div>
                <div>© 2020 DCEN. All Rights Reserved</div>
              </div>
              <div
                style={{ display: 'inline-flex', justifyContent: 'flex-end' }}
              >
                <SVG
                  icon='Email'
                  fill={colors.white}
                  hoverFill={colors.white}
                  top={'-28%'}
                  width={16}
                  position={'relative'}
                  title={'Our email icon.'}
                />
                <CopyRightEmail>contact@dcen.io</CopyRightEmail>
                <SVG
                  icon='IPFS'
                  fill={colors.white}
                  width={48}
                  left={'9.5%'}
                  top={'-35%'}
                  position={'relative'}
                  title={'Our product hosted by IPFS.'}
                />
              </div>
            </CopyRightsContainer>
          </FooterContent>
        </FooterTextContainer>
      </Wrapper>
    </VisionBlock>
  </FooterContainer>
)
