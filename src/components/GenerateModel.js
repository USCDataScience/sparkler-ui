import React, { Component } from 'react';
import {FormGroup, H5, Icon, InputGroup} from "@blueprintjs/core";
import {INTENT_PRIMARY} from "@blueprintjs/core/lib/cjs/common/classes";

class GenerateModel extends Component {


    constructor(props, context) {
        super(props, context);
        this.state= {}
        this.state['intent'] = INTENT_PRIMARY
    }

    render(){
        return(
            <div>
                <H5>Generate a Model</H5>

                <FormGroup
                    helperText={"Search for websites with these terms..."}
                    intent={this.state.intent}
                    label={"Search terms"}
                    labelFor={"text-input"}>
                    <InputGroup id="text-input" leftIcon="search" placeholder="Enter terms here" intent={this.state.intent} />
                </FormGroup>

                <div>
                    <H5>Minimum 10 Each</H5>
                    <span>5 <button className={"btn-circle btn-padding green"}><Icon icon={"heart"} iconSize={Icon.SIZE_LARGE}/></button></span>
                    <span>4 <button className={"btn-circle btn-padding amber"}><Icon icon={"tick"} iconSize={Icon.SIZE_LARGE}/></button></span>
                    <span>3 <button className={"btn-circle btn-padding red"}><Icon icon={"minus"} iconSize={Icon.SIZE_LARGE}/></button></span>
                </div>
                <div>
                    <H5>Other Options</H5>
                    <span>Import <Icon icon={"import"} iconSize={Icon.ICON_LARGE}/> </span>
                    <span>Export <Icon icon={"export"} iconSize={Icon.ICON_LARGE}/> </span>
                    <span>New Model <Icon icon={"document"} iconSize={Icon.ICON_LARGE}/> </span>

                </div>
            </div>
        )
    }
}

export default GenerateModel