const forEach = require("./mockFunction");

//! jest.fn()

test("forEach mock function", () => {
  const mockCallback = jest.fn((x) => 42 + x); //create mock function with parameter
  forEach([0, 1], mockCallback);

  //* mockCallback =
  // [Function: mockConstructor] {
  // _isMockFunction: true,
  // getMockImplementation: [Function (anonymous)],
  // mock: [Getter/Setter],
  // mockClear: [Function (anonymous)],
  // mockReset: [Function (anonymous)],
  // mockRestore: [Function (anonymous)],
  // mockReturnValueOnce: [Function (anonymous)],
  // mockResolvedValueOnce: [Function (anonymous)],
  // mockRejectedValueOnce: [Function (anonymous)],
  // mockReturnValue: [Function (anonymous)],
  // mockResolvedValue: [Function (anonymous)],
  // mockRejectedValue: [Function (anonymous)],
  // mockImplementationOnce: [Function (anonymous)],
  // withImplementation: [Function: bound withImplementation],
  // mockImplementation: [Function (anonymous)],
  // mockReturnThis: [Function (anonymous)],
  // mockName: [Function (anonymous)],
  // getMockName: [Function (anonymous)]
  // }

  //* mockCallback.mock =
  //! {calls: [ [ 0 ], [ 2 ] ],
  // contexts: [ undefined, undefined ],
  // instances: [ undefined, undefined ],
  // invocationCallOrder: [ 3, 4 ], //?  order in which the functions or mocks are called during the execution of tests
  //! results: [ { type: 'return', value: 42 }, { type: 'return', value: 44 } ],
  // lastCall: [ 2 ]}

  expect(mockCallback).toHaveBeenCalled();
  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The first argument of the first call to the function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // The first argument of the second call to the function was 1
  expect(mockCallback.mock.calls[1][0]).toBe(2);

  // The return value of the first call to the function was 42
  expect(mockCallback.mock.results[0].value).toBe(42);
  expect(mockCallback.mock.results[1].value).toBe(44);
});

const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances); // [ mockConstructor {} ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts); // [ {} ]

const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock()); // > 10, 'x', true, true
