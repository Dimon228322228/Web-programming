export class HitResult {
  constructor(x, y, r, isHit, current_time, execution_time) {
      this._x = x;
      this._y = y;
      this._r = r;
      this._isHit = isHit;
      this._current_time = current_time;
      this._execution_time = execution_time;
  }

  get x () {
    return this._x;
  }

  get y () {
    return this._y;
  }

  get r () {
    return this._r;
  }

  get isHit () {
    return this._isHit;
  }

  get current_time () {
    return this._current_time;
  }

  get execution_time () {
    return this._execution_time;
  }
}