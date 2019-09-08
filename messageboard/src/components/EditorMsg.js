import React , {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

export default ({ onClick, currentChannel }) => {
    const classes = useStyles();

    // textInput must be declared here so the ref can refer to it
    // let areaInput = React.createRef();

    let [inputValue, setInputValue]=useState()
    const handleType = (e)=>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }
 
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-multiline-static"
                label="New Message"
                multiline
                rows="4"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onChange={(e)=>handleType(e)}
                value={inputValue}
            />
            <Button onClick={()=>onClick(inputValue)}
                variant="outlined" color="primary" className={classes.button}
                disabled={!currentChannel||!inputValue}>
                <SendIcon /> &nbsp; Submit
            </Button>

        </form>
    )
}


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    textField: {
        width: '60vw',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    }
}));