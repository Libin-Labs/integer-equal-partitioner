import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('distributes remainder first', () => {
  assert.deepEqual(api.partitionInteger(10, 3), [4, 3, 3]);
});
test('supports even division', () => {
  assert.deepEqual(api.partitionInteger(12, 3), [4, 4, 4]);
});
test('supports total smaller than parts', () => {
  assert.deepEqual(api.partitionInteger(2, 4), [1, 1, 0, 0]);
});
test('supports zero total', () => {
  assert.deepEqual(api.partitionInteger(0, 2), [0, 0]);
});
test('always conserves total', () => {
  assert.equal(
    api.partitionInteger(100, 7).reduce((a, b) => a + b, 0),
    100,
  );
});
test('rejects zero parts', () => {
  assert.throws(() => api.partitionInteger(4, 0), RangeError);
});
