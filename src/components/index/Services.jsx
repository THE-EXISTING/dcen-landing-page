/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'react-emotion'
import logo_dcen from '../../images/logo/logo_dcen.png'
import consult from '../../images/detail/img_consult.jpg'
import BlockChain from '../../images/logo/blockchain_service.png'
import {
  DcenContent,
  Heading,
  OrangeSpan,
  Wrapper,
  Contact
} from '../../styles'

const VisionBlock = styled.div`
  ${tw('justify-center items-center flex z-50')};
  background-color: #0f0900;
  opacity: 0.9;
  height: inherit;
`

const VisionsParagraph = styled.p`
  font-family: avenirnext-regular, fantasy;
  font-size: 1.6rem;
`

const Creator = styled.p`
  font-family: avenirnext-demi, fantasy;
  float: right;
  font-size: 1.8rem;
`
const ProductHeading = styled.h2`
  font-family: avenirnext-medium, fantasy;
  font-weight: 100;
  margin-bottom: 0;
  font-size: 2rem;
`
const ProductContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & > * {
    margin-bottom: 4rem;
  }
`
const ProductImage = styled.img`
  display: block;
  @media (max-width: 575.98px) {
    width: 20rem;
  }
`
const ProductParagraph = styled.p`
  font-family: avenirnext-regular, fantasy;
  font-size: 1.6rem;
`
const CommunitiesContact = styled(Contact)`
  padding: 12px 24px;
  font-size: 2rem;
  @media (max-width: 575.98px) {
    padding: 6px 12px;
  }
`

const Detail = {
  content:
    'We are specialise in blockchain platform. We can provide you full ico services. From creating coins to writing white paper. Your crowdsale service can be customised as needed. Also, we can customize decentralized database for you in any platform. Lastly, we can train your staff about blockchain concepts from basic to advance.'
}

export const Services = () => (
  <div
    style={{
      backgroundImage: `url(${consult})`,
      backgroundSize: 'cover',
      height: '100%',
      width: '100%'
    }}
  >
    <VisionBlock>
      <Wrapper>
        <DcenContent style={{ height: '100%', display: 'flex' }}>
          <ProductContent style={{ alignItems: 'flex-start' }}>
            <Heading>
              <OrangeSpan>Ser</OrangeSpan>
              vice
            </Heading>
            <ProductHeading>
              <span style={{ color: 'orange' }}>B</span>LOCKCHAIN
            </ProductHeading>
            <ProductHeading>Consultant Service</ProductHeading>
            <VisionsParagraph>{Detail.content}</VisionsParagraph>
            <CommunitiesContact>Contact</CommunitiesContact>
          </ProductContent>
          <ProductContent style={{ alignItems: 'flex-end' }}>
            <div>
              <ProductImage
                src={BlockChain}
                role={'button'}
                alt={'BlockChain'}
                style={{ height: 'auto', width: '100%' }}
              />
            </div>
          </ProductContent>
        </DcenContent>
      </Wrapper>
    </VisionBlock>
  </div>
)
