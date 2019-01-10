/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { content } from '../../content/website';
import appStore from '../../images/logo/appstore.png';
import dellet from '../../images/logo/dellet.png';
import googlePlay from '../../images/logo/googleplay.png';
import { DcenContent, Heading, OrangeSpan, Wrapper } from '../../styles';

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

export const Product = () => (
  <Wrapper style={{ height: 'auto' }}>
    <DcenContent style={{ height: '100%', display: 'flex' }}>
      <ProductContent>
        <Heading>
          <OrangeSpan>Pro</OrangeSpan>duct
        </Heading>
        <ProductHeading>
          <span style={{ color: 'orange' }}>F</span>irst Product
        </ProductHeading>
        <div>
          <ProductImage src={dellet} role={'logo'} alt={'Dellet Logo'} />
        </div>
        <ProductParagraph>{content.productDescription}</ProductParagraph>
      </ProductContent>
      <ProductContent style={{ alignItems: 'flex-end' }}>
        <div>
          <ProductImage src={googlePlay} role={'button'} alt={'Download our app on Google Play'} />
          <ProductImage
            style={{ marginTop: window.outerHeight > 1000 ? '5.5rem' : '7.5rem' }}
            src={appStore}
            role={'button'}
            alt={'Download our app on App Store'}
          />
        </div>
      </ProductContent>
    </DcenContent>
  </Wrapper>
);
