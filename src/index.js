module.exports = function multiply(first, second) {
  function toInt(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = parseInt(array[i]);
    }
    return result;
  }
  function crutch(value) {
    if (typeof value === 'number' & isFinite(value)) {
      return value;
    } else {
      return value = 0;
    }
  }
  let arrayFirst = toInt(first.split('').reverse());
  let arraySecond = toInt(second.split('').reverse());
  let lengthFirst = first.length, lengthSecond =second.length;
  let lengthResult = lengthFirst + lengthSecond - 1;
  let result = '', sum = 0, olderFigure = 0;
  
  for (let i = 0; i < lengthResult; i++) {
    for (let j = 0; j <= i; j++) {
      if (((i - j) < second.length) & (j < first.length)) {
        sum += crutch(arrayFirst[j] * arraySecond[i - j]);
      } else {
        sum += 0;
      }
    }
    sum += olderFigure;
    olderFigure = Math.floor(sum / 10);
    result = sum%10 + result;
    sum=0;
  }
  if(olderFigure>0){
    result = olderFigure + result;
  }
  return result;
}
