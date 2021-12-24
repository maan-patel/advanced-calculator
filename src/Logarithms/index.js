let log = (a, b) => Math.log(b) / Math.log(a);

let logB = (a, x) => a ** x;

let logProduct = (a, u, v) => (Math.log(u) / Math.log(a)) + (Math.log(v) / Math.log(a));

let logQuotient = (a, u, v) => (Math.log(u) / Math.log(a)) - (Math.log(v) / Math.log(a));

let logExponential = (a, u, v) => v * (Math.log(u) / Math.log(a));

module.exports = {
  log,
  logB,
  logProduct,
  logQuotient,
  logExponential,
};
