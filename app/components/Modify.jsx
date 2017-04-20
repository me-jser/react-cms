import  React from 'react';
var NotificationSystem = require('react-notification-system');
import $ from 'jquery';

import RichTextEditor from 'react-rte';

var Modifing = React.createClass({
    getInitialState: function(){
        return {
            data :[],
            postId:null,
            title:null,
            content:null,
            tags:null,
            catalog:null,
            value: RichTextEditor.createEmptyValue()
        }
    },
    componentDidMount: function(){
        var pattern = /modify:(.*)/ig;
        var url =  window.location.href.match(pattern)//通过正则匹配获取到ID
        var ids = RegExp.$1;
        $.ajax({
            url: '/getwithid',
            data:{id:ids}
        }).done(function(postsJsonDatas){
            postsJsonDatas.map((postInfos)  =>{
                this.refs.title.value=postInfos.title;
                //this.refs.content.value=postInfos.content;
                this.refs.tags.value=postInfos.tags;
                this.refs.catalog.value=postInfos.catalog;

                this.setState({
                    value:RichTextEditor.createValueFromString(postInfos.content, 'html')
                });
                this.setState({
                    postId:postInfos.postid,
                    title:postInfos.title,
                    content:postInfos.content,
                    tags:postInfos.tags,
                    catalog:postInfos.catalog
                })
            });

        }.bind(this))
    },
    onChange : function(value){
        this.setState({value:value});
        if (this.props.onChange) {
            // Send the changes up to the parent component as an HTML string.
            // This is here to demonstrate using `.toString()` but in a real app it
            // would be better to avoid generating a string on each change.
            this.props.onChange(
                value.toString('html')
            );
        }
    },
    handleModify:function(e){
        e.preventDefault();
        $.ajax({
            url:'/update',
            method:'get',
            data:{
                id: this.state.postId,
                title:this.refs.title.value,
                content:this.state.value.toString('html'),
                tags:this.refs.tags.value,
                catalog:this.refs.catalog.value
            }
        }).done(function(data){
            if(data.ok == 1){
                this.showNotification()
            }else{
                this.showNotificationFailed()
            }
        }.bind(this))
    },
    showNotification: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            title:'操作结果',
            message: '修改成功',
            level: 'success',
            position:'tc',
            autoDismiss:0
        });
    },
    showNotificationFailed: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            title:'操作结果',
            message: '修改失败',
            level: 'error',
            position:'tc',
            autoDismiss:4
        });
    },
    render: function(){

        return(

            <div className="posts background__color--gray">
                <div className="posts__header">
                    <header className="posts__header--name"><h1>修改文章</h1></header>
                </div>
                <div className="posts__form__wraper">
                    <form action="http://localhost:3000/addpost" method="get" id="posts__form" className="background__color--gray posts__form--style" onSubmit={this.handleModify}>
                        <div><input  name="title" className="posts__form__title" title="title" placeholder="在此输入标题" ref="title" /></div>
                        <input type="hidden" name="author" className="posts__form__title" value="admin" />
                        <div><RichTextEditor
                            value={this.state.value}
                            onChange={this.onChange}
                            editorClassName="posts__form__rich"
                        /></div>
                        <div>
                            <button className="posts__form__save">修改</button>
                        </div>
                    </form>
                    <aside className="posts__info">
                        <aside className="posts__info--publish over__block--hidden">
                            <header className="posts__info--name">
                                <h1>发布</h1><span><a href="" className="font__icon--fonts">&#xe631;</a></span>
                            </header>
                            <div className="posts__publish__option">
                                <button className="post__publish--draft">存草稿</button>
                                <button className="post__publish--preview">预览</button>
                            </div>
                        </aside>
                        <aside className="posts__info--publish over__block--hidden box__margin__top--20">
                            <header className="posts__info--name">
                                <h1>标签</h1><span><a href="" className="font__icon--fonts">&#xe631;</a></span>
                            </header>
                            <div className="post__info--tags">
                                    <input type="text" title="tags" name="tags" className="post--tags__insert"  form="posts__form" ref="tags" />
                                        <button className="post--tags__add">添加</button>
                                        <div className="post--tags__displayer">
                                            <ul>
                                                <li><i className="font__icon--fonts"><a href="">&#xe604;</a></i><a href="">前端</a></li>
                                                <li><i className="font__icon--fonts"><a href="">&#xe604;</a></i><a href="">前端</a></li>
                                                <li><i className="font__icon--fonts"><a href="">&#xe604;</a></i><a href="">前端</a></li>
                                            </ul>
                                        </div>

                            </div>
                        </aside> <aside className="posts__info--publish over__block--hidden box__margin__top--20">
                        <header className="posts__info--name">
                            <h1>分类</h1><span><a href="" className="font__icon--fonts">&#xe631;</a></span>
                        </header>
                        <div className="post__info--tags">
                                <input type="text" title="catalog" name="catalog" className="post--tags__insert" form="posts__form" ref="catalog" />
                                    <button className="post--tags__add">添加</button>
                                    <div className="post--tags__displayer">
                                        <ul>
                                            <li><i className="font__icon--fonts"><a href="">&#xe604;</a></i><a href="">前端</a></li>
                                            <li><i className="font__icon--fonts"><a href="">&#xe604;</a></i><a href="">前端</a></li>
                                            <li><i className="font__icon--fonts"><a href="">&#xe604;</a></i><a href="">前端</a></li>
                                        </ul>
                                    </div>

                        </div>
                    </aside>
                    </aside>
                </div>
                <NotificationSystem ref="notificationSystem" />
            </div>
        )
    }
});

export {Modifing as Modifing}