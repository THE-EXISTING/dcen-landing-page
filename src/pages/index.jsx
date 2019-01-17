/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Communities, Contact, Footer, Product, Services, Visions, Welcome } from '../components/index';
import { Commander } from '../components/index/Commander';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import '../styles/global';

class Index extends Component {
  state = { scrollTop: 0, width: 0, parallax: undefined };

  componentDidMount () {
    this.setState({ width: window.outerWidth })
  }

  handelScroll = event => {
    const { scrollTop } = event.target;
    this.setState({ scrollTop: scrollTop })
  };

  render () {
    const { scrollTop } = this.state;
    return (
      <React.Fragment>
        <SEO/>
        <div onScroll={event => this.handelScroll(event)}>
          <Navbar scrollTop={scrollTop}/>
          <Welcome/>
          <Element name='visions'>
            <Visions/>
          </Element>
          <Element name='communities'>
            <Communities/>
          </Element>
          <Element name='product'>
            <Product/>
          </Element>
          <Element name='services'>
            <Services/>
          </Element>
          <Element name='commanders'>
            <Commander/>
          </Element>
          <Element name='contact'>
            <Contact/>
          </Element>
          <Element name='footer'>
            <Footer/>
          </Element>
        </div>
      </React.Fragment>
    );
  }
}

export default Index
