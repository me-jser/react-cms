import React from 'react';

import { DashMenu } from '../components/DashMenu';
import {DashOption} from '../components/DashOption';
import {TollBar} from '../components/TollBar';
import {Posts} from '../components/Posts';

var Container = React.createClass({
    render: function(){
        return(
            <div className="container">
                <DashMenu />
                <div className="dash-options">
                    <TollBar />
                    <Posts />
                </div>
            </div>
        );
    }
});

export {Container as Container};