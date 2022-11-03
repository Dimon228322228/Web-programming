export class HitResult {
  constructor(x, y, r, isHit) {
      this._x = x;
      this._y = y;
      this._r = r;
      this.isHit = isHit;
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
    return this.isHit;
  }
}