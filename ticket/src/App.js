import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import Ticket from './components/Ticket'
import Orders from './components/Orders'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import './App.css';
import { Collapse } from 'antd';
const { Panel } = Collapse;

// https://github.com/zesik/react-splitter-layout



function App() {

  const ostate = useSelector(state => state.orders);
  const lastUpdatedTime = ostate.lastUpdatedTime;

  const genExtra = () => (
    <span>{lastUpdatedTime}</span>
  );

  const customPanelStyle = {
    background: '#f7f7f7',
    fontWeight: 'bold',
    fontSize: '20px',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };

  return (
    <SplitterLayout vertical={true} secondaryInitialSize={250} className="App">
      
      <Collapse activeKey={['1']} >
        <Panel showArrow={false} header="EXD TRADER Order Entry" key="1" style={customPanelStyle}>
          <div className="wrapper">      <Ticket></Ticket>      </div>
        </Panel>
      </Collapse>
      <Collapse activeKey={['1']} >
        <Panel showArrow={false} header="Order Blotter" key="1" style={customPanelStyle} extra={genExtra()}>
          <div className="wrapper">      <Orders></Orders>     </div>
        </Panel>
      </Collapse>

    </SplitterLayout>
  );
}

export default App;
