import React from 'react';

import { DashMenu } from '../components/DashMenu';
import {DashOption} from '../components/DashOption';
import {TollBar} from '../components/TollBar';
import {Posts} from '../components/Posts';

var App = React.createClass({
    loginRequired: function(){
        console.log("bingo!");
    },
    render: function(){
        return(
            <div className="container">
                <DashMenu onEnter={this.loginRequired} />
                <DashOption>
                    <TollBar />
                    <Posts />
                </DashOption>
            </div>
        );
    }
});

export {App as App};