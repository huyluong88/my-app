import React, { Component } from 'react';


class Child extends Component {


  render() {
    return (
      <div>
        <strong>{this.props.somePropertyName}</strong>
        <button onClick={this.props.dealWithClick}>Click to increment </button>
      </div>
    );
  }
}



export default Child;
