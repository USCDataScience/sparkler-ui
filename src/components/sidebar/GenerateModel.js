import React, {Component} from 'react';
import {Button, FormGroup, H5, H6, Icon, InputGroup} from "@blueprintjs/core";
import {INTENT_PRIMARY} from "@blueprintjs/core/lib/cjs/common/classes";
import {fetchNewTime, searchFired, searchWebsites} from "../../actions";
import {connect} from "react-redux";

class GenerateModel extends Component {


    constructor(props, context) {
        super(props, context);
        this.state= {}
        this.state['intent'] = INTENT_PRIMARY;
        this.state['searchterm'] = ""
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({searchterm: event.target.value});
    }

    handleSearch(event){
        this.props.searchTriggered();
        this.props.searchWebsites(this.state.searchterm);
    }

    render(){
        return(
            <div>
                <H5>Generate a Model</H5>

                <FormGroup id={"searchform"} contentClassName={"generatemodel"}
                           helperText={"Search for websites with these terms..."}
                           intent={this.state.intent}
                           label={"Search terms"}
                           labelFor={"text-input"}>
                    <InputGroup id={"searchterms"} type="search" value={this.state.searchterm}
                                onChange={this.handleChange} leftIcon="search" placeholder="Enter terms here"
                                intent={this.state.intent}/>
                    <Button onClick={() => this.handleSearch()}>Go!</Button>
                </FormGroup>

                <div>
                    <H6>Minimum 10 Each</H6>
                    <table style={{textAlign:"center"}}>
                        <tr>
                            <td>5</td>
                            <td>4</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td><button className={"btn-circle btn-padding green"}><Icon icon={"heart"} iconSize={Icon.SIZE_LARGE}/></button></td>
                            <td><button className={"btn-circle btn-padding amber"}><Icon icon={"tick"} iconSize={Icon.SIZE_LARGE}/></button></td>
                            <td> <button className={"btn-circle btn-padding red"} onClick={this.props.updateTime}><Icon icon={"minus"} iconSize={Icon.SIZE_LARGE}/></button></td>
                        </tr>
                    </table>

                </div>
                <div>
                    <H6>Other Options</H6>
                    <span><Button icon={"export"}>Export Model</Button></span>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateTime: () => dispatch(fetchNewTime()),
    searchWebsites: (s) => dispatch(searchWebsites(s)),
    searchTriggered: () => dispatch(searchFired(true))
})

export default connect(null, mapDispatchToProps)(GenerateModel);