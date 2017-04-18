/**
 * Created by johnsmith on 2017/3/31.
 */
var Data = require('../lib/user');

var bcrypt = require('bcrypt');
const saltRounds = 10;

var myPlaintextPassword = 'mypasswodr';
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
    });
});