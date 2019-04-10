import React, { Component } from 'react';
import {AnchorButton, H5} from "@blueprintjs/core";


class CreateSeed extends Component {

    render(){
        return(
            <div>
            <H5>Create Seed File</H5>
            <AnchorButton icon={"import"} text="Upload Seed File" />
            </div>
        )
    }
}

export default CreateSeed