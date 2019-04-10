import React, { Component } from 'react';
import {Col, Container, Row} from "react-grid-system";
import GenerateModel from "../components/GenerateModel";
import CreateSeed from "../components/CreateSeed";
import StartCrawl from "../components/StartCrawl";
import {Divider} from "@blueprintjs/core";


class Home extends Component {

    render(){
        return(
            <Container fluid>
                <Row style={{marginTop:"10px"}}>
                    <Col sm={3}>
                        <GenerateModel/>
                        <Divider/>
                        <CreateSeed/>
                        <Divider/>
                        <StartCrawl/>
                    </Col>
                    <Col sm={9}>
                        Right
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home