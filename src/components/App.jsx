import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Title, Wrapper, Input, FlexContainer, Select} from './styled';
import {Weight, Length, Temperature} from '../data/measurements.js'
import {data, converter, tempConverter} from '../data/businessLogic.js'

class App extends Component {
  constructor(props){
    super(props);
    this.formHandler = this.formHandler.bind(this);
  }
  typeOfMeasurement(e){
    
    this.props.changeTypesOfGroupOfMeas(e.target.value);
  }
  onChangeCustom(e){
    this.props.cusotomToStore(e.target.value);
  }
  onChangeInitial(e){
    this.props.initialValueToStore(e.target.value)
  }
  businessLogicInit(){
    let initial = this.props.globalStore.INITIAL_VALUE_TO_STORE;
    let custom = this.props.globalStore.CUSTOM_VALUE_TO_STORE;
    let selectVal = this.props.globalStore.CHANGE_TYPE_OF_GROUP_OF_MEASUREMENTS;
    if(this.props.globalStore.CHANGE_TYPE_OF_MEASUREMENTS !== 'Temperature'){
      if(initial !== '' && custom !== '' && selectVal === 'Custom'){
        this.outputValue.value = custom * initial;
      }
      if(initial !== '' && selectVal === 'Specified'){
        this.outputValue.value = converter(this.props.globalStore.CREATE_CALC_ARRAY , data)
      }
    } else if(this.props.globalStore.CHANGE_TYPE_OF_MEASUREMENTS === 'Temperature') {
      this.outputValue.value = tempConverter(this.props.globalStore.CREATE_CALC_ARRAY )
    }
  }
  componentDidUpdate(){
    this.outputValue.value = '';
    
    if(this.props.globalStore.CHANGE_TYPE_OF_GROUP_OF_MEASUREMENTS === 'Custom'){
      this.customRateInput.style.display = 'block';
      this.selectFROM.style.display = 'none'
      this.selectTO.style.display = 'none'
      this.specifiedMeasSelect.style.display = 'none'
    } else if (this.props.globalStore.CHANGE_TYPE_OF_GROUP_OF_MEASUREMENTS === 'Specified'){
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
    // console.log([this.initialValue.value, this.selectFROM.value, this.selectTO.value]);
    this.businessLogicInit()
  }
  changeTypeOfSpecified(e){
    this.props.changeTypeOfDropdownWithMeas(e.target.value)
    if(e.target.value === 'Weight'){this.props.changeTypesOfMeas(Weight)}
    if(e.target.value === 'Length'){this.props.changeTypesOfMeas(Length)}
    if(e.target.value === 'Temperature'){this.props.changeTypesOfMeas(Temperature)}
  }

  formHandler(){
    this.businessLogicInit()
    if(this.props.globalStore.CHANGE_TYPE_OF_GROUP_OF_MEASUREMENTS === 'Specified'){this.props.createCalcArray([this.initialValue.value, this.selectFROM.value, this.selectTO.value])}
  }
  render() {
    return (
    <Wrapper>
      <Title>Converter is working now ^_^</Title>
        <form onChange={this.formHandler}>
        <FlexContainer>
          <Input 
          type='number' 
          placeholder='Put in'
          innerRef={(select)=>{this.initialValue = select}}
          onInput={this.onChangeInitial.bind(this)}></Input>
          <Select 
            innerRef={(select)=>{this.selectFROM = select}}
            style={{display: 'none'}}>
            {this.props.globalStore.MEASUREMENTS.map((item, index)=>( <option key={index} value={item}>{item}</option> ))}
          </Select>
        </FlexContainer>
        <FlexContainer>
          <Input 
          type='text' 
          readOnly 
          innerRef={(input)=>{this.outputValue = input}}
          placeholder='Result'></Input>
          <Select 
            innerRef={(select)=>{this.selectTO = select}}
            style={{display: 'none'}}>
            {this.props.globalStore.MEASUREMENTS.map((item, index)=>( <option key={index} value={item}>{item}</option> ))}
          </Select>
        </FlexContainer>
        <FlexContainer className='rateDiv'>
          <span>Rate</span>
          <Select 
            onChange={this.typeOfMeasurement.bind(this)}>
            <option value='Chose type of measurement'>Chose type of measurement</option>
            <option value='Custom'>Custom</option>
            <option value='Specified'>Specified</option>
          </Select>
          <Input 
          type='number' 
          placeholder='Custom rate' 
          innerRef={(input)=>{this.customRateInput = input}} 
          style={{display: 'none'}}
          onInput={this.onChangeCustom.bind(this)}></Input>
          <Select 
            innerRef={(thisSelect)=>{this.specifiedMeasSelect = thisSelect}} 
            onChange={this.changeTypeOfSpecified.bind(this)}
            style={{display: 'none'}}>
            <option value='Weight'>Weight</option>
            <option value='Length'>Length</option>
            <option value='Temperature'>Temperature</option>
          </Select>
        </FlexContainer>
        </form>
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
    },
    changeTypesOfMeas: (value) => {
      dispatch({ type: 'MEASUREMENTS', payload: value});
    },
    changeTypeOfDropdownWithMeas: (value) => {
      dispatch({type: 'CHANGE_TYPE_OF_MEASUREMENTS', payload: value})
    },
    changeTypesOfGroupOfMeas: (value) => {
      dispatch({ type: 'CHANGE_TYPE_OF_GROUP_OF_MEASUREMENTS', payload: value});
    },
    createCalcArray: (value) => {
      dispatch({ type: 'CREATE_CALC_ARRAY', payload: value});
    }
  })
)(App);