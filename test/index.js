/**
 * @author: Marc Riegel <mail@marclab.de>
 * Date: 04.03.13
 * Time: 21:44
 *
 */

var vows = require('vows'),
    assert = require('assert'),
    Keygen = require('../index');

vows.describe('Mixing parameters').addBatch({
    'random string': {
        topic: function () {
            return Keygen._('Teststring');
        },

        'result is default': function (topic) {
            assert.equal (topic.length, Keygen.defaults.length);
        }
    },
    'random stringe': {
        topic: function () {
            return Keygen._('Teststring');
        },

        'result is default': function (topic) {
            assert.equal (topic, Infinity);
        }
    },
    'but when dividing zero by zero': {
        topic: function () { return 0 / 0 },

        'we get a value which': {
            'is not a number': function (topic) {
                assert.isNaN (topic);
            },
            'is not equal to itself': function (topic) {
                assert.notEqual (topic, topic);
            }
        }
    }
}).export(module);
