import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {


    state={
        check1: true
    }

    constructor(props){
        super(props);
    }



    render() {

        let check1=true;
        let check2=false;
        return (
        <div className="checkboxes">
            <Checkbox checked={this.state.check1} onChange={()=>{ this.props.onfilterClick('name'); this.setState({"check1":true})   }}/>
            <label >Name</label>
            <Checkbox checked={!this.state.check1} onChange={()=>{ this.props.onfilterClick('dob');  this.setState({"check1":false})  }}/>
            <label>Age</label>
        </div>
        );
    }
}

export default Filter;