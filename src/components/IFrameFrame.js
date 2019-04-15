import React, {Component} from 'react'
import { Button, Card, Elevation, Classes, H5 } from "@blueprintjs/core";
import Iframe from "react-iframe";
import {Col, Container, Row} from "react-grid-system";
import {connect} from "react-redux";

class IFrameFrame extends Component{


    constructor(props) {
        super(props);

        this.state = {
            title: "",
            url: "",
            skeleton: true

        }
    }

    render() {
        return(

        <Card style={{height:"370px"}}  interactive={true} elevation={Elevation.TWO}>
            <Container fluid >
                <Row>
                    <Col sm={12}>
            <H5 className={this.props.skeleton ? Classes.SKELETON : ''}>Title: {this.state.title}</H5>
            <H5 className={this.props.skeleton ? Classes.SKELETON : ''}>URL: {this.props.url}</H5>
                    </Col>
                </Row>
                <Row className={this.props.skeleton ? Classes.SKELETON : ''} style={{marginTop:"10px", height:"220px"}}>
                    <Col sm={12}>
                        <Iframe url={this.props.url} width="100%" height="200px"/>
                    </Col></Row>
                <br />

                <Row>
                    <Col sm={12}>
                    <Button className={this.props.skeleton ? Classes.SKELETON : ''}>Submit</Button>
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


export default connect(mapStateToProps)(IFrameFrame)