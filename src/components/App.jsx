import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  
  render() {
    return (
      <div>
        ку-ку
      </div>
    );
  }
}

export default connect(
  state => ({
    globalStore: state
  }),
  dispatch => ({})
)(App);