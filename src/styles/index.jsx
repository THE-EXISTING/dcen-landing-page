/* eslint-disable prettier/prettier */
/* global tw */
import styled from 'react-emotion'

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

const Hero = styled.div`
  ${tw('sm:w-full md:w-1/2')};
`

const Subtitle = styled.p`
  ${tw('text-lg text-white')};
  font-family: avenirnext-regular, fantasy;
`

const Logo = styled.img`
  margin-top: 2.2rem;
  float: left;
  transition: 0;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    cursor: pointer;
    border-bottom: 2px solid #e79627;
    padding-bottom: 0.3rem;
  }
  @media (max-width: 575.98px) {
    margin: 3rem;
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    margin: 3rem;
  }
  @media (min-width: 1200px) {
    margin-top: 2.2rem;
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
  transition: 500ms;
  @media (max-width: 575.98px) {
    margin-right: 0;
  }
  &:focus {
    outline: none;
    background-color: white;
    color: black;
  }
  &:hover {
    background-color: white;
    color: black;
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

export {
  Contact,
  Hero,
  Logo,
  Subtitle,
  OrangeSpan,
  Wrapper,
  FlexBox,
  Heading,
  DcenContent,
  BlueSpan
}
