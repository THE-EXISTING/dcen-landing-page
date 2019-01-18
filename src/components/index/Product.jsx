/* eslint-disable prettier/prettier */
/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { content } from '../../content/website';
import imgArch from '../../images/detail/img_architecture_chart.png';
import timeline from '../../images/detail/img_delete_timeline.png';
import delletproduct from '../../images/detail/img_dellet_product.png';
import appStore from '../../images/logo/appstore.png';
import dellet from '../../images/logo/dellet.png';
import googlePlay from '../../images/logo/googleplay.png';

import { BlueSpan, DcenContent, Heading, Hero, OrangeSpan, Wrapper } from '../../styles';

const ProductHeading = styled.h2`
  font-family: avenirnext-medium, fantasy;
  font-weight: 100;
  font-size: 2rem;
`;

const ProductContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & > * {
    margin-bottom: 4rem;
  }
`;

const ProductParagraph = styled.p`
  font-family: avenirnext-regular, fantasy;
  font-size: 1.6rem;
`;

const ProductImage = styled.img`
  display: block;
  @media (max-width: 575.98px) {
    width: 20rem;
  }
`;
const ProductImageArch = styled.img`
  display: block;
  height: 493px;
  width: 817px;
  @media (max-width: 575.98px) {
    width: 817px;
  }

  @media (min-width: 320px) {
    /* smart phones, iPhone, portrait 480x320 phones */
    height: 100%;
    width: 100%;
  }
  @media (min-width: 481px) {
    height: 100%;
    width: 100%;
    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
  }
  @media (min-width: 641px) {
    height: 100%;
    width: 100%;
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  }
  @media (min-width: 961px) {
    height: 493px;
    width: 817px;
    /* tablet, landscape iPad, lo-res laptops ands desktops */
  }
  @media (min-width: 1025px) {
    height: 493px;
    width: 817px;
    /* big landscape tablets, laptops, and desktops */
  }
  @media (min-width: 1281px) {
    height: 493px;
    width: 817px;
    /* hi-res laptops and desktops */
  }
`;

export const Product = ({ height }) => (
  <div
    style={{
      backgroundColor: '#1A1A18',
      paddingBottom: '3rem',
      paddingTop: '3rem'
    }}
  >
    <Wrapper style={{ height: 'auto' }}>
      <DcenContent style={{ height: '100%', display: 'flex' }}>
        <ProductContent>
          <Heading>
            <OrangeSpan>Pro</OrangeSpan>duct
          </Heading>
          <ProductHeading>
            <span style={{ color: 'orange' }}>F</span>irst Product
          </ProductHeading>
          <div style={{ height: '100%', width: '100%' }}>
            <ProductImage
              src={dellet}
              alt={'Dellet Logo'}
              style={{ height: '50%' }}
            />
          </div>
          <ProductParagraph>{content.productDescription}</ProductParagraph>
        </ProductContent>
        <ProductContent style={{ alignItems: 'flex-end' }}>
          <div>
            <ProductImage
              src={googlePlay}
              role={'button'}
              style={{ cursor: 'pointer' }}
              alt={'Download our app on Google Play'}
            />
            <ProductImage
              style={{
                marginTop: height > 1000 ? '5.5rem' : '7.5rem',
                cursor: 'pointer'
              }}
              src={appStore}
              role={'button'}
              alt={'Download our app on App Store'}
            />
          </div>
        </ProductContent>
      </DcenContent>
      {/* Architecture */}
      <DcenContent style={{ height: '100%', display: 'flex' }}>
        <ProductContent>
          <ProductHeading>
            <BlueSpan>Arch</BlueSpan>itecture
          </ProductHeading>
          <Hero style={{ width: '100%', height: '100%', textAlign: 'center' }}>
            <ProductImageArch
              src={imgArch}
              role={'button'}
              alt={'Architecture chart'}
            />
          </Hero>
        </ProductContent>
      </DcenContent>
      {/* Timeline */}
      <DcenContent style={{ height: '100%', display: 'flex' }}>
        <ProductContent>
          <ProductHeading>
            <BlueSpan>Tim</BlueSpan>eline
          </ProductHeading>
        </ProductContent>
      </DcenContent>
      <Hero style={{ width: '100%', textAlign: 'center' }}>
        <ProductImage
          style={{ height: '100%', width: '100%' }}
          src={timeline}
          role={'button'}
          alt={'Timeline'}
        />
      </Hero>
      {/* Product overview */}
      <DcenContent
        style={{ height: '100%', display: 'flex', marginTop: '5rem' }}
      >
        <ProductContent>
          <ProductHeading>
            <BlueSpan>Prod</BlueSpan>uct overview
          </ProductHeading>
        </ProductContent>
      </DcenContent>
      <Hero style={{ width: '100%', textAlign: 'center' }}>
        <ProductImage
          style={{ height: '100%', width: '100%' }}
          src={delletproduct}
          role={'button'}
          alt={'delletproduct'}
        />
      </Hero>
    </Wrapper>
  </div>
);
