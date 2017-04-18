/**
 * Created by johnsmith on 2017/3/31.
 */
var Data = require('../lib/user');

Data.findOne({username:'john'}).
then(result =>{
    console.log(result);
});