/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'react-emotion'
import { team } from '../../content/team'
import { DcenContent, Heading, OrangeSpan, Wrapper } from '../../styles'
import CommanderItem from '../common/CommanderItem'
import Carousel from 'nuka-carousel'

const CommanderContainer = styled.div`
  text-align: center;
  margin: 2rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 575.98px) {
    display: none;
  }
`
const CommanderContainerMobile = styled.div`
  display: none;
  text-align: center;
  @media (max-width: 575.98px) {
    display: block;
    margin-top: 3rem;
  }
`

const Content = styled.div`
  padding: 4rem 0 8rem 0;
`

export class Commander extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: 0,
      length: 6,
      wrapAround: false,
      underlineHeader: false,
      slidesToShow: 1,
      cellAlign: 'left',
      transitionMode: 'scroll',
      heightMode: 'max',
      withoutControls: true
    }
  }

  render () {
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
          <CommanderContainerMobile>
            <Carousel
              withoutControls={this.state.withoutControls}
              transitionMode={this.state.transitionMode}
              cellAlign={this.state.cellAlign}
              slidesToShow={this.state.slidesToShow}
              wrapAround={this.state.wrapAround}
              slideIndex={this.state.slideIndex}
              heightMode={this.state.heightMode}
            >
              {team.map(item => (
                <CommanderItem key={item.name} {...item} />
              ))}
            </Carousel>
          </CommanderContainerMobile>
        </Wrapper>
      </Content>
    )
  }
}
