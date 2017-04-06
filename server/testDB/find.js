/**
 * Created by johnsmith on 2017/3/31.
 */
var Data = require('../lib/api');

Data.find().
then(result =>{
    console.log(result);
});