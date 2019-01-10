/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { content } from '../../content/website';
import visionBackground from '../../images/background/img_vision_background.jpg';
import { DcenContent, Heading, OrangeSpan, Wrapper } from '../../styles';

const VisionBlock = styled.div`
  ${tw('justify-center items-center flex z-50')};
  background-color: #0f0900;
  opacity: 0.9;
  height: inherit;
`;

const VisionsParagraph = styled.p`
  font-family: avenirnext-regular, fantasy;
  font-size: 1.8rem;
`;

const Creator = styled.p`
  font-family: avenirnext-demi, fantasy;
  float: right;
  font-size: 1.8rem;
`;

export const Visions = () => (
  <div style={{ backgroundImage: `url(${visionBackground})`, backgroundSize: 'cover', height: '50vh' }}>
    <VisionBlock>
      <Wrapper>
        <DcenContent>
          <Heading>
            <OrangeSpan>{content.spanOfVision}</OrangeSpan>
            {` ${content.vision}`}
          </Heading>
          <VisionsParagraph>{content.visionDescription}</VisionsParagraph>
          <Creator>{content.visionsCreator}</Creator>
        </DcenContent>
      </Wrapper>
    </VisionBlock>
  </div>
);
