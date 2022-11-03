import { RangeValidator } from "./range_validator";

const X_VALUES = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
const Y_MIN = -3
const Y_MAX = 5;
const R_VALUES = [1, 2, 3, 4, 5];

export class InputValidator{

  static validate_values(x, y, r){
    if (
      !(RangeValidator.isInList(x, X_VALUES) &&
        RangeValidator.isInRange(y, Y_MIN, Y_MAX) &&
        RangeValidator.isInList(r, R_VALUES))
    ){
      console.error("Some value is not correct!")
      return false;
    }
    return true;
  }
}