/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Parallax } from 'react-spring/dist/addons'
import { Communities } from '../components/index/Communities'
import { Product } from '../components/index/Product'
import { Visions } from '../components/index/Visions'
import { Welcome } from '../components/index/Welcome'
import { Services } from '../components/index/Services'
import { Working } from '../components/index/Working'
import { Footer } from '../components/index/Footer'
import { Navbar } from '../components/Navbar'
import { Element } from 'react-scroll'

import SEO from '../components/SEO'
import { Content } from '../styles'
import '../styles/global'

class Index extends Component {
  state = { scrollTop: 0, width: 0 }

  componentDidMount () {
    this.setState({ width: window.outerWidth })
  }

  handelScroll = event => {
    const { scrollTop } = event.target
    this.setState({ scrollTop: scrollTop })
  }

  render () {
    const { scrollTop } = this.state
    return (
      <React.Fragment>
        <SEO />
        <div onScroll={event => this.handelScroll(event)}>
          <Navbar scrollTop={scrollTop} />
          <Parallax scrolling>
            <Welcome />
            <Element name='visions'>
              <Visions />
            </Element>
            <Element name='communities'>
              <Communities />
            </Element>
            <Element name='product'>
              <Product />
            </Element>
            <Services />
            {/* <Working /> */}
            {/* <Footer /> */}
          </Parallax>
        </div>
      </React.Fragment>
    )
  }
}

export default Index
