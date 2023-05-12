test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBe(0.3); //This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
