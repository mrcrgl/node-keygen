/**
 * @author: Marc Riegel <mail@marclab.de>
 * Date: 04.03.13
 * Time: 21:44
 *
 */

var vows = require('vows'),
  assert = require('assert'),
  Keygen = require('../index'),
  testNumbers = /\d+/,
  testUcChars = /[A-Z]+/,
  testLcChars = /[a-z]+/,
  testSpecials = /[,.;:#*\?=\)\(\/&%$§"\!¡“¢\[\]\|\{\}≠@]+/,
  testSticks = /[_\-]+/; //

vows.describe('Check API').addBatch({
  '_()': {
    topic: function () {
      return Keygen._({length: 300});
    },

    'we get a value which': {
      'have numbers': function (topic) {
        assert.ok(testNumbers.exec(topic), "Numbers expected");
      },
      'have lowercase chars': function (topic) {
        assert.ok(testUcChars.exec(topic), "Lowercase chars expected");
      },
      'have uppercase chars': function (topic) {
        assert.ok(testLcChars.exec(topic), "Uppercase chars expected");
      },
      'have no special chars': function (topic) {
        assert.ok(!testSpecials.exec(topic), "Special chars included but not expected");
      },
      'have no sticks': function (topic) {
        assert.ok(!testSticks.exec(topic), "Sticks included but not expected");
      },
      'have configured length': function (topic) {
        assert.equal(Keygen._().length, 32, "Sticks included but not expected");
      }
    }
  },
  'password()': {
    topic: function () {
      return Keygen.password({length: 300});
    },

    'we get a value which': {
      'have numbers': function (topic) {
        assert.ok(testNumbers.exec(topic), "Numbers expected");
      },
      'have lowercase chars': function (topic) {
        assert.ok(testUcChars.exec(topic), "Lowercase chars expected");
      },
      'have uppercase chars': function (topic) {
        assert.ok(testLcChars.exec(topic), "Uppercase chars expected");
      },
      'have no special chars': function (topic) {
        assert.ok(!testSpecials.exec(topic), "Special chars included but not expected");
      },
      'have no sticks': function (topic) {
        assert.ok(!testSticks.exec(topic), "Sticks included but not expected");
      },
      'have configured length': function (topic) {
        assert.equal(Keygen.password().length, 8, "Length should be 8");
      }
    }
  },
  'session_id()': {
    topic: function () {
      return Keygen.session_id({length: 300});
    },

    'we get a value which': {
      'have numbers': function (topic) {
        assert.ok(testNumbers.exec(topic), "Numbers expected");
      },
      'have lowercase chars': function (topic) {
        assert.ok(testUcChars.exec(topic), "Lowercase chars expected");
      },
      'have uppercase chars': function (topic) {
        assert.ok(testLcChars.exec(topic), "Uppercase chars expected");
      },
      'have no special chars': function (topic) {
        assert.ok(!testSpecials.exec(topic), "Special chars included but not expected");
      },
      'have sticks': function (topic) {
        assert.ok(testSticks.exec(topic), "Sticks expected");
      },
      'have configured length': function (topic) {
        assert.equal(Keygen.session_id().length, 32, "Length should be 32");
      }
    }
  },
  'transaction_id()': {
    topic: function () {
      return Keygen.transaction_id({length: 300});
    },

    'we get a value which': {
      'have numbers': function (topic) {
        assert.ok(testNumbers.exec(topic), "Numbers expected");
      },
      'have lowercase chars': function (topic) {
        assert.ok(testUcChars.exec(topic), "Lowercase chars expected");
      },
      'have uppercase chars': function (topic) {
        assert.ok(testLcChars.exec(topic), "Uppercase chars expected");
      },
      'have special chars': function (topic) {
        assert.ok(testSpecials.exec(topic), "Special chars expected");
      },
      'have sticks': function (topic) {
        assert.ok(testSticks.exec(topic), "Sticks expected");
      },
      'have configured length': function (topic) {
        assert.equal(Keygen.transaction_id().length, 6, "Length should be 6");
      }
    }
  },
  'number()': {
    topic: function () {
      return Keygen.number({length: 300});
    },

    'we get a value which': {
      'have numbers': function (topic) {
        assert.ok(testNumbers.exec(topic), "Numbers expected");
      },
      'have no lowercase chars': function (topic) {
        assert.ok(!testUcChars.exec(topic), "Lowercase chars included but not expected");
      },
      'have no uppercase chars': function (topic) {
        assert.ok(!testLcChars.exec(topic), "Uppercase chars included but not expected");
      },
      'have no special chars': function (topic) {
        assert.ok(!testSpecials.exec(topic), "Special chars included but not expected");
      },
      'have no sticks': function (topic) {
        assert.ok(!testSticks.exec(topic), "Sticks included but not expected");
      },
      'have configured length': function (topic) {
        assert.equal(Keygen.number().length, 8, "Length should be 8");
      }
    }
  },
  'Option forceUppercase': {
    topic: function () {
      return Keygen._({length: 300, forceUppercase: true});
    },

    'we get a value which': {
      'have no lowercase chars': function (topic) {
        assert.ok(!testLcChars.exec(topic), "Lowercase chars included but not expected");
      },
      'have uppercase chars': function (topic) {
        assert.ok(testUcChars.exec(topic), "Uppercase chars expected");
      }
    }
  },
  'Option forceLowercase': {
    topic: function () {
      return Keygen._({length: 300, forceLowercase: true});
    },

    'we get a value which': {
      'have no uppercase chars': function (topic) {
        assert.ok(!testUcChars.exec(topic), "Uppercase chars included but not expected");
      },
      'have lowercase chars': function (topic) {
        assert.ok(testLcChars.exec(topic), "Lowercase chars expected");
      }
    }
  },
  'Option exclude': {
    topic: function () {
      return Keygen._({length: 300, exclude: ['a', 'g', 'Z', 'x', 9, 'P']});
    },

    'we get a value which': {
      'have excluded configured chars': function (topic) {
        assert.ok(!/[agZx9P]+/.exec(topic), "excluding chars failed");
      }
    }
  }
}).export(module);
