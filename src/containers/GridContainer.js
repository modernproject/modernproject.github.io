import React, { Component } from 'react';

export default class GridContainer extends Component {
  render() {
    return (
      <div className="grid-container">
        {this.props.children}
      </div>
    );
  }
}
