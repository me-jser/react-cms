import React from 'react';
import {PostsLists} from '../components/PostsLists';

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
                        <PostsLists />
                    </table>
                </article>
            </div>
        );
    }
});

export {Posts as Posts};