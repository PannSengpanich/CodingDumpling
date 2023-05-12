const orderTotal = require("./order-total");
test("test", () => {
  expect(1).toBe(1);
});
test("Quantity", () => {
  expect(
    orderTotal({
      items: [
        { name: "Dragon food", price: 8, quantity: 1 },
        { name: "Dragon cage (small)", price: 800, quantity: 1 },
      ],
    }),
  ).toBe(808);
});
