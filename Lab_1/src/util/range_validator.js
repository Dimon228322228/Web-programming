export class RangeValidator{
  static isInList(value, array){
    return isNumber(value) && array.includes(value);
  }
  static isInRange(value, min, max){
    return isNumber(value) && (value > min && value < max);
  }
}

function isNumber( value ){
  return !Number.isNaN(value);
}