import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid-container">

        <header className="header">
          <h1 className="">MODERN PROJECT</h1>
        </header>

        <div className="about">
          <p>this is modernproject</p>
          <a href="https://medium.com/@djstein/">the blog</a>
          <br/>
          <a href="https://docs.modernproject.io">the book</a>
          <br/>
          <a href="https://github.com/modernproject">source code</a>
        </div>

        <div className="subscribe">
          <p>for updates</p>
          <a href="https://medium.com/@djstein/">MEDIUM</a>
          <br/>
          <a href="https://www.patreon.com/djstein">PATREON</a>
        </div>

        <footer className="footer">
          <h1 className="">MODERN PROJECT</h1>

          <div className="footer-container">
            <a href="https://medium.com/@djstein/">MEDIUM</a>
          </div>
          <div className="footer-container">
            <a href="https://www.patreon.com/djstein">PATREON</a>
          </div>
          <div className="footer-container">
            <a href="https://github.com/modernproject">GITHUB</a>
          </div>
          <div className="footer-container">
            <a href="https://docs.modernproject.io">GITBOOK</a>
          </div>
          <div className="footer-container">
            <a href="https://twitter.com/d_j_stein">TWITTER</a>
          </div>
          <div className="footer-container">
            <a href="https://djstein.github.io">by DYLAN STEIN</a>
            <p>2017 - 2018</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
