import assert from 'power-assert';
import getStarValue from '../src/helpers/getStarValue.js';

describe('getStarValue', function() {
  let tests;

  beforeEach(function() {
    tests = [
      [[1, 3], 10],
      [[3, 3], 10],
      [[4, 3], 0],
      [[5, 3], 0],
      [[1, 2.3], 10],
      [[2, 2.3], 10],
      [[3, 2.3], 3],
      [[4, 2.3], 0],
      [[5, 2.3], 0],
      [[1, 2.38], 10],
      [[2, 2.38], 10],
      [[3, 2.38], 4],
      [[4, 2.38], 0],
      [[5, 2.38], 0]
    ];
  });

  it('make star value from index and rate value', function() {
    tests.forEach(function(test) {
      let index = test[0][0];
      let rateValue = test[0][1];
      assert(getStarValue(index, rateValue) === test[1]);
    });
  });
});
