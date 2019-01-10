/* global tw */
import React from 'react';
import styled from 'react-emotion';
import facebook from '../../images/logo/Facebook.png';
import mediumDcen from '../../images/logo/Medium DCEN.png';
import telegram from '../../images/logo/Telegram.png';
import { Contact, FlexBox, Heading, OrangeSpan, Wrapper } from '../../styles';

const CommunitiesImage = styled.img`
  border: 1px solid white;
  padding: 16px;
  @media (max-width: 575.98px) {
    width: 128px;
  }
`;

const FacebookImage = styled(CommunitiesImage)`
  margin-top: 2rem;
  @media (min-height: 1000px) {
    margin-top: -2rem;
  }
  @media (max-width: 575.98px) {
    margin-top: -2.5rem;
    width: 20rem;
  }
`;

const CommunitiesContact = styled(Contact)`
  padding: 12px 24px;
  font-size: 2rem;
  @media (max-width: 575.98px) {
    padding: 6px 12px;
  }
`;

export const Communities = () => (
  <Wrapper style={{ height: '50vh' }}>
    <FlexBox style={{ height: '-webkit-fill-available', flexWrap: 'wrap' }}>
      <FlexBox style={{ width: '100%' }}>
        <Heading>
          Join Our <OrangeSpan>Com</OrangeSpan>munities
        </Heading>
      </FlexBox>
      <FlexBox style={{ width: '100%' }}>
        <CommunitiesImage src={mediumDcen} style={{ marginRight: '2rem' }} alt={'Medium x DCEN'} />
        <CommunitiesImage src={telegram} alt={'Telegram x DCEN'} />
      </FlexBox>
      <FlexBox style={{ width: '100%' }}>
        <FacebookImage src={facebook} alt={'Facebook x DCEN'} />
      </FlexBox>
      <CommunitiesContact>Contact</CommunitiesContact>
    </FlexBox>
  </Wrapper>
);
