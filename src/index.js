module.exports = function multiply(first, second) {
  function toInt(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = parseInt(array[i]);
    }
    return result;
  }
  
  let arrayFirst = toInt(first.split('').reverse());
  let arraySecond = toInt(second.split('').reverse());
  let lengthFirst = first.length;
  let lengthSecond =second.length;
  
  let lengthResult = lengthFirst + lengthSecond - 1;

  let result = '';
  let sum = 0;
  let olderFigure = 0;
  
  for (let i = 0; i < lengthResult; i++) {
    for (let j = 0; j <= i; j++) {
      if(((i - j)<lengthFirst)&(j<lengthSecond)){
        sum += arrayFirst[j] * arraySecond[i - j];
      }
    }
    sum += olderFigure;
    olderFigure = Math.floor(sum / 10);
    result = sum%10 + result;
    sum=0;
  }
  return result;
}
  /*
  let notation =10;
  return (parseInt(first,notation)*parseInt(second,notation)).toString();
*/
