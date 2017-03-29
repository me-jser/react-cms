import React from 'react';


var PostsLists = React.createClass({
    getInitState: function(){
        var PostsListsData = [];
    },
    componentDidMount: function(){
        $.get('http://localhost:8080/api',function(result){
            console.log(result);
        })
    },
    render: function(){
        return (
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

        );
    }
});

export {PostsLists as PostsLists}