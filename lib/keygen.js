/**
 * @author: Marc Riegel <mail@marclab.de>
 * Date: 23.01.13
 * Time: 11:04
 *
 */

var sChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var sNumbers = '0123456789';
var sSticks = '-_';
var sSpecialChars = ',.;:#*?=)(/&%$§"!¡“¢[]|{}≠@';

/**
 *
 * @type {Object}
 */
var Keygen = {};

Keygen.defaults = {
  chars: true,
  numbers: true,
  specials: false,
  sticks: false,
  forceUppercase: false,
  forceLowercase: false,
  length: 32
};

/**
 *
 * @param options
 * @return {String}
 */
Keygen.generate = function (options) {
  var key, length, useChars, useNumbers, useSticks,
    useSpecials, forceUppercase, forceLowercase, exclude,
    chars, badChar, i, randomPoz;

  if (typeof options !== 'object') {
    options = {};
  }

  for (key in Keygen.defaults) {
    if (Keygen.defaults.hasOwnProperty(key)) {
      if (!options.hasOwnProperty(key)) {
        options[key] = Keygen.defaults[key];
      }
    }
  }

  length = isNaN(options.length) ? 32 : options.length;
  useChars = options.chars;
  useNumbers = options.numbers;
  useSticks = options.sticks;
  useSpecials = options.specials;
  forceUppercase = options.forceUppercase;
  forceLowercase = options.forceLowercase;
  exclude = (options.exclude instanceof Array) ? options.exclude : [];

  chars = '';
  if (useChars) {
    chars += sChars;
  }

  if (useNumbers) {
    chars += sNumbers;
  }

  if (useSticks) {
    chars += sSticks;
  }

  if (useSpecials) {
    chars += sSpecialChars;
  }

  if (chars === '') {
    throw 'You must select at least one char type.';
  }

  for (i = 0; i < exclude.length; i++) {
    chars = chars.replace(exclude[i], '');
  }

  key = '';
  for (i = 0; i < length; i++) {
    randomPoz = Math.floor(Math.random() * chars.length);
    key += chars.substring(randomPoz, randomPoz + 1);
  }

  if (forceUppercase) {
    key = key.toUpperCase();
  }

  if (forceLowercase) {
    key = key.toLowerCase();
  }

  return key;
};

/**
 *
 * @param options
 * @return {String}
 */
Keygen.password = function (options) {
  options = options || {};

  return Keygen.generate({
    chars: true,
    sticks: false,
    numbers: true,
    specials: false,
    length: isNaN(options.length) ? 8 : options.length,
    exclude: [
      'O', '0', 'I', '1'
    ]
  });
};

/**
 *
 * @param options
 * @return {String}
 */
Keygen.session_id = function (options) {
  options = options || {};

  return Keygen.generate({
    chars: true,
    sticks: true,
    numbers: true,
    specials: false,
    length: isNaN(options.length) ? 32 : options.length
  });
};

/**
 *
 * @param options
 * @return {String}
 */
Keygen.transaction_id = function (options) {
  options = options || {};

  return Keygen.generate({
    chars: true,
    sticks: true,
    numbers: true,
    specials: true,
    length: isNaN(options.length) ? 6 : options.length
  });
};

/**
 *
 * @param options
 * @return {String}
 */
Keygen.number = function (options) {
  options = options || {};

  return Keygen.generate({
    chars: false,
    sticks: false,
    numbers: true,
    specials: false,
    length: isNaN(options.length) ? 8 : options.length
  });
};

/**
 * Alias for generate()
 */
Keygen._ = Keygen.generate;


module.exports = Keygen;