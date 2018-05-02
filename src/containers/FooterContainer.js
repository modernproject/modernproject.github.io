import React, { Component } from 'react';
import FlexRowContainer from './FlexRowContainer';

export default class FooterContainer extends Component {
  render() {
    return (
        <footer className="footer">
          <FlexRowContainer>
            <div className="logo">MODERN PROJECT</div>
        
            <a href="https://modernproject.gitbook.io/modernproject/">BOOK</a>
            <a href="https://medium.com/@djstein/">MEDIUM</a>
            <a href="https://mailchi.mp/e6a2f550c500/11kroqv7c1">NEWSLETTER</a>
            <a href="https://www.patreon.com/djstein">PATREON</a>
            <a href="https://github.com/modernproject">GITHUB</a>

            <a href="https://twitter.com/d_j_stein">TWITTER</a>
            <a href="https://djstein.github.io">BY DYLAN STEIN</a>
          </FlexRowContainer>
        </footer>
    );
  }
}


