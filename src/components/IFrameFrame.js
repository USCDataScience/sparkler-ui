import React, {Component} from 'react'
import {Button, Card, Classes, Elevation, H5} from "@blueprintjs/core";
import Iframe from "react-iframe";
import {Col, Container, Row} from "react-grid-system";
import {connect} from "react-redux";
import {setRelevancy} from "../actions";

const Example = ({ data }) => <img style={{width:"100%"}} src={`data:image/jpeg;base64,${data}`} />

class IFrameFrame extends Component{


    constructor(props) {
        super(props);

        this.state = {
            title: "",
            url: "",
            skeleton: true

        }
        this.updaterelevancy = this.updaterelevancy.bind(this);

    }

    updaterelevancy = function(val){
        debugger;
        this.props.setRelevancy(this.props.iframe, val)
    }


    render() {
        return(

        <Card style={{height:"470px"}}  interactive={true} elevation={Elevation.TWO}>
            <Container fluid >
                <Row>
                    <Col sm={12}>
            <H5 className={this.props.skeleton ? Classes.SKELETON : ''}>Title: {this.state.title}</H5>
            <H5 className={this.props.skeleton ? Classes.SKELETON : ''}>URL: {this.props.url}</H5>
                    </Col>
                </Row>
                <Row className={this.props.skeleton ? Classes.SKELETON : ''} style={{marginTop:"10px", height:"220px"}}>
                    <Col sm={12}>
                        {/*<Iframe scrolling="true" url={this.props.url} width="100%" height="200px"/>*/}
                        <Example data={this.props.image} />
                    </Col></Row>
                <br />

                <Row>
                    <Col sm={12}>
                        <Button onClick={() => this.updaterelevancy(2)} className={this.props.skeleton ? Classes.SKELETON : ''}>Highly Relevant</Button>
                        <Button onClick={() => this.updaterelevancy(1)} className={this.props.skeleton ? Classes.SKELETON : ''}>Relevant</Button>
                        <Button onClick={() => this.updaterelevancy(0)} className={this.props.skeleton ? Classes.SKELETON : ''}>Not Relevant</Button>
                    </Col>
                </Row>
            </Container>

        </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        skeleton: state.searchreducer.running
    }
}

const mapDispatchToProps = dispatch => ({
    setRelevancy: (a, v) => dispatch(setRelevancy(a,v))
})



export default  connect(mapStateToProps, mapDispatchToProps)(IFrameFrame)
