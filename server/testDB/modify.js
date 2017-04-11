/**
 * Created by johnsmith on 2017/3/31.
 */
var Data = require('../lib/api');
var d = {
    title: 'nodejs 插入01'
};

Data.update({postid:'HyFvEZ9ax'},{
    title:'123',
    tags:'456'
},function(result){
    console.log(result);
});