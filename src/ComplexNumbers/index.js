let complex = (real, imaginary) => ({ real, imaginary });

let complexConjugate = (real, imaginary) => complex(real, -imaginary);

let complexNegative = (real, imaginary) => complex(-real, -imaginary);

let addComplex = (aReal, aImaginary, bReal, bImaginary) => {
  return complex(aReal + bReal, aImaginary + bImaginary);
};

let subtractComplex = (aReal, aImaginary, bReal, bImaginary) => {
  return complex(aReal - bReal, aImaginary - bImaginary);
};

let multiplyComplex = (aReal, aImaginary, bReal, bImaginary) => {
  return complex((aReal * bReal) - (aImaginary * bImaginary), (aReal * bImaginary) + (aImaginary * bReal));
};

let divideComplex = (aReal, aImaginary, bReal, bImaginary) => {
  let denominator = (bReal * bReal) + (bImaginary * bImaginary);
  return complex(
    ((aReal * bReal) + (aImaginary * bImaginary)) / denominator,
    ((aImaginary * bReal) - (aReal * bImaginary)) / denominator
  );
};

let complexInverse = (real, imaginary) => {
  let denominator = (real * real) + (imaginary * imaginary);
  return complex(real / denominator, -imaginary / denominator);
};

let complexModulus = (real, imaginary) => Math.sqrt((real * real) + (imaginary * imaginary));

let complexArgument = (real, imaginary) => Math.atan2(imaginary, real);

let complexFromPolar = (modulus, theta) => {
  return complex(modulus * Math.cos(theta), modulus * Math.sin(theta));
};

module.exports = {
  complex,
  complexConjugate,
  complexNegative,
  addComplex,
  subtractComplex,
  multiplyComplex,
  divideComplex,
  complexInverse,
  complexModulus,
  complexArgument,
  complexFromPolar,
};
