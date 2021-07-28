import add from '../index';

test('share', () => {
  expect(add({ a: 1, b: 2 })).toBe(3);
});
