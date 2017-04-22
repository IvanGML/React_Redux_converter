import React, { Component } from 'react';
import { connect } from 'react-redux';
  import {Title, Wrapper, Input, FlexContainer, Select} from './styled';


class App extends Component {
  // very vad method :-\
  typeOfMeasurement(){
    this.outputValue.value = '';
    console.log(this.typeOfMeasurementValue.value);
    if(this.typeOfMeasurementValue.value === 'Custom'){
      this.customRateInput.style.display = 'block';
      this.selectFROM.style.display = 'none'
      this.selectTO.style.display = 'none'
      this.specifiedMeasSelect.style.display = 'none'
    } else if (this.typeOfMeasurementValue.value === 'Specified'){
      this.selectFROM.style.display = 'block'
      this.selectTO.style.display = 'block'
      this.specifiedMeasSelect.style.display = 'block'
      this.customRateInput.style.display = 'none';
    } else {
      this.selectFROM.style.display = 'none'
      this.customRateInput.style.display = 'none';
      this.selectTO.style.display = 'none'
      this.specifiedMeasSelect.style.display = 'none'
    }
  }
  onChangeCustom(){
    this.props.cusotomToStore(this.customRateInput.value);

  }
  onChangeInitial(){
    this.props.initialValueToStore(this.initialValue.value)
  }
  componentDidUpdate(){
    let initial = this.props.globalStore.INITIAL_VALUE_TO_STORE;
    let custom = this.props.globalStore.CUSTOM_VALUE_TO_STORE;
    let selectVal = this.typeOfMeasurementValue.value;

    if(initial !== '' && custom !== '' && selectVal === 'Custom'){
      this.outputValue.value = custom * initial;
    }
  }
  render() {
    return (
    <Wrapper>
      <Title>Converter is not working yet :'|</Title>
        <FlexContainer>
          <Input 
          type='number' 
          placeholder='Put in'
          innerRef={(select)=>{this.initialValue = select}}
          onInput={this.onChangeInitial.bind(this)}></Input>
          <Select innerRef={(select)=>{this.selectFROM = select}} style={{display: 'none'}}>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </Select>
        </FlexContainer>
        <FlexContainer>
          <Input 
          type='text' 
          readOnly 
          innerRef={(input)=>{this.outputValue = input}}
          placeholder='Put out'></Input>
          <Select innerRef={(select)=>{this.selectTO = select}} style={{display: 'none'}}>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </Select>
        </FlexContainer>
        <FlexContainer className='rateDiv'>
          <span>Rate</span>
          <Input 
          type='number' 
          placeholder='Custom rate' 
          innerRef={(input)=>{this.customRateInput = input}} 
          style={{display: 'none'}}
          onInput={this.onChangeCustom.bind(this)}></Input>
          <Select innerRef={(thisSelect)=>{this.specifiedMeasSelect = thisSelect}} style={{display: 'none'}}>
            <option value='Weight'>Weight</option>
            <option value='Length'>Length</option>
            <option value='Temperature'>Temperature</option>
          </Select>
          <Select 
            onChange={this.typeOfMeasurement.bind(this)}
            innerRef={(select)=>{this.typeOfMeasurementValue = select}}>
            <option value='Chose type of measurement'>Chose type of measurement</option>
            <option value='Custom'>Custom</option>
            <option value='Specified'>Specified</option>
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
  dispatch => ({
    cusotomToStore: (value) => {
      dispatch({ type: 'CUSTOM_VALUE_TO_STORE', payload: value});
    },
    initialValueToStore: (value) => {
      dispatch({ type: 'INITIAL_VALUE_TO_STORE', payload: value});
    }
  })
)(App);