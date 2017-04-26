import styled from 'styled-components';

export const Title = styled.h1`
{
  font-size: 1.5em;
  color: maroon;
  width: 400px;
  margin: 20px auto;
}
`;

export const Wrapper = styled.section`
{
  background: #fafafa;
  padding: 4em;
  min-height: 100vh;
}
`;

export const Input = styled.input`
&:read-only{
  background-color: #efefef;
}
{
  margin: 20px 0;
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
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
&.rateDiv span{
  position: absolute;
  left: -50px;
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
