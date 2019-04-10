import React, { Component } from 'react';
import {Button, Classes, NavbarDivider, NavbarGroup, NavbarHeading} from "@blueprintjs/core";


class Navbar extends Component {

    render(){
        return(
            <nav className="bp3-navbar bp3-dark">
                <div style={{margin: "0 auto", width: "600px"}}>
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading">Domain Discovery - Seed Generation</div>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
                        <button className="bp3-button bp3-minimal bp3-icon-document">Files</button>
                        <span className="bp3-navbar-divider"></span>
                        <button className="bp3-button bp3-minimal bp3-icon-user"></button>
                        <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
                        <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar