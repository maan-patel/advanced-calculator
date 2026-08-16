let vectorFromPoints2D = (x1, y1, x2, y2) => [x2 - x1, y2 - y1];

let vectorMagnitude2D = (u1, u2) => Math.sqrt((u1 * u1) + (u2 * u2));

let vectorMagnitudeSquared2D = (u1, u2) => (u1 * u1) + (u2 * u2);

let translatePoint2D = (a1, a2, u1, u2) => [a1 + u1, a2 + u2];

let addVectors2D = (u1, u2, v1, v2) => [u1 + v1, u2 + v2];

let scalarMultiplyVector2D = (k, u1, u2) => [k * u1, k * u2];

let dotProduct2D = (u1, u2, v1, v2) => (u1 * v1) + (u2 * v2);

let angleBetweenVectors2D = (u1, u2, v1, v2) => {
  let denominator = vectorMagnitude2D(u1, u2) * vectorMagnitude2D(v1, v2);
  return Math.acos(dotProduct2D(u1, u2, v1, v2) / denominator);
};

module.exports = {
  vectorFromPoints2D,
  vectorMagnitude2D,
  vectorMagnitudeSquared2D,
  translatePoint2D,
  addVectors2D,
  scalarMultiplyVector2D,
  dotProduct2D,
  angleBetweenVectors2D,
};
