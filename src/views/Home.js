import React, { Component } from 'react';
import {Col, Container, Row} from "react-grid-system";
import GenerateModel from "../components/GenerateModel";
import CreateSeed from "../components/CreateSeed";
import StartCrawl from "../components/StartCrawl";


class Home extends Component {

    render(){
        return(
            <Container>
                <Row>
                    <Col sm={4}>
                        <GenerateModel/>
                        <CreateSeed/>
                        <StartCrawl/>
                    </Col>
                    <Col sm={8}>
                        Right
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home