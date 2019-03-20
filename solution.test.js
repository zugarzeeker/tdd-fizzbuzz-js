const f = require("./solution");

test("fizzbuzz 1 to equal 1", () => {
  expect(f(1)).toBe(1);
});

test("fizzbuzz 2 to equal 2", () => {
  expect(f(2)).toBe(2);
});

test("fizzbuzz 3 to equal FIZZ", () => {
  expect(f(3)).toBe("FIZZ");
});

test("fizzbuzz 4 to equal 4", () => {
  expect(f(4)).toBe(4);
});

test("fizzbuzz 5 to equal BUZZ", () => {
  expect(f(5)).toBe("BUZZ");
});

test("fizzbuzz 6 to equal FIZZ", () => {
  expect(f(6)).toBe("FIZZ");
});

test("fizzbuzz 9 to equal FIZZ", () => {
  expect(f(9)).toBe("FIZZ");
});

test("fizzbuzz 10 to equal BUZZ", () => {
  expect(f(10)).toBe("BUZZ");
});

test("fizzbuzz 15 to equal FIZZBUZZ`", () => {
  expect(f(15)).toBe("FIZZBUZZ");
});

test("fizzbuzz 30 to equal FIZZBUZZ`", () => {
  expect(f(30)).toBe("FIZZBUZZ");
});
