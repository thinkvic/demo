import React from 'react';
import { useSelector } from 'react-redux'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default () => {
  const ostate = useSelector(state => state.orders);
  
  const rowData = ostate.list;
  const columnDefs = ostate.coldefs;
  const defaultColDef = ostate.defaultcoldef;
  const options = { columnDefs, defaultColDef }

  return (
    <div style={{ height: '500px', width: '100%' }} className="ag-theme-balham">
      <AgGridReact
        rowData={rowData}
        gridOptions={options}>
      </AgGridReact>
    </div>
  )
}
