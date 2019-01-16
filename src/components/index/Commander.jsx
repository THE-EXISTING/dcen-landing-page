/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'react-emotion'
import { DcenContent, Heading, OrangeSpan, Wrapper } from '../../styles'
import media from 'emotion-media-query'
import CommanderItem from '../common/CommanderItem'
import KRANG from '../../images/team/Nonthawit.jpg'
import NEW from '../../images/team/Panupak.jpg'
import ARM from '../../images/team/Supakorn.jpg'
import PEOPLE from '../../images/team/people.png'

const CommnaderContainer = styled.div`
  text-align: center;
  margin: 2rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (min-device-width: 480px) {
    justify-content: left;
  }
`
const CommanderContainerMobile = styled.div`
  display: none;
  text-align: center;
  @media only screen and (min-device-width: 480px) {
  }
`
const Content = styled.div`
  padding: 4rem 0 8rem 0;
`

const team = [
  {
    img: PEOPLE,
    nickname: 'NEW',
    name: 'Palakorn',
    position: `Executive Director`,
    social: []
  },
  {
    img: PEOPLE,
    nickname: 'KAEW',
    name: 'Napakkhamon',
    position: `Financial Director`,
    social: ['https://www.facebook.com/', 'https://www.linkedin.com/']
  },
  {
    img: KRANG,
    nickname: 'THE KHAENG',
    name: 'Nonthawit',
    position: `Blockchain Project manager`,
    social: [
      'https://www.facebook.com/nonthawit',
      'https://www.linkedin.com/in/nonthawit/',
      'https://github.com/TheKhaeng'
    ]
  },
  {
    img: ARM,
    nickname: 'ARM',
    name: 'Supakorn',
    position: 'Web Development',
    social: [
      'https://www.facebook.com/rainstormza',
      'https://www.linkedin.com/in/supakorn-thongtra-4a656377/',
      'https://github.com/rainstormza'
    ]
  },
  {
    img: PEOPLE,
    nickname: 'GIM',
    name: 'Thongpak',
    position: `Mobile Developer Lead`,
    social: [
      'https://www.facebook.com/',
      'https://www.linkedin.com/',
      'https://github.com/'
    ]
  },
  {
    img: NEW,
    nickname: 'BIN',
    name: 'Panupak',
    position: 'Devops Development',
    social: [
      'https://www.facebook.com/profile.php?id=100019950422810',
      'https://www.linkedin.com/in/panupak-wichaidit-a36413b1/',
      'https://github.com/newnok6'
    ]
  },
  {
    img: PEOPLE,
    nickname: 'PHET',
    name: 'Wasuwat',
    position: `Senior Blockchain Developer`,
    social: [
      'https://www.facebook.com/',
      'https://www.linkedin.com/',
      'https://github.com/'
    ]
  },
  {
    img: PEOPLE,
    nickname: 'TAII',
    name: 'Siriruk',
    position: `Director of Business Development`,
    social: [
      'https://www.facebook.com/',
      'https://www.linkedin.com/',
      'https://github.com/'
    ]
  },
  {
    img: PEOPLE,
    nickname: 'MAY',
    name: 'Awika',
    position: `Business Development Strategist`,
    social: [
      'https://www.facebook.com/',
      'https://www.linkedin.com/',
      'https://github.com/'
    ]
  },
  {
    img: PEOPLE,
    nickname: 'TRUST',
    name: 'Tanapruk',
    position: `Financial Analyst`,
    social: [
      'https://www.facebook.com/',
      'https://www.linkedin.com/',
      'https://github.com/'
    ]
  }
]

export class Commander extends React.Component {
  state = {
    activeSlide: 0
  }

  render () {
    return (
      <Content>
        <Wrapper>
          <DcenContent>
            <Heading style={{ paddingBottom: '2rem' }}>
              <OrangeSpan>Wh</OrangeSpan>o is working on this?
            </Heading>
            <CommnaderContainer>
              {team.map(item => (
                <CommanderItem key={item.name} {...item} />
              ))}
            </CommnaderContainer>
          </DcenContent>
        </Wrapper>
      </Content>
    )
  }
}
