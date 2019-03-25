import React, { Component } from 'react';
import {Col, Container, Row} from "react-grid-system";
import {FormGroup, H5, InputGroup} from "@blueprintjs/core";
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
                    <InputGroup id="text-input" placeholder="Enter terms here" intent={this.state.intent} />
                </FormGroup>
            </div>
        )
    }
}

export default GenerateModel