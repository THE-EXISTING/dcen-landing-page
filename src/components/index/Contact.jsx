/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'react-emotion'
import { DcenContent, Heading, OrangeSpan, Wrapper } from '../../styles'

const CenterContent = styled.div`
  text-align: center;
  justify-content: center;
  font-family: avenirnext-medium, fantasy;
  font-size: 24pt;
  @media (max-width: 575.98px) {
    font-size: 16pt;
  }
`;
const Color = styled.div`
  color: #f29103;
`
const Content = styled.div`
  background-color: #1a1a18;
  padding-bottom: 10rem;
  padding-top: 10rem;
`
export const Contact = () => (
  <Content>
    <Wrapper style={{ height: 'auto' }}>
      <DcenContent
        style={{ height: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <CenterContent>
          Unlock all your restrictions to
          <Color>your first decentralized experience with</Color>
          us, the last jigsaw you need.
        </CenterContent>
      </DcenContent>
    </Wrapper>
  </Content>
)
