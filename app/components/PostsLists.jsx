import React from 'react';

import $ from 'jquery'
import {RemovePosts} from '../components/RemovePosts';

var PostsLists = React.createClass({
    getInitialState: function(){
        return {
            postsData: [],
            changeList:false,
            postRemoved:null,
            filterData:[]
        }
    },
    getPostData:function(){
        $.get('/api').done(function(data) {
            var arr = Object.keys(data).map(function(k) {

                return data[k];

            });

            this.setState({postsData: arr});
        }.bind(this));
    },
    handleUpdateList:function(){
        this.getPostData()
    },
    componentDidMount: function(){
        this.getPostData();

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
                     <td><a href={'/modify:'+ post.postid}>修改</a> <RemovePosts  removeAddr={'/del?id='+ post.postid} onRemove={this.handleUpdateList}/>   </td>
                </tr>
                )}

            </tbody>

        );
    }
});

export {PostsLists as PostsLists}