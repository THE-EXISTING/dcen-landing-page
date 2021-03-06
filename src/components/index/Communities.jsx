/* eslint-disable prettier/prettier */
/* global tw */
import React from 'react';
import styled from 'react-emotion';
import facebook from '../../images/logo/Facebook.png';
import mediumDcen from '../../images/logo/Medium DCEN.png';
import telegram from '../../images/logo/Telegram.png';
import { Contact, FlexBox, Heading, OrangeSpan, Wrapper } from '../../styles';

const CommunitiesImage = styled.img`
  border: 2px solid gray;
  border-radius: 0.5rem;
  padding: 16px;
  width: 240px;
  transition: 0.3s;
  @media (max-width: 575.98px) {
    width: 128px;
  }
  &:hover {
    cursor: pointer;
    border: 2px solid white;
  }
`;

const FacebookImage = styled(CommunitiesImage)`
  margin-top: -4rem;
  @media (max-width: 575.98px) {
    margin-top: -2.5rem;
    width: 20rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CommunitiesContact = styled(Contact)`
  padding: 12px 24px;
  font-size: 2rem;
  @media (max-width: 575.98px) {
    padding: 6px 12px;
  }
`;

const WraperContainer = styled(Wrapper)`
  height: 75vh;
  @media (max-width: 575.98px) {
    height: 50vh;
  }
`

export const Communities = () => (
  <WraperContainer>
    <FlexBox style={{ height: '-webkit-fill-available', flexWrap: 'wrap' }}>
      <FlexBox style={{ width: '100%' }}>
        <Heading>
          Join Our <OrangeSpan>Com</OrangeSpan>munities
        </Heading>
      </FlexBox>
      <FlexBox style={{ width: '100%' }}>
        <CommunitiesImage
          src={mediumDcen}
          style={{ marginRight: '2rem' }}
          alt={'Medium x DCEN'}
          role='button'
        />
        <CommunitiesImage
          src={telegram}
          alt={'Telegram x DCEN'}
          role='button'
        />
      </FlexBox>
      <FlexBox style={{ width: '100%' }}>
        <FacebookImage src={facebook} alt={'Facebook x DCEN'} role='button' />
      </FlexBox>
      <CommunitiesContact>Contact</CommunitiesContact>
    </FlexBox>
  </WraperContainer>
)
