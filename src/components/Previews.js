import React, {Component} from 'react'
import {connect} from "react-redux";
import IFrameFrame from "./IFrameFrame";
import {Col, Container, Row} from "react-grid-system";


class Previews extends Component{


    render_nowebsites(){
        return(
            <Container>
                <Row>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                    <Col sm={4}>
                        <IFrameFrame/>
                    </Col>
                </Row>
            </Container>
        )
    }

    listToMatrix(list, elementsPerSubArray) {
        var matrix = [], i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }

            matrix[k].push(list[i]);
        }

        return matrix;
    }

//var marker = get_marker(jdata[i - 1]['label']);
    render_websites() {
        let arr = [];
        let matrix  = this.listToMatrix(this.props.websites, 3)
        for(let i=0; i< matrix.length; i++){
            arr.push(<Row ><Col sm={4}><IFrameFrame url={matrix[i][0].url} title={matrix[i][0].title}/></Col>
                <Col sm={4}><IFrameFrame url={matrix[i][1].url} title={matrix[i][1].title}/>
                </Col><Col sm={4}><IFrameFrame url={matrix[i][2].url} title={matrix[i][2].title}/></Col>
            </Row>)
        }
        return arr;
        }


    render(){
        if(this.props.running){
            return(this.render_nowebsites())
        }
        else if(this.props.websites===undefined){
            return(<div/>)
        }
        else{
            return(this.render_websites())
        }
    }
}


const mapStateToProps = state => {
    return {
        websites: state.searchreducer.websites,
        running: state.searchreducer.running

    }
}


export default connect(mapStateToProps)(Previews)