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
  content: 'Ivan Somau production';
  font-size: 10px;
  position: absolute;
  top: 0;
  left: 20%;
}
`;


class App extends Component {
  
  render() {
    return (
    <Wrapper>
      <Title>Converter is not working yet
        <br/> :'|</Title>
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