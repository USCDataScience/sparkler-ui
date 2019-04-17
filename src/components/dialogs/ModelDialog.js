import React, {Component} from 'react';
import {Button, Classes, Dialog, Tab, Tabs} from "@blueprintjs/core";
import ListModels from "../panels/ListModels";
import NewModel from "../panels/NewModel";

class SeedURLDialog extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleClose = () => this.setState({ isOpen: false });
    handleOpen = () => this.setState({ isOpen: true });
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return(
        <Dialog
            icon="search-text"
            onClose={this.handleClose}
            title="Model Administration"
            {...this.state}
        >
            <div className={Classes.DIALOG_BODY} style={{minHeight:"200px"}}>

                <Tabs id={"modeltabs"}>
                    <Tab id={"newmodel"} title={"New Model"} panel={<NewModel/>}/>
                    <Tab id={"existingmodels"} title={"Existing Models"} panel={<ListModels/>}/>
                </Tabs>
            </div>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Button onClick={this.handleClose}>Close</Button>

                </div>
            </div>
        </Dialog>

        )
    }

}

export default SeedURLDialog