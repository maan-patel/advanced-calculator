let sum = values => values.reduce((total, value) => total + value, 0);

let relativeFrequency = (absoluteFrequency, sampleSize) => absoluteFrequency / sampleSize;

let sampleMean = values => sum(values) / values.length;

let groupedMean = (values, frequencies) => {
  let totalFrequency = sum(frequencies);
  let weightedTotal = values.reduce((total, value, index) => total + (value * frequencies[index]), 0);
  return weightedTotal / totalFrequency;
};

let meanFromRelativeFrequencies = (values, relativeFrequencies) => {
  return values.reduce((total, value, index) => total + (value * relativeFrequencies[index]), 0);
};

let median = values => {
  let sorted = [...values].sort((a, b) => a - b);
  let middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    return sorted[middle];
  }

  return (sorted[middle - 1] + sorted[middle]) / 2;
};

let sumOfDeviationsFromMean = values => {
  let mean = sampleMean(values);
  return values.reduce((total, value) => total + (value - mean), 0);
};

let sumSquaredDeviations = values => {
  let mean = sampleMean(values);
  return values.reduce((total, value) => total + Math.pow(value - mean, 2), 0);
};

let groupedSumSquaredDeviations = (values, frequencies) => {
  let mean = groupedMean(values, frequencies);
  return values.reduce((total, value, index) => total + (Math.pow(value - mean, 2) * frequencies[index]), 0);
};

let sampleVariance = values => sumSquaredDeviations(values) / (values.length - 1);

let sampleStandardDeviation = values => Math.sqrt(sampleVariance(values));

let probabilityMean = (values, probabilities) => {
  return values.reduce((total, value, index) => total + (value * probabilities[index]), 0);
};

let probabilityStandardDeviation = (values, probabilities) => {
  let mean = probabilityMean(values, probabilities);
  let variance = values.reduce((total, value, index) => total + (probabilities[index] * Math.pow(value - mean, 2)), 0);
  return Math.sqrt(variance);
};

module.exports = {
  relativeFrequency,
  sampleMean,
  groupedMean,
  meanFromRelativeFrequencies,
  median,
  sumOfDeviationsFromMean,
  sumSquaredDeviations,
  groupedSumSquaredDeviations,
  sampleVariance,
  sampleStandardDeviation,
  probabilityMean,
  probabilityStandardDeviation,
};
