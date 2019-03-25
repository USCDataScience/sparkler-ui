import React, { Component } from 'react';
import {Col, Container, Row} from "react-grid-system";
import {AnchorButton, H5} from "@blueprintjs/core";


class StartCrawl extends Component {

    render(){
        return(
            <div>
                <H5>Start the Crawl</H5>
                <AnchorButton text="Start Crawler" />
            </div>
        )
    }
}

export default StartCrawl