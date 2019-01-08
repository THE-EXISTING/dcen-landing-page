/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Content, OrangeSpan, Wrapper } from '../../styles';
import { content } from '../../content/website';
import visionBackground from '../../images/background/img_vision_background.jpg';

const VisionsContent = styled.div`
  ${tw('text-white')};
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 575.98px) {
    width: 90%;
  }
`;

const VisionBlock = styled.div`
  ${tw('justify-center items-center flex z-50')};
  background-color: black;
  opacity: 0.85;
  height: inherit;
`;

const VisionsHeading = styled.h1`
  font-family: akrobat-bold, fantasy;
`;

const VisionsParagraph = styled.p`
  font-family: avenirnext-regular, fantasy;
  font-size: 18px;
  @media (max-width: 575.98px) {
    font-size: 14px;
  }
`;

const Creator = styled.h3`
  font-family: avenirnext-demi, fantasy;
  float: right;
`;

export const Visions = () => (
  <Content
    speed={window.outerWidth < 575.98 ? 0.375 : 0.75}
    offset={0.8}
    factor={0.7}
    style={{ backgroundImage: `url(${visionBackground})`, backgroundSize: 'cover' }}
  >
    <VisionBlock>
      <Wrapper>
        <VisionsContent>
          <VisionsHeading>
            <OrangeSpan>{content.spanOfVision}</OrangeSpan>
            {` ${content.vision}`}
          </VisionsHeading>
          <VisionsParagraph>{content.visionDescription}</VisionsParagraph>
          <Creator>{content.visionsCreator}</Creator>
        </VisionsContent>
      </Wrapper>
    </VisionBlock>
  </Content>
);
