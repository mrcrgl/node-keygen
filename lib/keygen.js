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
    options = options || {};

    for (var key in Keygen.defaults) {
        if (!options.hasOwnProperty(key)) {
            options[key] = Keygen.defaults[key];
        }
    }

    var length = isNaN(options.length) ? 32 : options.length;
    var useChars = options.chars;
    var useNumbers = options.numbers;
    var useSticks = options.sticks;
    var useSpecials = options.specials;
    var forceUppercase = options.forceUppercase;
    var forceLowercase = options.forceLowercase;
    var exclude = (options.exclude instanceof Array) ? options.exclude : [];

    var chars = '';
    if (useChars) chars += sChars;
    if (useNumbers) chars += sNumbers;
    if (useSticks) chars += sSticks;
    if (useSpecials) chars += sSpecialChars;


    if (chars == '') {
        throw 'You must select at least one char type.';
    }

    for (var badChar in exclude) {
        chars = chars.replace(badChar, '');
    }

    var key = '';
    for (var i = 0; i < length; i++) {
        var randomPoz = Math.floor(Math.random() * chars.length);
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
        chars:true,
        sticks:false,
        numbers:true,
        specials:false,
        length:isNaN(options.length) ? 8 : options.length,
        exclude:[
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
        chars:true,
        sticks:true,
        numbers:true,
        specials:false,
        length:isNaN(options.length) ? 32 : options.length
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
        chars:true,
        sticks:true,
        numbers:true,
        specials:true,
        length:isNaN(options.length) ? 6 : options.length
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
        chars:false,
        sticks:false,
        numbers:true,
        specials:false,
        length:isNaN(options.length) ? 8 : options.length
    });
};

/**
 * Alias for generate()
 */
Keygen._ = Keygen.generate;


module.exports = Keygen;