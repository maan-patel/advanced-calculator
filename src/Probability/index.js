let factorial = n => {
  if (n < 0 || !Number.isInteger(n)) {
    return NaN;
  }

  let total = 1;
  for (let i = 2; i <= n; i++) {
    total *= i;
  }
  return total;
};

let complementProbability = probability => 1 - probability;

let unionProbability = (probabilityA, probabilityB, probabilityIntersection) => {
  return probabilityA + probabilityB - probabilityIntersection;
};

let conditionalProbability = (probabilityIntersection, probabilityB) => probabilityIntersection / probabilityB;

let independentIntersection = (probabilityA, probabilityB) => probabilityA * probabilityB;

let permutations = (n, p = n) => factorial(n) / factorial(n - p);

let permutationsWithRepetition = (n, p) => Math.pow(n, p);

let combinations = (n, p) => factorial(n) / (factorial(n - p) * factorial(p));

let binomialProbability = (n, k, p) => combinations(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);

module.exports = {
  factorial,
  complementProbability,
  unionProbability,
  conditionalProbability,
  independentIntersection,
  permutations,
  permutationsWithRepetition,
  combinations,
  binomialProbability,
};
