class Rate {
  constructor(v = 0, max = 5) {
    if (v < 0) {
      throw Error(`v(${v}) must be a positive number`);
    }
    if (max <= 0) {
      throw Error(`max(${max}) must be a positive number`);
    }
    if (v > max) {
      throw Error(`max(${max}) must be greater than v(${v})`);
    }
    this.max = max,
    this.visualValue = v;
    this.value = v;
  }

  set(v) {
    if (v >= 0 && v <= this.max) {
      this.value = v;
    }
    return this;
  }

  get() {
    return this.value;
  }

  setV(v) {
    if (typeof v === 'undefined') {
      this.visualValue = this.value;
    } else if (v >= 0 && v <= this.max) {
      this.visualValue = v;
    }
    return this;
  }

  getV() {
    return this.visualValue;
  }

  increment() {
    if (this.value < this.max) {
      this.value = Math.floor(this.value) + 1;
    }
    this.setV();
    return this;
  }

  decrement() {
    let i = Math.floor(this.value);
    this.value = (i > 0) ? i - 1 : 0;
    this.setV();
    return this;
  }

  static createNew(v = 0, max = 5) {
    return new Rate(v, max);
  }
}

export default Rate;
