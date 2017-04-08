import React from 'react';

import { DashMenu } from '../components/DashMenu';
import {DashOption} from '../components/DashOption';
import {TollBar} from '../components/TollBar';
import {Posts} from '../components/Posts';

var App = React.createClass({
    render: function(){
        return(
            <div className="container">
                <DashMenu />
                <DashOption>
                    <TollBar />
                    <Posts />
                </DashOption>
            </div>
        );
    }
});

export {App as App};