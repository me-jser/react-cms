import React from 'react';

import { DashMenu } from '../components/DashMenu';
import {DashOption} from '../components/DashOption';

var Container = React.createClass({
    render: function(){
        return(
            <div className="container">
                <DashMenu />
                <DashOption />
            </div>
        );
    }
});

export {Container as Container};