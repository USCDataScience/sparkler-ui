import React, { Component } from 'react';
import {AnchorButton, H5} from "@blueprintjs/core";
import SeedURLDialog from "./SeedURLDialog";


class CreateSeed extends Component {


    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.modalElement = React.createRef();
    }

    handleOpen = () => this.modalElement.current.handleOpen();

    render(){
        return(
            <div>
            <H5>Create Seed File</H5>
            <AnchorButton icon={"import"} onClick={this.handleOpen} text="Paste Seed URLs" />
            <SeedURLDialog ref={this.modalElement}/>
            </div>
        )
    }
}

export default CreateSeed