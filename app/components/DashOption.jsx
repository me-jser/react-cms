import  React from 'react';
import {Posts} from '../components/Posts';
import {TollBar} from '../components/TollBar';

var DashOption = React.createClass({
    render: function(){
        return(
            <div className="dash-options">
                <TollBar />
                <Posts />
            </div>
        );
    }
});

export {DashOption as DashOption}