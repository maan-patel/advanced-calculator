let arithmeticCommonDifference = (uNext, uN) => uNext - uN;

let arithmeticNthTerm = (u1, n, r) => u1 + ((n - 1) * r);

let arithmeticSeriesSum = (u1, un, n) => ((u1 + un) / 2) * n;

let geometricCommonRatio = (uNext, uN) => uNext / uN;

let geometricNthTerm = (u1, n, r) => u1 * Math.pow(r, n - 1);

let geometricSeriesSum = (u1, r, n) => {
  if (r === 1) {
    return u1 * n;
  }

  return u1 * ((1 - Math.pow(r, n)) / (1 - r));
};

let simpleInterestFutureValue = (principal, rate, time) => principal * (1 + (rate * time));

let compoundInterestFutureValue = (principal, rate, time) => principal * Math.pow(1 + rate, time);

module.exports = {
  arithmeticCommonDifference,
  arithmeticNthTerm,
  arithmeticSeriesSum,
  geometricCommonRatio,
  geometricNthTerm,
  geometricSeriesSum,
  simpleInterestFutureValue,
  compoundInterestFutureValue,
};
