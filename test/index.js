/**
 * @author: Marc Riegel <mail@marclab.de>
 * Date: 04.03.13
 * Time: 21:44
 *
 */

var keygen = require('../index');

console.log('keygen._(): %s', keygen._());
console.log('keygen.password(): %s', keygen.password());
console.log('keygen.session_id(): %s', keygen.session_id());
console.log('keygen.transaction_id(): %s', keygen.transaction_id());
console.log('keygen.number(): %s', keygen.number());
console.log('keygen._({forceUppercase:true}): %s', keygen._({forceUppercase:true}));
console.log('keygen._({forceLowercase:true}): %s', keygen._({forceLowercase:true}));