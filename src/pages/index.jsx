import React, { Component } from 'react';
import { Parallax } from 'react-spring/dist/addons';
import { Communities } from '../components/index/Communities';
import { Visions } from '../components/index/Visions';
import { Welcome } from '../components/index/Welcome';
import { Navbar } from '../components/Navbar';
import SEO from '../components/SEO';
import { Content } from '../styles';
import '../styles/global';

class Index extends Component {
  state = { scrollTop: 0 };

  handelScroll(event) {
    this.setState({ scrollTop: event.target.scrollTop });
  }

  render() {
    const { scrollTop } = this.state;
    return (
      <React.Fragment>
        <SEO />
        <div onScroll={event => this.handelScroll(event)}>
          <Navbar scrollTop={scrollTop} />
          <Parallax pages={3}>
            <Content speed={window.outerWidth < 575.98 ? 0.3 : 0.75} offset={0} factor={1}>
              <Welcome />
            </Content>
            <Content speed={window.outerWidth < 575.98 ? 0.45 : 0.9} offset={0.95} factor={1}>
              <Visions />
              <Communities />
            </Content>
          </Parallax>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
