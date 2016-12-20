import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Child from './Child'

// class App extends Component {
//   constructor(){
//   super()
//   this.state = {
//     clicked:0
//   }
// }
//   handleClick(){
//     this.setState({
//       clicked: this.state.clicked + 1
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p> Two plus two is {2+2}</p>
//         <p>the button has been clicked {this.state.clicked} times.</p>
//         <Child somePropertyName="TADA!" dealWithClick={this.handleClick.bind(this)}/>{/* this lets it know it camer from APP, not CHILD*/}
//       </div>
//     );
//   }
// }


class TweetBox extends Component{
  constructor(){
    super()
    this.state = {
      text: "",
      photoAdded: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.togglePhoto = this.togglePhoto.bind(this)
    // this.overflowAlert = this.overflowAlert.bind(this)

    // this.remainingCharacters = this.remainingCharacters.bind(this)
  }

  handleChange(event) {

    this.setState({ text: event.target.value });
  }
  togglePhoto(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  }

  overflowAlert() {
    if (this.remainingCharacters() < 0) {
      if (this.state.photoAdded) {
        var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
        var overflowText = this.state.text.substring(140 - 23);
      } else {
        var beforeOverflowText = this.state.text.substring(140 - 10, 140);
        var overflowText = this.state.text.substring(140);
      }

      return (
        <div className="alert alert-warning">
          <strong>Oops! Too Long:</strong>
          &nbsp;...{beforeOverflowText}
          <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    } else {
      return "";
    }
  }

  remainingCharacters() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  }
  render() {
    return (
      <div className="well clearfix">
        { this.overflowAlert() }
        <textarea className="form-control"
                  onChange={this.handleChange}></textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <button className="btn btn-primary pull-right"
          disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>
        <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
        </button>
      </div>
    );
  }
};

// export default App;
export default TweetBox;
