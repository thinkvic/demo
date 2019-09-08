import React from 'react'
import ContSearchbar from './containers/ContSearchbar'
import ContOverview from './containers/ContOverview'
import ContTransactions from './containers/ContTransactions'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import './App.css'
// import { fetchData } from './util'

// This version, with dumb compoents and props
// but storing everything in App Component States!

// export default class App extends React.Component {

// By using an alternative class syntax, you can leave out the constructor and initialize the state as class field declaration. However, you don’t have access to the props anymore.

// state = {
//     balance: "",
//     trans: []
// }

//     Do call super(props) before any statement.
// Here is the right place to initialize state by using this.state.
// Here is the right place to bind event handlers to the class instance.
// If you don’t initialize a state and you don’t bind methods, you don’t need to implement the constructor.
// Don’t: Avoid introducing any side-effects or subscriptions. Do not set state by using setState() in the constructor.
// constructor(props) {
//     super(props);
// }


//     This is invoked immediately after a component is mounted.
// Here is the right place for initialization that requires DOM nodes.
// Here is the right place if you need to load data from a remote endpoint (where to instantiate the network request).
// Here is the right place to set up any subscriptions (don’t forget to unsubscribe in componentWillUnmount())
// Here is where you interact with the browser.
// componentDidMount() {
// fetch('1JNqRhJaQEBTU2dGRgmoEN1eiMo1N8sGEk')
// fetch('1CD7BmoT44jxj4T13GHwTZY4mfkmMtTxuL')
//     fetchData("/", "1CD7BmoT44jxj4T13GHwTZY4mfkmMtTxuL").then((data) => this.fetchHandler(data))
// }

// fetchHandler(data) {
//     console.log('all', this.state.trans);

//     this.setState({ balance: data.final_balance });
//     this.setState({ trans: data.txs })
//     console.log('trans', this.state.trans);
// }

// search(v) {
//     fetchData("/", v).then(data => this.fetchHandler(data));
// }


//     This method is required.
// It examines this.props and this.state and returns one of the following: React elements, Strings and numbers, Portals, null or Booleans.
// This method should be pure and should NOT modify component state. It should return the same result each time it’s invoked and it does not directly interact with the browser.
// render() {

export default () =>
    // return 
    (

        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" color="inherit">
                        React BTC Address Explorer
                   </Typography>
                </Toolbar>
            </AppBar>
            {/* <Searchbar onSearch={v => this.search(v)} /> */}

            <div class="container">
                <ContSearchbar />
                <ContOverview />
                <ContTransactions />


            </div>



        </>

    )
    // }


// }