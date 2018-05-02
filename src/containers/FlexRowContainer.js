import React, { Component } from 'react';

export default class FlexRowContainer extends Component {
  render() {
    return (
      <div className="flex-row">
        {this.props.children}
      </div>
    );
  }
}
