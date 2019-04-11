import React,{Component} from 'react';
import {AnchorButton, Dialog, Tooltip, Classes, Intent, Button, TextArea} from "@blueprintjs/core";

class SeedURLDialog extends Component{


    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleClose = () => this.setState({ isOpen: false });
    handleOpen = () => this.setState({ isOpen: true });



    render(){
        return(
        <Dialog
            icon="info-sign"
            onClose={this.handleClose}
            title="Seed URLs"
            {...this.state}
        >
            <div className={Classes.DIALOG_BODY} style={{minHeight:"200px"}}>
                <TextArea style={{minHeight:"200px"}}
                    growVertically={true}
                    large={true}
                    intent={Intent.PRIMARY}
                    onChange={this.handleChange}
                    value={this.state.value}
                    fill={true}
                />
            </div>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Tooltip content="This button is hooked up to close the dialog.">
                        <Button onClick={this.handleClose}>Cancel</Button>
                    </Tooltip>
                    <AnchorButton
                        intent={Intent.PRIMARY}
                        href="https://www.palantir.com/palantir-foundry/"
                        target="_blank"
                    >
                       Save
                    </AnchorButton>
                </div>
            </div>
        </Dialog>
        )
    }

}

export default SeedURLDialog