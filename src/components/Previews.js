import React, {Component} from 'react'
import {connect} from "react-redux";
import IFrameFrame from "./IFrameFrame";
import {Col, Container, Row} from "react-grid-system";


class Previews extends Component{


    static render_nowebsites(){
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

    static listToMatrix(list, elementsPerSubArray) {
        var matrix = [], i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [{pos:i+1, obj: {url:"", title: ""}}];
            }

            matrix[k].push({pos:i+1, obj: list[i]});
        }

        return matrix;
    }

//var marker = get_marker(jdata[i - 1]['label']);
    render_websites() {
        let arr = [];
        let matrix  = Previews.listToMatrix(this.props.websites, 3)
        for(let i=0; i< matrix.length; i++){
            arr.push(<Row ><Col sm={4}><IFrameFrame iframe={"page"+matrix[i][1].pos+"-ann"} url={matrix[i][1].obj.url} title={matrix[i][1].obj.title}/></Col>
                <Col sm={4}><IFrameFrame iframe={"page"+matrix[i][2].pos+"-ann"} url={matrix[i][2].obj.url} title={matrix[i][2].obj.title}/>
                </Col><Col sm={4}><IFrameFrame iframe={"page"+matrix[i][3].pos+"-ann"} url={matrix[i][3].obj.url} title={matrix[i][3].obj.title}/></Col>
            </Row>)
        }
        return arr;
        }


    render(){
        if(this.props.running){
            return(Previews.render_nowebsites())
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