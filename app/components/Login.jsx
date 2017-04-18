import React from 'react';
var NotificationSystem = require('react-notification-system');
import { browserHistory } from 'react-router';
import $ from 'jquery'
var Login = React.createClass({
    handleLogin:function(e){
        e.preventDefault();
        $.ajax({
            url:'/login',
            data:{
                username:this.refs.user.value,
                password:this.refs.pass.value
            }
        }).done(function(result){
            switch (result.status){
                case 'success':
                    this.showNotification();
                    setTimeout(() =>{
                        browserHistory.push(`/`);
                    },3000);

                    break;
                case 'failed':
                    this.showNotificationFailed();
                    break;
                case 'noSuchUser':
                    this.userNotExist();
                    break;
                default:
                    this.showNotificationFailed();
            }
        }.bind(this));
    },
    showNotification: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            message: '登陆成功,即将跳转至首页',
            level: 'success',
            position:'tc',
            autoDismiss:0
        });
    },
    showNotificationFailed: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            message: '用户名或密码不正确',
            level: 'error',
            position:'tc',
            autoDismiss:4
        });
    },
    userNotExist: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            message: '用户不存在',
            level: 'error',
            position:'tc',
            autoDismiss:4
        });
    },
    render: function () {
        return (
            <div className="container">
                <div className="login--bar">
                    <div className="login--site">登录 一个前端</div>
                    <div className="login--type">
                        <a href="/signIn" className="login--type__reg">登陆</a>
                        <a href="/signUp" className="login--type__sign">注册</a>
                    </div>
                </div>
                <div className="login--form">
                    <form action="/login" className="login--form--body" onSubmit={this.handleLogin}>
                        <div className="login--form--header">
                            <h2>登陆</h2>
                        </div>
                        <div className="login--form--username"><input type="text" name="user" placeholder="用户名" required="true" ref="user"/></div>
                        <div className="login--form--password"><input type="password" name="password" placeholder="密码" required="true" ref="pass"/></div>
                        <div className="login--from--submit">
                            <button type="submit">登陆</button>
                            <p>忘记密码?<a href="">抱歉,你没法找回 233</a></p></div>

                    </form>
                </div>
                <NotificationSystem ref="notificationSystem" />
            </div>
        );
    }
});

export {Login as Login};