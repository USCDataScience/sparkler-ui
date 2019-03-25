import React, { Component } from 'react';
import {Col, Container, Row} from "react-grid-system";
import {AnchorButton, H5} from "@blueprintjs/core";


class CreateSeed extends Component {

    render(){
        return(
            <div>
            <H5>Create Seed File</H5>
            <AnchorButton text="Upload Seed File" />
            </div>
        )
    }
}

export default CreateSeed