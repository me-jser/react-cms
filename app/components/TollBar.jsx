import React from 'react';
import cookie from 'react-cookie';
var TollBar = React.createClass({
    render: function(){
        var user = cookie.load('userName');
        return(
            <header className="tool-bar">
                <div className="tool-bar__dash--toogle"><i className="font__icon--fonts"><a href="">&#xe630;</a></i></div>
                <div className="tool-bar__search">
                    <input type="text" className="tool-bar__search__input" placeholder="搜索...." />
                        <i className="font__icon--fonts tool-bar__search--icon">&#xe652;</i>
                </div>
                <div className="tool-bar__system--setting">
                    <ul>
                        <li><a href="" className="font__icon--fonts">&#xe611;</a></li>
                        <li><a href="" className="font__icon--fonts">&#xe642;</a></li>
                        <li className="tool-bar__system__user"><a href="" >{user}</a><i className="font__icon--fonts">&#xe619;</i></li>
                        <li><a href="" className="font__icon--fonts">&#xe600;</a></li>
                    </ul>
                </div>
            </header>
        );
    }
});

export {TollBar as TollBar};