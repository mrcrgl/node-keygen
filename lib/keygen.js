/**
 * @author: Marc Riegel <mail@marclab.de>
 * Date: 23.01.13
 * Time: 11:04
 *
 */

var sChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var sNumbers = '0123456789';
var sSticks = '-_';
var sSpecialChars = ',.;:#*?=)(/&%$§"!¡“¶¢[]|{}≠@';

/**
 *
 * @type {Object}
 */
Keygen = {

    /**
     * Alias for generate()
     */
    _: Keygen.generate,

    /**
     *
     * @param options
     * @return {String}
     */
    generate: function(options) {
        options = options || {};

        var length = isNaN(options.length) ? 32 : options.length;
        var useChars = options.chars || true;
        var useNumbers = options.numbers || true;
        var useSticks = options.sticks || false;
        var useSpecials = options.specials || false;
        var forceUppercase = options.forceUppercase || false;
        var forceLowercase = options.forceLowercase || false;
        var exclude = (options.exclude instanceof Array) ? options.exclude : [];

        var chars  = '';
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
            key += chars.substring(randomPoz,randomPoz+1);
        }

        if (forceUppercase) {
            key = key.toUpperCase();
        }

        if (forceLowercase) {
            key = key.toLowerCase();
        }

        return key;
    },

    /**
     *
     * @param options
     * @return {String}
     */
    password: function(options) {
        return Keygen.generate({
            chars: false,
            sticks: false,
            numbers: true,
            specials: false,
            length: isNaN(options.length) ? 8 : options.length,
            exclude: [
                'O', '0', 'I', '1'
            ]
        });
    },

    /**
     *
     * @param options
     * @return {String}
     */
    session_id: function(options) {
        return Keygen.generate({
            chars: true,
            sticks: true,
            numbers: true,
            specials: false,
            length: isNaN(options.length) ? 8 : options.length
        });
    },

    /**
     *
     * @param options
     * @return {String}
     */
    transaction_id: function(options) {
        return Keygen.generate({
            chars: true,
            sticks: true,
            numbers: true,
            specials: true,
            length: isNaN(options.length) ? 6 : options.length
        });
    },

    /**
     *
     * @param options
     * @return {String}
     */
    number: function(options) {
        return Keygen.generate({
            chars: false,
            sticks: false,
            numbers: true,
            specials: false,
            length: isNaN(options.length) ? 8 : options.length
        });
    }
};

module.exports = Keygen;