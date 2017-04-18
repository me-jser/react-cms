import React from 'react';

var NotificationSystem = require('react-notification-system');
import $ from 'jquery'
var Reg = React.createClass({
    handleReg: function(e){
        e.preventDefault();
        $.ajax({
            url:'/reg',
            data:{
                username:this.refs.user.value,
                password:this.refs.password.value,
                age:this.refs.age.value,
                email:this.refs.email.value,
            }
        }).done(function(result){
           switch (result.status){
               case 'success':
                   this.showNotification();
                   break;
               case 'repeated':
                   this.userAreadyExist();
                   break;
               default :
                   this.showNotificationFailed();
           }
        }.bind(this))
    },
    showNotification: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            message: '注册成功',
            level: 'success',
            position:'tc',
            autoDismiss:0
        });
    },
    showNotificationFailed: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            message: '注册失败,请重试',
            level: 'error',
            position:'tc',
            autoDismiss:4
        });
    },
    userAreadyExist: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            message: '用户已经存在',
            level: 'error',
            position:'tc',
            autoDismiss:4
        });
    },
    render: function(){
        return(
            <div className="container">
                <div className="login--bar">
                    <div className="login--site">注册 一个前端</div>
                    <div className="login--type">
                        <a href="/signIn" className="login--type__reg">登陆</a>
                        <a href="/signUp" className="login--type__sign">注册</a>
                    </div>
                </div>
                <div className="login--form">
                    <form action="" className="login--form--body" onSubmit={this.handleReg}>
                        <div className="login--form--header">
                            <h2>注册</h2>
                        </div>
                        <div className="login--form--username"><input type="text" name="user" placeholder="用户名" required="true" ref='user'/></div>
                        <div className="login--form--password"><input type="password" name="password" placeholder="密码" required="true" ref="password"/></div>
                        <div className="login--form--password"><input type="age" name="password" placeholder="年龄(可为空)" ref="age" /></div>
                        <div className="login--form--password"><input type="email" name="password" placeholder="Eamil(可为空)" ref="email"/></div>
                        <div className="login--from--submit">
                            <button type="submit">注册</button>
                            <p>忘记密码?<a href="">抱歉,你没法找回 233</a></p></div>

                    </form>
                </div>
                <NotificationSystem ref="notificationSystem" />
            </div>

        );
    }
});

export {Reg as Reg};