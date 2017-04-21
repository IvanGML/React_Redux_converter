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
  min-height: 100vh;
}
`;

const Input = styled.input`
&:read-only{
  background-color: #efefef;
}
{
  margin: 20px 0 20px 20px;
  display: block;
  width: 300px;
  font-family: sans-serif;
  font-size: 18px;
  appearance: none;
  border-radius: none;
  transition: border 0.3s;
  outline: none;
  padding: 10px;
  padding-top: 11px;
  transition: 0.3s;
  border: none;
  border-bottom: solid 2px #c9c9c9;
}
&:focus{
  border-bottom: solid 2px #969696;
}
`

const FlexContainer = styled.div`
  {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Select = styled.select`
  margin: 20px 20px 20px 0;
  display: block;
  font-family: sans-serif;
  font-size: 18px;
  appearance: none;
  border-radius: none;
  transition: border 0.3s;
  outline: none;
  padding: 10px;
  transition: 0.3s;
  border: none;
  border-bottom: solid 2px #c9c9c9;
`



class App extends Component {
  
  render() {
    return (
    <Wrapper>
      <Title>Converter is not working yet :'|</Title>
        <FlexContainer>
          <Input type='number' placeholder='Put in'></Input>
          <Select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </Select>
        </FlexContainer>
        <FlexContainer>
          <Input type='text' readOnly placeholder='Put out'></Input>
          <Select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </Select>
        </FlexContainer>
        <FlexContainer>
          <span>Rate</span>
          <Select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </Select>
          <Select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </Select>
        </FlexContainer>
        
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