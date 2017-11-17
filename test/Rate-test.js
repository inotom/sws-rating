import assert from 'power-assert';
import Rate from '../src/models/Rate.js';

describe('Rate class', function() {

  describe('initialization', function() {
    let r1, r2, r3;

    beforeEach(function() {
      r1 = Rate.createNew();
      r2 = Rate.createNew(2.3);
      r3 = Rate.createNew(5.7, 10);
    });

    it('default value', function() {
      assert(r1.get() === 0);
      assert(r1.getV() === 0);
      assert(r2.get() === 2.3);
      assert(r2.getV() === 2.3);
      assert(r3.get() === 5.7);
      assert(r3.getV() === 5.7);
    });
  });

  describe('failed initialization', function() {

    it('invalid default value', function() {
      assert.throws(function() {
        Rate.createNew(-1);
      });
    });

    it('invalid max value', function() {
      assert.throws(function() {
        Rate.createNew(0, 0);
      });
      assert.throws(function() {
        Rate.createNew(5, 4);
      });
    });
  });

  describe('set value', function() {
    let r;

    beforeEach(function() {
      r = Rate.createNew();
    });

    it('set valid value', function() {
      assert(r.set(0).get() === 0);
      assert(r.set(1.1).get() === 1.1);
      assert(r.set(3).get() === 3);
      assert(r.set(5).get() === 5);
    });

    it('set invalid value', function() {
      assert(r.set(-1).get() !== -1);
      assert(r.set(5.1).get() !== 5.1);
      assert(r.set(6).get() !== 6);
    });

    it('set valid visual value', function() {
      assert(r.setV(1).get() === 0);
      assert(r.setV(1).getV() === 1);
      assert(r.setV(1.5).get() === 0);
      assert(r.setV(1.5).getV() === 1.5);
    });

    it('set invalid visual value', function() {
      assert(r.setV(-1).get() === 0);
      assert(r.setV(-1).getV() === 0);
      assert(r.setV(5.5).get() === 0);
      assert(r.setV(5.5).getV() === 0);
    });
  });

  describe('increment/decrement', function() {
    let r;

    beforeEach(function() {
      r = Rate.createNew();
    });

    it('increment value', function() {
      assert(r.increment().get() === 1);
      assert(r.set(4.5).increment().get() === 5);
      assert(r.set(5).increment().get() === 5);
    });

    it('decrement value', function() {
      assert(r.decrement().get() === 0);
      assert(r.set(5).decrement().get() === 4);
      assert(r.set(1.8).decrement().get() === 0);
    });
  });
});
