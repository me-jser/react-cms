import React from 'react';

var Posts = React.createClass({
    render: function () {
        return (
            <div className="posts background__color--gray">
                <div className="posts__header">
                    <header className="posts__header--name"><h1>文章</h1></header>
                    <div className="posts__header--filter">
                        <ul>
                            <li><a href="" className="posts__header--active">文章</a></li>
                            <li><a href="">草稿</a></li>
                        </ul>
                    </div>
                    <div className="posts__header--publish "><a href="" className="font__icon--fonts">&#xe601;</a></div>
                </div>
                <article className="posts-lists">
                    <table className="post-lists__table">
                        <thead>
                        <tr>
                            <td>标题</td>
                            <td>作者</td>
                            <td>分类目录</td>
                            <td>标签</td>
                            <td>日期</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a href="">ES6新特性</a></td>
                            <td><a href="">John Smith</a></td>
                            <td><a href="">前端技术</a></td>
                            <td><a href="">JS,ES6</a></td>
                            <td>2017年03月26日</td>
                        </tr>
                        <tr>
                            <td><a href="">ES6新特性</a></td>
                            <td><a href="">John Smith</a></td>
                            <td><a href="">前端技术</a></td>
                            <td><a href="">JS,ES6</a></td>
                            <td>2017年03月26日</td>
                        </tr>
                        <tr>
                            <td><a href="">ES6新特性</a></td>
                            <td><a href="">John Smith</a></td>
                            <td><a href="">前端技术</a></td>
                            <td><a href="">JS,ES6</a></td>
                            <td>2017年03月26日</td>
                        </tr>
                        </tbody>
                    </table>
                </article>
            </div>
        );
    }
});

export {Posts as Posts};