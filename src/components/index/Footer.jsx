/* global tw */
import media from 'emotion-media-query';
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'react-emotion';
import { content } from '../../content/website';
import FooterWallpaper from '../../images/detail/img_footer_background.png';
import dCenWhite from '../../images/logo/logo_dcen_white.png';
import { Contact, Wrapper } from '../../styles';

const VisionBlock = styled.div`
  ${tw('justify-center items-center flex z-50')};
  background-color: rgba(0, 0, 0, 0.7);
  height: inherit;
`;

const FooterContainer = styled.div`
  background-image: ${props => `url(${props.img})`};
  height: 50vh;
  font-family: avenirnext-medium, fantasy;
  background-size: cover;
  width: 100%;
`;

const Logo = styled.img`
  margin-top: 2.2rem;
  width: 10%;
`;

const FooterTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 984px;
  z-index: 2;
  ${media.lessThan('medium')`
    padding: 2.8rem 2rem;
  `};
`;

const FooterContent = styled.div`
  margin-left: 2.8rem;
  width: 80%;
  display: flex;
`;

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
`;
const EmailForm = styled.form`
  ${tw('w-full justify-center items-center flex')};
  /* text-align: start; */
  width: 33rem;
  height: 3.5rem;
  /* margin-bottom: auto; */
  background-color: white;
  border-radius: 4px;
  @media (max-width: 575.98px) {
  }
`;
const Box = styled.div`
  padding: 1.5rem 0 0 0;
  @media (max-width: 575.98px) {
    width: 90%;
    margin-top: 3.2rem;
  }
`;
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
`;

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: 0.5rem;
  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* ${media.lessThan('medium')`
    margin-top: 2.2rem;
    align-items: flex-start;
  `}; */
`;

const ContactInfo = styled.div`
  font-family: ProductSans-Regular, fantasy;
  font-size: 2rem;
  display: flex;
  letter-spacing: 1.5px;

  p {
    margin-left: 1.2rem;
  }

  ${media.lessThan('medium')`
    font-size: 1.6rem;
  `};
`;

const CopyRightsContainer = styled.div`
  margin-top: 1.4rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column;
    img {
      align-self: flex-end;
    }
  `};
`;

export const Footer = () => (
  <FooterContainer img={FooterWallpaper}>
    <VisionBlock>
      <Wrapper>
        <FooterTextContainer>
          <Logo src={dCenWhite}/>
          <FooterContent>
            <AddressContainer>
              <Box>
                <EmailForm>
                  <EmailInput
                    type="email"
                    required
                    placeholder="Our newsletter subscription"
                  />
                  <EmailButton>{content.emailButton}</EmailButton>
                </EmailForm>
              </Box>
              <ContactContainer>
                <Contact>CONTACT</Contact>
                <ContactInfo>
                  <img src='/static/Icon/Email.svg' alt=''/>
                  <a href='mailto:contact@existing.co?subject=Put your subject here...'>
                    <p>contact@existing.co</p>
                  </a>
                </ContactInfo>
              </ContactContainer>
            </AddressContainer>
          </FooterContent>
        </FooterTextContainer>
      </Wrapper>
    </VisionBlock>
  </FooterContainer>
);
