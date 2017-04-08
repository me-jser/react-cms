import React from 'react';

import { DashMenu } from '../components/DashMenu';
import {DashOptionModify} from '../components/DashOptionModify';
import {TollBar} from '../components/TollBar';
import {Posts} from '../components/Posts';

var PostPage = React.createClass({
    render: function(){
        return(
            <div className="container">
                <DashMenu />
                <DashOptionModify />
            </div>
        );
    }
});

export {PostPage as PostPage};