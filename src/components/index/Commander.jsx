import React from 'react';
import styled from 'react-emotion';
import { team } from '../../content/team';
import { DcenContent, Heading, OrangeSpan, Wrapper } from '../../styles';
import CommanderItem from '../common/CommanderItem';

const CommanderContainer = styled.div`
  text-align: center;
  margin: 2rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (min-device-width: 480px) {
    justify-content: left;
  }
`;
const CommanderContainerMobile = styled.div`
  display: none;
  text-align: center;
  @media only screen and (min-device-width: 480px) {
  }
`;
const Content = styled.div`
  padding: 4rem 0 8rem 0;
`;



export class Commander extends React.Component {
  state = {
    activeSlide: 0
  };

  render() {
    return (
      <Content>
        <Wrapper>
          <DcenContent>
            <Heading style={{ paddingBottom: '2rem' }}>
              <OrangeSpan>Wh</OrangeSpan>o is working on this?
            </Heading>
          </DcenContent>
          <CommanderContainer>
            {team.map(item => (
              <CommanderItem key={item.name} {...item} />
            ))}
          </CommanderContainer>
        </Wrapper>
      </Content>
    );
  }
}
