import React, { Component } from 'react';
import {Button, H5} from "@blueprintjs/core";
import {connect} from "react-redux";
import {startCrawl} from "../../actions";


class StartCrawl extends Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = function(){
        this.props.startCrawl(this.props.current_model)

    }

    render(){
        return(
            <div>
                <H5>Start the Crawl</H5>
                <Button disabled={!this.props.current_model} icon={"time"} text="Start Crawler" onClick={this.handleClick}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        current_model: state.modelreducer.current_model
    }
}

const mapDispatchToProps = dispatch => ({
    startCrawl: (model) => dispatch(startCrawl(model))
})

export default connect(mapStateToProps, mapDispatchToProps)(StartCrawl)