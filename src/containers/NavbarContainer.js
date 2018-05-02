import React, { Component } from 'react';
import FlexRowContainer from './FlexRowContainer';

export default class NavbarContainer extends Component {
  render() {
    return (
        <header className="header">
            <FlexRowContainer>
            <div className="logo">MODERN PROJECT</div>
            <a href="https://modernproject.gitbook.io/modernproject/">BOOK</a>
            <a href="https://medium.com/@djstein/">MEDIUM</a>
            <a href="https://mailchi.mp/e6a2f550c500/11kroqv7c1">NEWSLETTER</a>
            <a href="https://www.patreon.com/djstein">PATREON</a>
            </FlexRowContainer>
        </header>
    );
  }
}
