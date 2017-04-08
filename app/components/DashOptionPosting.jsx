import  React from 'react';
import {Posting} from '../components/Posting';
import {TollBar} from '../components/TollBar';

var DashOptionPosting = React.createClass({
    render: function(){
        return(
            <div className="dash-options">
                <TollBar />
                <Posting />
            </div>
        );
    }
});

export {DashOptionPosting as DashOptionPosting}