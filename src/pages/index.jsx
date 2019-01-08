import React from 'react';
import { Parallax } from 'react-spring/dist/addons';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Visions } from '../components/index/Visions';
import { Welcome } from '../components/index/Welcome';
import { Navbar } from '../components/Navbar';
import SEO from '../components/SEO';
import '../styles/global';

const setSpeedReponsive = () => {
  if (window.outerWidth < 575.98) {
    return 'xs';
  }
};

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={3}>
      <Navbar />
      <Welcome />
      <Visions />
    </Parallax>
  </React.Fragment>
);

export default Index;
