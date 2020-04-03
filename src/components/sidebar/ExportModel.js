import React, {Component} from "react";
import {Button} from "@blueprintjs/core";
import {connect} from "react-redux";
import {crawlStatus, exportData, killCrawl, startCrawl} from "../../actions";

class ExportData extends Component {

    constructor(props) {
        super(props);
        this.handleClick2 = this.handleClick2.bind(this);

    }

    handleClick2 = function(){
        let win = window.open('/classify/download/'+this.state.current_model, '_blank');
        win.focus()
    }

    render(){
        return(
            <Button style={{marginLeft: "10px"}} icon={"export"} text="Export Model" onClick={this.handleClick2}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        current_model: state.modelreducer.current_model,
        crawl_status: state.modelreducer.crawl_status
    }
}


const mapDispatchToProps = dispatch => ({
    export: (model) => dispatch(exportData(model)),

})


export default connect(mapStateToProps, mapDispatchToProps)(ExportData)
