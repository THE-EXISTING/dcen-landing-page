/* global tw */
import React from 'react';
import styled from 'react-emotion';
import facebook from '../../images/logo/Facebook.png';
import mediumDcen from '../../images/logo/Medium DCEN.png';
import telegram from '../../images/logo/Telegram.png';
import { FlexBox, Heading, OrangeSpan, Wrapper } from '../../styles';

const CommunitiesImage = styled.img`
  border: 1px solid white;
  padding: 16px;
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
        <CommunitiesImage src={facebook} style={{ marginTop: '1rem' }} alt={'Facebook x DCEN'} />
      </FlexBox>
    </FlexBox>
  </Wrapper>
);
