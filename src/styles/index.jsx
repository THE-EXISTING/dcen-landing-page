/* eslint-disable prettier/prettier */
/* global tw */
import styled from 'react-emotion'
import { ParallaxLayer } from 'react-spring/dist/addons'
import { rotate } from './animations'

const Heading = styled.h1`
  font-family: akrobat-bold, fantasy;
  font-size: 3.2rem;
  margin-bottom: 0;
`

const DcenContent = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 575.98px) {
    width: 90%;
  }
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 575.98px) {
    width: 90%;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 85%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 80%;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 75%;
  }
  @media (min-width: 1200px) {
    width: 70%;
  }
`

const FlexBox = styled.div`
  ${tw('justify-center items-center flex')};
`

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`

const Content = styled(ParallaxLayer)`
  ${tw('justify-center items-center flex z-50')};
  flex-wrap: wrap;
`

const Hero = styled.div`
  ${tw('sm:w-full md:w-1/2')};
`

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`

const Title = styled.h1`
  ${tw(
    'text-4xl lg:text-4xl text-white mb-8 tracking-wide relative inline-block'
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`

const Subtitle = styled.p`
  ${tw('text-lg text-white')};
  font-family: avenirnext-regular, fantasy;
`

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`

const Logo = styled.img`
  margin-top: 2.2rem;
  float: left;
  transition: 0.6s;
`

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`

const AboutDesc = styled.p`
  ${tw(
    'text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify'
  )};
`

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`

const Contact = styled.button`
  ${tw('text-white')};
  font-family: akrobat-bold, fantasy;
  font-size: 1.2rem;
  border: 1px solid white;
  float: right;
  padding: 4px 8px;
  margin-top: 2rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 4px;
  text-transform: uppercase;
  @media (max-width: 575.98px) {
    margin-right: 0;
  }
  &:focus {
    outline: none;
  }
`

const OrangeSpan = styled.span`
  border-bottom: 4px solid #f29103;
  padding-bottom: 8px;
`

const BlueSpan = styled.span`
  border-bottom: 4px solid #2496ec;
  padding-bottom: 8px;
`

const Footer = styled.footer`
  ${tw(
    'text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg'
  )};
  a {
    color: #e07628;
    text-decoration: none;
  }
`

export {
  Divider,
  Title,
  Content,
  AboutDesc,
  AboutHero,
  AboutSub,
  Avatar,
  BigTitle,
  Contact,
  ContactText,
  DividerMiddle,
  Footer,
  Hero,
  Inner,
  InnerWave,
  Logo,
  ProjectsWrapper,
  Subtitle,
  WaveWrapper,
  OrangeSpan,
  Wrapper,
  FlexBox,
  Heading,
  DcenContent,
  BlueSpan
}
