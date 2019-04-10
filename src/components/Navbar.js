import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchNewTime} from "../actions";


class Navbar extends Component {

    render(){
        return(
            <nav className="bp3-navbar bp3-dark">
                <div style={{margin: "0 auto", width: "600px"}}>
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading">Domain Discovery - Seed Generation - Current time: {this.props.currentTime}</div>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
                        <button className="bp3-button bp3-minimal bp3-icon-document">Files</button>
                        <span className="bp3-navbar-divider"></span>
                        <button className="bp3-button bp3-minimal bp3-icon-user"></button>
                        <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
                        <button className="bp3-button bp3-minimal bp3-icon-cog" onClick={this.props.updateTime}></button>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentTime: state.timereducer.currentTime
    }
}

const mapDispatchToProps = dispatch => ({
    updateTime: () => dispatch(fetchNewTime())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);