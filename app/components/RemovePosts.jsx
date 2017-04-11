import React from 'react';
var NotificationSystem = require('react-notification-system');
var RemovePosts = React.createClass({
    _notificationSystem: null,
    propTypes: {
        removeAddr: React.PropTypes.string.isRequired
    },
    handelDel: function (e) {
        e.preventDefault();
        //通过Ajax发送删除请求,以便拦截进行notification
        $.ajax({
            url: this.props.removeAddr,
            type: 'DELETE'
        }).done((result) => {
            /**
             * @param result.ok: 删除后返回的状态码
             */
            if (result.ok == 1) {
                this.props.onRemove();
                this.showNotification();
                //触发onRemove时间,从而更新parent component state,实现更新列表功能

            } else {
                this.showNotificationFailed()
            }
        })
    },
    showNotification: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            title:'操作结果',
            message: '删除成功',
            level: 'success',
            position:'tc',
            autoDismiss:0
        });
    },
    showNotificationFailed: function() {
        this._notificationSystem = this.refs.notificationSystem;
        this._notificationSystem.addNotification({
            title:'操作结果',
            message: '删除失败',
            level: 'error',
            position:'tc',
            autoDismiss:4
        });
    },
    render: function () {
        var successStyle = {
            NotificationItem: { // Override the notification item
                success: { // Applied only to the success notification item
                    //backgroundColor: '#f9f9f9',
                    //color:'#03a9f3'
                }
            }
        };
        return (
            <span>
                 <a href="" ref="removePosts" onClick={this.handelDel}>删除</a>
                 <NotificationSystem ref="notificationSystem" style={successStyle}/>
            </span>
        )
    }
});

export {RemovePosts as RemovePosts}