import styled from 'styled-components';

export const Title = styled.h1`
{
  font-size: 1.5em;
  text-align: center;
  color: maroon;
}
`;

export const Wrapper = styled.section`
{
  background: papayawhip;
  padding: 4em;
  min-height: 100vh;
}
`;

export const Input = styled.input`
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
&[placeholder='Custom rate']{
  width: 100px;
}
`;

export const FlexContainer = styled.div`
{
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
&.rateDiv{
  justify-content: space-around;  
}
`;

export const Select = styled.select`
{
  margin: 20px 0;
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
}
`;
