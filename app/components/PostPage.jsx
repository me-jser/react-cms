import React from 'react';

import { DashMenu } from '../components/DashMenu';
import {DashOptionPosting} from '../components/DashOptionPosting';
import {TollBar} from '../components/TollBar';
import {Posts} from '../components/Posts';

var PostPage = React.createClass({
    render: function(){
        return(
            <div className="container">
                <DashMenu />
                <DashOptionPosting />
            </div>
        );
    }
});

export {PostPage as PostPage};