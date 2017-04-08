import React from 'react';


var PostsLists = React.createClass({

    getInitialState: function(){
        return {
            postsData: []
        }
    },
    componentDidMount: function(){
        $.get('http://localhost:8080/api').done(function(data) {
            var arr = Object.keys(data).map(function(k) { return data[k] });

            this.setState({postsData: arr});
        }.bind(this));
    },
    render: function(){

        return (
            <tbody>

            {
                this.state.postsData.map(post =>
                <tr key={post._id}>
                     <td><a href={'/modify:'+ post.postid}>{post.title}</a></td>
                     <td><a href="">{post.author}</a></td>
                     <td><a href="">{post.catalog}</a></td>
                     <td><a href="">{post.tags}</a></td>
                     <td><a href="">{post.publishtime.toString().substring(0,10)}</a></td>
                     <td><a href={'/modify:'+ post.postid}>修改</a>   <a href={'/del?id='+ post.postid}>删除</a> </td>
                </tr>
                )}

            </tbody>

        );
    }
});

export {PostsLists as PostsLists}