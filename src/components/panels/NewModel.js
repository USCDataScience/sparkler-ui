import React, {Component} from 'react';
import {Button, Card, InputGroup} from "@blueprintjs/core";
import {FormGroup} from "@blueprintjs/core/lib/cjs";
import {INTENT_PRIMARY} from "@blueprintjs/core/lib/cjs/common/classes";

class NewModel extends Component {


    constructor(props) {
        super(props);
        this.state = {}
        this.state['intent'] = INTENT_PRIMARY;
    }

    render() {
        return (
            <Card>
                <FormGroup
                    intent={this.state.intent}
                    label={"Model Name"}
                    labelFor={"text-input"}>
                    <InputGroup type="text" id="text-input" value={this.state.searchterm} onChange={this.handleChange}
                                leftIcon="new-text-box" placeholder="Enter your model name" intent={this.state.intent}/>
                    <Button style={{marginTop: "10px"}} onClick={() => this.handleSearch()}>Create Model</Button>

                </FormGroup>
            </Card>
        )
    }
}

export default NewModel