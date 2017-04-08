import React from 'react';

import { DashMenu } from '../components/DashMenu';
import {DashOptionPosting} from '../components/DashOptionPosting';
import {TollBar} from '../components/TollBar';
import {DashOptionModify} from '../components/DashOptionModify';

var ModifyPost = React.createClass({
    render: function(){
        return(
            <div className="container">
                <DashMenu />
                <DashOptionModify />
            </div>
        );
    }
});

export {ModifyPost as ModifyPost};