import  React from 'react';
import {Posts} from '../components/Posts';
import {TollBar} from '../components/TollBar';
import {Modifing} from '../components/Modify';

var DashOptionModify = React.createClass({
    render: function(){
        return(
            <div className="dash-options">
                <TollBar />
                <Modifing />
            </div>
        );
    }
});

export {DashOptionModify as DashOptionModify}