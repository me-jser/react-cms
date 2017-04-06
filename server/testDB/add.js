/**
 * Created by johnsmith on 2017/3/31.
 */
var Data = require('../lib/api');
var d = {
    title: 'nodejs 插入01',
    author: '游研社',
    catalog: '知乎',
    tags: '知乎',
    content: '在游戏中被人欺负怎么办？有人可能会选择退出游戏，有人可能会在现实生活中发泄情绪，而他，用整整四年时间去准备和策划，并最终实施了一次可称得上完美的复仇行动。\r\n\r\n近日在Reddit上，一名玩家讲述了自己在游戏中的复仇故事。',
};
console.log(d);
Data.save(d);