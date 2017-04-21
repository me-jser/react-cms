import React from 'react';
import cookie from 'react-cookie';
var DashMenu = React.createClass({

    render: function(){
        var user = cookie.load('userName');
        return (
            <div className="dash-menu">
                <aside className="dash-menu--logo"><em className="dash-menu--board">仪表盘</em><em className="dash-menu--site"><a href="/home">一个前端</a></em></aside>
                <aside className="dash-menu--avatar"></aside>
                <aside className="dash-menu--owner">{user}</aside>
                <aside className="dash-menu__menus--lists">
                    <ul>
                        <li className="dash-menu--items__selected"><i className="font__icon--fonts">&#xe642;</i>文章
                            <ul className="dash-menu__lists__sub">
                                <li className="dash-menu__items--active"><a href="/home">所有文章</a></li>
                                <li><a href="/addNewPost">写文章</a></li>
                                <li><a href="javascript:void(0)" disabled="true">标签</a></li>
                            </ul>
                        </li>

                    </ul>
                </aside>
            </div>
        );
    }
});

export  { DashMenu as DashMenu};