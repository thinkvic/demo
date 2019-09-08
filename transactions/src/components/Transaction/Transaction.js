import React from 'react'
import './Transaction.css'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

const Transaction = ({ tran, addr }) => {

    console.log('****************tran start***************');
    let blockheight = tran.block_height;
    let blocksize = tran.size;

    // let from = [];
    let fromdom = [];
    for (const [i, input] of tran.inputs.entries()) {
        let prevoutaddr = input.prev_out.addr;
        console.log('prevoutaddr', prevoutaddr);
        if (prevoutaddr == addr) {
            // from = [prevoutaddr];
            fromdom = [(<div key={i}>{prevoutaddr}</div>)]
            break;
        }
        // from.push(prevoutaddr);
        fromdom.push(<div key={i}>{prevoutaddr}</div>)
    }

    // let to = [];
    let todom = [];
    tran.out.forEach(
        (output, j) => {
            let outputaddr = output.addr;
            console.log('addr o', outputaddr);
            // to.push(outputaddr);
            todom.push(<div key={j}>{outputaddr}</div>)
        }
    )

    return (
        <Card key={blockheight} class="tran">
            <br />
            <div className="tranhead" >
                Block Height: {blockheight} &nbsp; Block Size (byte): {blocksize}
            </div>
            
            <div className="tranbody">
    
                    <Card>
                        <CardContent>{fromdom}</CardContent>
                    </Card>

                    <Card>
                        <CardContent>{todom}</CardContent>
                    </Card>
      
            </div>

        </Card>
        
    )

}

export default Transaction