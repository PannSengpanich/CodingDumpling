test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
test("null", () => {
  const n = null;
  expect(n).toBeNull(); //matches null
  expect(n).toBeDefined(); //matches undefined
  expect(n).not.toBeUndefined(); //matches not undefined
  expect(n).not.toBeTruthy(); //matches anything that an if statement treats as true
  expect(n).toBeFalsy(); //matches anything that an if statement treats as false
});
test("adding floating point numbers", () => {
  const value = 0.1 + 0.4;
  expect(value).toBe(2); //This won't work because of rounding error
  expect(value).toBeCloseTo(0.5); // This works.
});
test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK!");
}

test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK");
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});
