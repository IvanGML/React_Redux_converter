import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: maroon;
`;


const Wrapper = styled.section`
  {
  background: papayawhip;
  padding: 4em;
}
::after{
  content: 'asedfaef';
  font-size: 10px;
  position: absolute;
}
`;


class App extends Component {
  
  render() {
    return (
    <Wrapper>
      <Title>Hello World, this is my first styled component!</Title>
    </Wrapper>
    );
  }
}

export default connect(
  state => ({
    globalStore: state
  }),
  dispatch => ({})
)(App);