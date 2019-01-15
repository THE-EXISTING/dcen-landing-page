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
import SEO from '../components/SEO'
import { Content } from '../styles'
import '../styles/global'

class Index extends Component {
  state = { scrollTop: 0, width: 0 }

  componentDidMount () {
    this.setState({ width: window.outerWidth })
  }

  handelScroll (event) {
    this.setState({ scrollTop: event.target.scrollTop })
  }

  render () {
    const { scrollTop } = this.state
    return (
      <React.Fragment>
        <SEO />
        <div onScroll={event => this.handelScroll(event)}>
          <Navbar scrollTop={scrollTop} />
          <Parallax pages={4}>
            <Content
              speed={this.state.width < 575.98 ? 0.375 : 0.75}
              offset={0}
              factor={1}
            >
              <Welcome />
            </Content>
            <Content
              speed={this.state.width < 575.98 ? 0.45 : 0.9}
              offset={0.8}
              factor={1}
            >
              <Visions />
            </Content>
            <Content
              speed={this.state.width < 575.98 ? 0.45 : 0.9}
              offset={1}
              factor={0}
            >
              <Communities />
            </Content>
            <Content
              speed={this.state.width < 575.98 ? 0.2 : 0.4}
              /* offset={this.state.width < 575.98 ? 1.5 : 1.89} */ offset={1.5}
              factor={1.8}
              style={{ backgroundColor: '#1A1A18' }}
            >
              <Product />
            </Content>
            <Content
              speed={this.state.width < 575.98 ? 0.2 : 0.4}
              /* offset={this.state.width < 575.98 ? 1.5 : 1.89} */

              offset={2.9}
              factor={0.5}
            >
              <Services />
            </Content>
            {/* <Content
              speed={this.state.width < 575.98 ? 0.2 : 0.4}
              offset={3.4}
              factor={0.1}
              style={{ backgroundColor: 'red' }}
            >
              <Working />
            </Content> */}
            {/* <Content
              speed={this.state.width < 575.98 ? 0.2 : 0.4}
              offset={3.9}
              factor={0.1}
              style={{ backgroundColor: 'red' }}
            >
              <Footer />
            </Content> */}
          </Parallax>
        </div>
      </React.Fragment>
    )
  }
}

export default Index
