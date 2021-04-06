var constants = require('../Constants');
module.exports = {

    metreToGiga: function (n) {
        return n / 1000000000
    },
    metreToMega: function (n) {
        return n / 1000000
    },
    metreToKilo: function (n) {
        return n / 1000
    },
    metreToHecto: function (n) {
        return n / 100
    },
    metreToCenti: function (n) {
        return n * 100
    },
    metreToMilli: function (n) {
        return n * 1000
    },
    metreToMicro: function (n) {
        return n * 1000000
    },
    metreToNano: function (n) {
        return n * 1000000000
    },


    gigaToMetre: function (n) {
        return n * 1000000000
    },
    megaToMetre: function (n) {
        return n * 1000000
    },
    kiloToMetre: function (n) {
        return n * 1000
    },
    hectoToMetre: function (n) {
        return n * 100
    },
    centiToMetre: function (n) {
        return n / 100
    },
    milliToMetre: function (n) {
        return n / 1000
    },
    microToMetre: function (n) {
        return n / 1000000
    },
    nanoToMetre: function (n) {
        return n / 1000000000
    },

    yardsToFeet: function (n) {
        return n * constants.YARDS_TO_FEET_FACTOR;
    },

    feetToYards: function (n) {
        return n * constants.FEET_TO_YARDS_FACTOR;
    },

    yardsToInches: function (n) {
        return n * constants.YARDS_TO_INCHES_FACTOR;
    },

    inchesToYards: function (n) {
        return constants.INCHES_TO_YARDS_FACTOR * n;
    },

    inchesToMiles: function (n) {
        return constants.INCHES_TO_MILES_FACTOR * n;
    },

    feetToInches: function (n) {
        return constants.FEET_TO_INCHES_FACTOR * n;
    },

    feetToMeters: function (n) {
        return constants.FEET_TO_METERS_FACTOR * n;
    },

    feetToMiles: function (n) {
        return constants.FEET_TO_MILES_FACTOR * n;
    },

    inchesToFeet: function (n) {
        return constants.INCHES_TO_FEET_FACTOR * n;
    },

    inchesToMeters: function (n) {
        return constants.INCHES_TO_METERS_FACTOR * n;
    },

    milesToYards: function (n) {
        return constants.MILES_TO_YARDS_FACTOR * n;
    },

    milesToMeters: function (n) {
        return constants.MILES_TO_METERS_FACTOR * n;
    },

    milesToInches: function (n) {
        return constants.MILES_TO_INCHES_FACTOR * n;
    },

    milesToFeet: function (n) {
        return constants.MILES_TO_FEET_FACTOR * n;
    },

    yardsToMiles: function (n) {
        return constants.YARDS_TO_MILES_FACTOR * n;
    },

    yardsToMeters: function (n) {
        return constants.YARDS_TO_METERS_FACTOR * n;
    },

    toFahrenheit: function (val) {
        return val * constants.CELSIUS_TO_FAHRENEIT_MUTLIPLIER_FACTOR + constants.CELSIUS_TO_FAHRENEIT_FACTOR;
    },

    toCelsius: function (val) {
        return (val - constants.CELSIUS_TO_FAHRENEIT_FACTOR) / constants.CELSIUS_TO_FAHRENEIT_MUTLIPLIER_FACTOR;
    },

};
