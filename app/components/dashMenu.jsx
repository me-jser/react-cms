import React from 'react';

var DashMenu = React.createClass({
    render: function(){
        return (
            <div className="dash-menu">
                <aside className="dash-menu--logo"><em className="dash-menu--board">仪表盘</em><em className="dash-menu--site">一个前端</em></aside>
                <aside className="dash-menu--avatar"></aside>
                <aside className="dash-menu--owner">John Smith</aside>
                <aside className="dash-menu__menus--lists">
                    <ul>
                        <li className="dash-menu--items__selected"><i className="font__icon--fonts">&#xe642;</i>文章
                            <ul className="dash-menu__lists__sub">
                                <li className="dash-menu__items--active"><a href="">所有文章</a></li>
                                <li><a href="">写文章</a></li>
                                <li><a href="">标签</a></li>
                            </ul>
                        </li>
                        <li><i className="font__icon--fonts">&#xe76a;</i>外观

                        </li>
                        <li ><i className="font__icon--fonts">&#xe624;</i>用户</li>
                        <li><i className="font__icon--fonts">&#xe606;</i>工具</li>
                        <li><i className="font__icon--fonts">&#xe600;</i>设置</li>
                    </ul>
                </aside>
            </div>
        );
    }
});

export  { DashMenu as DashMenu};