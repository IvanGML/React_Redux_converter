export let data = [
  { 
    name: 'mm',
    index: 1
  }, {
    name: 'm',
    index: 1000
  }, {
    name: 'km',
    index: 1000000
  }, {
    name: 'g',
    index: 1
  }, {
    name: 'kg',
    index: 1000
  }, {
    name: 't',
    index: 1000000
  }
]

export let converter = (inputData, data) => {
  let convertFrom = data.filter((item) => item.name === inputData[1]);
  let convertTo = data.filter((item) => item.name === inputData[2]);
  return inputData[0] * convertFrom[0].index / convertTo[0].index;
}

export let tempConverter = (inputData) => {
  if(inputData[1] !== inputData[2]){
    if (inputData[1] === 'c'){
      return  (1.8 * inputData[0]) + 32;
    } else {
      return (inputData[0] - 32) / 1.8;
    }
  } else {
    return inputData[0];
  }
}