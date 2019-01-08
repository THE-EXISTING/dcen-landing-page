/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { content } from '../../content/website';
import visionBackground from '../../images/background/img_vision_background.jpg';
import { Content, OrangeSpan, Wrapper } from '../../styles';

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
  background-color: #0f0900;
  opacity: 0.9;
  height: inherit;
`;

const VisionsHeading = styled.p`
  font-family: akrobat-bold, fantasy;
  font-size: 3.2rem;
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
  <Content
    speed={window.outerWidth < 575.98 ? 0.3 : 0.6}
    offset={window.outerWidth < 575.98 ? 0.75 : 0.95}
    factor={0.5}
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
