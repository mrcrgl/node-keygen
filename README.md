node-keygen // keygenerator
=================

Random String generator for node.js

## Usage

```javascript
var keygen = require("keygenerator");

/*
 * Default configuration
 *
 * chars: true
 * sticks: false
 * numbers: true
 * specials: false
 * sticks: false
 * length: 8
 * forceUppercase: false
 * forceLowercase: false
 * exclude:[ ]
 *
 */
keygen._();
// >> "8MRXnoG3nTmjb35U0tFwnoZpdCBBj5EX"

keygen._({
    forceUppercase: true
});
// >> "F4ZCPNOX7BWK7XWDXGSA5BPHCCCLGCRZ"

keygen._({
    specials: true
});
// >> "3L0KpE{pb.U3(Tu42,*,aNxBpb(}Mfy|"

/*
 * Configuration for password()
 *
 * chars: true
 * sticks: false
 * numbers: true
 * specials: false
 * length: 8 <- overrideable
 * forceUppercase: false
 * forceLowercase: false
 * exclude:['O', '0', 'I', '1']
 *
 */
keygen.password();
// >> "d4pTgrCY"

/*
 * Configuration for session_id()
 *
 * chars: true
 * sticks: true
 * numbers: true
 * specials: false
 * length: 32 <- overrideable
 * forceUppercase: false
 * forceLowercase: false
 * exclude:[ ]
 *
 */
keygen.session_id();
// >> "7YFSfsiM3NgE76fZa5vrjHmftKZwuiJv"

/*
 * Configuration for transaction_id()
 *
 * chars: true
 * sticks: true
 * numbers: true
 * specials: true
 * length: 6 <- overrideable
 * forceUppercase: false
 * forceLowercase: false
 * exclude:[ ]
 *
 */
keygen.transaction_id();
// >> "lTrGjp"

/*
 * Configuration for transaction_id()
 *
 * chars: false
 * sticks: false
 * numbers: true
 * specials: false
 * length: 8 <- overrideable
 * forceUppercase: false
 * forceLowercase: false
 * exclude:[ ]
 *
 */
keygen.number();
// >> "37883189"

```

## API

You can parse each function with a object. Following options are available:

chars (bool)
> ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz


sticks (bool)
> -_


numbers (bool)
> 0123456789


specials (bool)
> ,.;:#*?=)(/&%$§"!¡“¢[]|{}≠@


length (integer)
> length of the key


forceUppercase (bool)
> convert key to lowercase


forceLowercase (bool)
> convert key to uppercase


exclude
> Array of chars to exclude

## Licence

Module is licenced under the [MIT](http://opensource.org/licenses/MIT)