import assert from 'power-assert';
import extractIntDeci from '../src/helpers/extractIntDeci.js';

describe('extractIntDeci', function() {
  let tests;

  beforeEach(function() {
    tests = [
      [1, [1, 0]],
      [1.1, [1, 1]],
      [1.12, [1, 12]],
      [12.12, [12, 12]],
      [0.1, [0, 1]],
      [0.12, [0, 12]],
      [0.18, [0, 18]],
      [-1, [-1, 0]],
      [-1.1, [-1, 1]],
      [-1.12, [-1, 12]],
      [-12.12, [-12, 12]],
      [-0.1, [0, 1]],
      [-0.12, [0, 12]],
      [-0.18, [0, 18]]
    ];
  });

  it('extract integer and decimal', function() {
    tests.forEach(function(t) {
      assert.deepStrictEqual(extractIntDeci(t[0]), t[1]);
    });
  });
});
