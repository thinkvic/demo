import React, { useState, useEffect } from 'react';
import ListNav from './components/ListNav.js';
import ListMsg from './components/ListMsg.js';
import EditorMsg from './components/EditorMsg.js';

// npm install @material-ui/core
// npm install @material-ui/icons
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function App() {
  const [data, setData] = useState([]);
  const [currentChannel, setCurrent] = useState(null);
  const [messages, setMessages] = useState([]);



// only run on mount with []
  useEffect(() => {
    fetch(process.env.REACT_APP_API + 'channels/')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
        setData(myJson);
        // this.setState(
        //   { data: myJson }
        // )
      }.bind(this))
      .catch(error => alert("FETCH CHANNELS FAILED: " + error.message));

  }, [])


  // runs after every render (by default)
  useEffect(
    () => {
      let i = findChannelIndex(currentChannel);
      console.log('found', i)
      if (data[i] && data[i].messages) {
        setMessages(data[i].messages);      
      }
    }
  )

  const findChannelIndex = (cid) => {
    return data.findIndex(
      (channel) => (channel.id === cid)
    )
  }


  const channelClick = (cid) => {
    console.log('cid', cid);
    let i = findChannelIndex(cid);
    console.log('iiiiiiii', i);

    setCurrent(cid);

    fetch(process.env.REACT_APP_API + 'messages/' + cid)
      .then((response) => {
        return response.json();
      })
      .then((msgs) => {
        console.log("messages" + JSON.stringify(msgs));

        let newdata = data.map((channel, index) => {
          console.log('index now', index, i);
          if (index !== i) {
            // keep it as-is
            return channel
          }
          //  switching the whole messages arr for one particular channel obj
          return {
            ...channel, messages: msgs
          }
        })
        console.log('newdata', newdata);
        setData(newdata);
      })
      .catch(error => alert("FETCH CHANEL MESSAGES FAILED: " + error.message));
  }

  const buttonClick = (v) => {
    console.log('submit value', v);

    putData(process.env.REACT_APP_API + currentChannel, { "user": "default", "content": v })
      .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
      .catch(error => console.error(error));

    function putData(url = '', data = {}) {
      // Default options are marked with *
      console.log('url', url);

      return fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, cors, *same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        // referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
        // parses JSON response into native JavaScript objects 
        .then(response => response.json()).then(
          (msg) => {
            console.log('msg after put', msg)
          }
        )
        .catch(error => alert("ADD MESSAGE FAILED: " + error.message));
    }
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([true, true, true]);

  const handleChange = i => (event, isExpanded) => {
    let newexpanded = expanded.map(
      (panelstatus, index) => {
        if (index === i) {
          return !panelstatus;
        } else {
          return panelstatus
        }
      }
    )
    setExpanded(newexpanded);
  };

  return (
    <div className="App">


      <div className={classes.root}>
        <ExpansionPanel expanded={expanded[0]} onChange={handleChange(0)} >
          <ExpansionPanelSummary className={classes.summary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography className={classes.heading}>Channels</Typography>
          </ExpansionPanelSummary >
          <ExpansionPanelDetails>
            <ListNav channels={data} onClick={(cid) => channelClick(cid)} 
            currentChannel={currentChannel} ></ListNav>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded[1]} onChange={handleChange(1)} >
          <ExpansionPanelSummary className={classes.summary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header">
            <Typography className={classes.heading}>Messages</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ListMsg messages={messages} currentChannel={currentChannel} ></ListMsg>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded[2]} onChange={handleChange(2)}>
          <ExpansionPanelSummary className={classes.summary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Add A Message</Typography>
            {/* <Typography className={classes.secondaryHeading}></Typography> */}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <EditorMsg onClick={(v) => buttonClick(v)} currentChannel={currentChannel} ></EditorMsg>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>
    </div>


  );

}

// USE STYLES return a style class obj
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  summary: {
    backgroundColor: '#EEEEEE',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default App;
