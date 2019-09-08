import React from 'react'
// import '../components/Searchbar/Searchbar.css';
import { connect } from 'react-redux'
import { thunkfetchdata } from '../actions/actions'
import Grid from '@material-ui/core/Grid';
import { TextField, Button, Icon } from '@material-ui/core';
import { Search, AccessAlarm, ThreeDRotation } from '@material-ui/icons';


const Searchbar = ({ dispatch }) => {

    let input;
    return (
        <div>
            <p>1JNqRhJaQEBTU2dGRgmoEN1eiMo1N8sGEk</p>
            <p>1CD7BmoT44jxj4T13GHwTZY4mfkmMtTxuL</p>
            {/* This property can be used to pass a ref callback to the input element. */}

            <TextField style={{ padding: 0, width: 500 }} className="searchbar" 
                type="text" defaultValue={"1CD7BmoT44jxj4T13GHwTZY4mfkmMtTxuL"}
                inputRef={node => input = node} />
            <Button><Search onClick={() => {
                console.log('searchbar onclick then dispatch thunk', input.value);
                let v = input.value;
                dispatch(thunkfetchdata(v));
            }} /></Button>

            {/* <Icon>search</Icon> */}
            {/* <AccessAlarm /> */}
        </div>
    )


}

export default connect()(Searchbar)