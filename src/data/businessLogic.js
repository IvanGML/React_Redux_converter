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
  let convertFrom = 0;
  let convertTo = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name===inputData[1]) {
      convertFrom = data[i].index;
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].name===inputData[2]) {
      convertTo = data[i].index;
    }
  }
  return inputData[0] * convertFrom / convertTo;
}