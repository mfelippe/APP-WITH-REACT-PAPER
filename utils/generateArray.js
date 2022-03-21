import generateNumber from './generateNumber'

const generateArray = (quantity, min, max) => {
  const arr = [];
  for (let index = 0; index < quantity; index++) {
    let number;
    do {
      number = generateNumber(min, max);
    } while (arr.includes(number));
    arr.push(number);    
  }
  return arr;
}

export default generateArray;