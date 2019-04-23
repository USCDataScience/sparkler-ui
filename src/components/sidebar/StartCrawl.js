import React, { Component } from 'react';
import {AnchorButton, H5} from "@blueprintjs/core";
import {connect} from "react-redux";


class StartCrawl extends Component {

    render(){
        return(
            <div>
                <H5>Start the Crawl</H5>
                <AnchorButton disabled={!this.props.current_model} icon={"time"} text="Start Crawler" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        current_model: state.modelreducer.current_model
    }
}

export default connect(mapStateToProps)(StartCrawl)