function f(n) {
  let result = "";
  if (n % 3 === 0) {
    result += "FIZZ";
  }
  if (n % 5 === 0) {
    result += "BUZZ";
  }
  return result !== "" ? result : n;
}

module.exports = f;
