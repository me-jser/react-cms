/**
 * Created by johnsmith on 2017/3/28.
 */
const api = require('../server/lib/api');


const post01 = {
    title       : '001',
    author      : 'John Smith',
    catalog     : '前端',
    tags        : '前端',
    postid      : '1',
    content     :'最近在国内“兴起”的两个概念我觉得特别“有趣”。一个叫 PD 即产品设计师，另一个叫 UXD 即用户体验设计师。然后很多人都问什么是 PD、UXD，顺带要怎么成为呢？（真的很多人问）'
};

api.find({}).
    then(res =>{
    console.log(res);
});