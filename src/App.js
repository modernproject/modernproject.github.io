import React, { Component } from 'react';
import './App.css';

import GridContainer from './containers/GridContainer'
import NavbarContainer from './containers/NavbarContainer'
// import ContentsContainer from './containers/ContentsContainer'
// import NewsletterContainer from './containers/NewsletterContainer'
// import PatreonContainer from './containers/PatreonContainer'
import FooterContainer from './containers/FooterContainer'

class App extends Component {
  render() {
    return (
      <GridContainer>

        <NavbarContainer />

        <div className="about">
          <p>this is modernproject</p>
          <a href="https://medium.com/@djstein/">the blog</a>
          <br/>
          <a href="https://modernproject.gitbook.io/modernproject/">the book</a>
          <br/>
          <a href="https://github.com/modernproject">source code</a>
        </div>

        <div className="subscribe">
          <p>for updates</p>
          <a href="https://medium.com/@djstein/">MEDIUM</a>
          <br/>
          <a href="https://www.patreon.com/djstein">PATREON</a>
        </div>

        <FooterContainer />
      </GridContainer>

    );
  }
}

export default App;
