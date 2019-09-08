import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class RecordTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let rows = this.props.people.map(
            (row, i)=>{
                return (
                 <TableRow key={i}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.dob}</TableCell>
                </TableRow>
                )
            }
        )

        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                                {/* <TableRow>
                                    <TableCell>Insert Name</TableCell>
                                    <TableCell>Insert DOB</TableCell>
                                </TableRow> */}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;
