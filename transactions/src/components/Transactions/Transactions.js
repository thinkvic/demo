import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Transaction from '../Transaction/Transaction'
import './Transactions.css'

const Transactions = ({ trans, addr }) => {


    console.log('akdsjfkadsf', addr);



    // Seeing an Objects are not valid as a React child error might mean that a few different things are going wrong. For example, it could be because the items being rendered in the JSX Element are objects instead of primitives (so make sure you’re not passing an object where a primitive is expected).
    // Therefore, a standard P2PKH/P2SH transaction spending a ONE UTXO redeemable with a basic ScriptSig paying to only ONE output is 189bytes. Otherwise, we can also further generalise this to:

    // Disadvantage of Small Block
    // low tps, clogged, high fees.
    // highfee neutral:
    // Positive: It will no longer be cheap to spam transactions such as Satoshi Dice bets
    // Positive: Fees will not be zero. This is eventually a necessity in order to incentivize miners and secure the mining ecosystem


    // Disadvantage of Big Block
    // Larger blocks make full nodes more expensive to operate. 
    // Bitcoin is only useful if it is decentralized because centralization requires trust. Bitcoins value proposition is trustlessness.
    // The larger the hash-rate a single miner controls, the more centralized Bitcoin becomes and the more trust using Bitcoin requires.

    // TRANSDOM including fromdom and todom 
    const transdom = trans.map(
        (tran) => {

            return (
                <>
                {/* no css class on child tag directly */}
                    <Transaction  tran={tran} addr={addr}></Transaction>
                    <br />
                </>
            )
        }
    )

    console.log('transdom', transdom);

    return <div >{transdom}</div>


}

// Transactions.propTypes = {
//     trans: PropTypes.arrayOf(PropTypes.shape({
//         ver: PropTypes.number.isRequired,
//         block_height: PropTypes.string.isRequired   
//     }).isRequired).isRequired
//   }

export default Transactions

// https://www.npmjs.com/package/generate-react-component


        // (tran) => {
        //     console.log('****************tran start***************');
        //     let blockheight = tran.block_height;
        //     let blocksize = tran.size;

        //     // let from = [];
        //     let fromdom = [];
        //     for (const [i, input] of tran.inputs.entries()) {
        //         let prevoutaddr = input.prev_out.addr;
        //         console.log('prevoutaddr', prevoutaddr);
        //         if (prevoutaddr == addr) {
        //             // from = [prevoutaddr];
        //             fromdom = [(<div key={i}>{prevoutaddr}</div>)]
        //             break;
        //         }
        //         // from.push(prevoutaddr);
        //         fromdom.push(<div key={i}>{prevoutaddr}</div>)
        //     }

        //     // let to = [];
        //     let todom = [];
        //     tran.out.forEach(
        //         (output, j) => {
        //             let outputaddr = output.addr;
        //             console.log('addr o', outputaddr);
        //             // to.push(outputaddr);
        //             todom.push(<div key={j}>{outputaddr}</div>)
        //         }
        //     )

        //     // OR

        //     // let todom = tran.out.map(
        //     //     (output, j) => {
        //     //         let outputaddr = output.addr;
        //     //         console.log('addr o', outputaddr);
        //     //         // to.push(outputaddr);
        //     //         return (<div key={j}>{outputaddr}</div>)
        //     //     }
        //     // )

        //     console.log('*********tran end**********');


        //     return (
        //         <div key={blockheight}>
        //             <br />
        //             <div className="trans" >
        //                 Block Height: {blockheight} &nbsp; Block Size (byte): {blocksize}
        //             </div>
        //             <div className="transbody">
        //                 <div>
        //                     {fromdom}
        //                 </div>
        //                 &nbsp;
        //                 &nbsp;
        //                 &nbsp;
        //                 &nbsp;
        //                 <div>
        //                     {todom}
        //                 </div>
        //             </div>

        //         </div>
        //     )
        // }