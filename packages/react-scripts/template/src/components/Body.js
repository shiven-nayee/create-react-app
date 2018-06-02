import React, { Component } from 'react';

// Components
import NavMenu from './NavMenu';

class Body extends Component {
    state = {}
    render() { 
        return ( 
            <div className="main-body">
                <NavMenu />
            </div>
         )
    }
}
 
export default Body;