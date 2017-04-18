import  React from 'react';
var NotificationSystem = require('react-notification-system');
import $ from 'jquery'
var Posting = React.createClass({
    getInitialState: function(){
        return {
            data :[],
            postId:null,
            title:null,
            content:null,
            tags:null,
            catalog:null
        }
    },
    handleSubmit:function(event){
       event.preventDefault();

        $.ajax({
            url:this.refs.newpost.action,
            data:{
                title:this.refs.title.value,
                content:this.refs.content.value,
                tags:this.refs.tags.value,
                catalog:this.refs.catalog.value,
            }
        }).done(function(result){
            result.status == 'success' ? this.showNotification() : this.showNotificationFailed()
        }.bind(this));
    },
    showNotification: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            title:'操作结果',
            message: '添加成功',
            level: 'success',
            position:'tc',
            autoDismiss:0,
        });
    },
    showNotificationFailed: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            title:'操作结果',
            message: '添加失败',
            level: 'error',
            position:'tc',
            autoDismiss:4
        });
    },
    render: function(){

        return(

            <div className="posts background__color--gray">
                <div className="posts__header">
                    <header className="posts__header--name"><h1>新文章</h1></header>
                </div>
                <div className="posts__form__wraper">
                    <form action="/new" method="get" id="posts__form" className="background__color--gray posts__form--style" onSubmit={this.handleSubmit} ref="newpost">
                        <div><input  name="title" className="posts__form__title" title="title" placeholder="在此输入标题" ref="title"  required /></div>
                        <input type="hidden" name="author" className="posts__form__title" value="admin" />
                        <div><textarea name="content" id="" cols="30" rows="20" className="posts__from__content" title="content" placeholder="在此输入正文" ref="content" required/></div>
                        <div>
                            <button className="posts__form__save">发布</button>
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
                                    <input type="text" title="tags" name="tags" className="post--tags__insert"  form="posts__form" ref="tags" required />
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
                                <input type="text" title="catalog" name="catalog" className="post--tags__insert" form="posts__form" ref="catalog" required />
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

export {Posting as Posting}