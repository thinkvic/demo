import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addorder } from '../actions/actions'
import { Form, Input, Button, Select, InputNumber, AutoComplete, Spin, Modal } from 'antd';
import '../App.css';

const { Option } = Select;
const { TextArea } = Input;

// class App extends React.Component{}
// function declaration (function statement) 
function App(props) {
  // Once a variable has been declared using const it cannot be re-declared or re-assigned.
  const initInputs = {
    action: null,
    symbol: null,
    qty: null,
    price: null,
    orderType: null,
    tif: null,
    stopPrice: null,
    comment: null
  }
  const initSymbols = ['AAPL', 'MSFT', 'GOOGL', 'VZ', 'MMM', 'NFLX', 'FB', 'TWTR', 'AMZN', 'EBAY']

  const { getFieldDecorator } = props.form;
  // const tstate = useSelector(state => state.ticket);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState(initInputs);
  const [symbols, setSymbols] = useState(initSymbols);
  const [loading, setLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState(1);
  const [validated, setValidated] = useState(false);

  // called each time setValidated is called
  useEffect(
    () => checkValid()
  )

  const checkValid = () => {
    let validated = false
    if (inputs.action && inputs.symbol && inputs.qty && inputs.orderType && inputs.tif) {
      if (inputs.orderType === 'limit') {
        if (inputs.price > 0 && inputs.stopPrice > 0) {
          validated = true
        } else {
          validated = false
        }
      } else { //market
        validated = true
      }
    } else {
      validated = false
    }
    console.log('current check', inputs, validated);
    setValidated(validated)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // let finalinputs = props.form.getFieldsValue();
    let finalinputs = inputs;
    console.log(finalinputs);
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setOrderNumber((prev) => (prev + 1));
          if (orderNumber % 10) {
            dispatch(addorder(finalinputs));
          } else {
            const modal = Modal.info();
            modal.update({
              title: 'Failure',
              content: 'Order time has elapsed',
            });
          };
          setInputs(initInputs);  // to clear the inputs state so that action color emptied.
        }, 2000);
      }
    });
  }


  const twoDecimal = (v) => {
    // v is string
    if (v) {
      return Number.parseFloat(v).toFixed(2)
    } else {
      return 0
    }
  }
  // BE CAREFUL, the argument is not e.targe.value but value!!!
  const handleInputChange1 = value => {
    console.log(value);
    setInputs((prev) => ({ ...prev, 'action': value }));
    // props.form.setFieldsValue({
    //   action: value,
    // });
  };
  const getColor = (action) => {
    let actionColor;
    if (action === 'buy') {
      actionColor = 'green'
    } else if (action === 'sell') {
      actionColor = 'red'
    } else {
      actionColor = ''
    }
    return actionColor
  }


  const handleInputChange2 = value => {
    setInputs((prev) => ({ ...prev, 'symbol': value }));

  };
  const searchSymbol = searchText => {
    // this.setState({
    //   dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    // });
    let filtered = initSymbols.filter(
      (symbol) => symbol.search(searchText.toUpperCase()) > -1
    )
    // console.log(filtered)
    setSymbols(filtered.length > 0 ? filtered : ["NOT FOUND"])

  };


  const handleGenericInputChange = (v, type) => {
    setInputs((prev) => ({ ...prev, [type]: v }));
    //async, and batched
    // does not immediately mutate state but creates a pending state transition
  }

  // render() {
  return (
    <div>{
      loading ? <Spin size="large" /> : <Form onSubmit={handleSubmit} className="grid">


        <Form.Item label="Action" className="a">
          {getFieldDecorator('action', {
            rules: [{ required: true, message: 'Please select your action!' }],
          })(
            <Select className={getColor(inputs.action)}
              style={{ width: 200 }}
              placeholder="Select an option"
              name='action'
              onChange={handleInputChange1}
            >
              <Option value="buy">Buy</Option>
              <Option value="sell">Sell</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Symbol" className="b">
          {getFieldDecorator('symbol', {
            rules: [{ required: true, message: 'Please input symbol!' }],
          })(<AutoComplete
            dataSource={symbols}
            style={{ width: 200 }}
            onSearch={searchSymbol}
            onChange={handleInputChange2}
          />)}
        </Form.Item>


        {/* onChange={(v) => handleGenericInputChange(v, 'qty')} */}
        <Form.Item label="Qty" className="c">
          {getFieldDecorator('qty', {
            rules: [{ required: true, message: 'Please input qty!' }],
          })(<InputNumber min={0} max={999} onChange={(v) => handleGenericInputChange(v, 'qty')} />)}
        </Form.Item>

        <Form.Item label="Price" className="d">
          {getFieldDecorator('price', {
            rules: [{ required: false, message: 'Please input your price!' }],
          })(<InputNumber min={0} max={9999} step={0.01} onChange={(v) => {
            handleGenericInputChange(twoDecimal(v), 'price')
          }
          } />)}
        </Form.Item>


        {/* 2ND ROW */}

        <Form.Item label="Order Type" className="e">
          {getFieldDecorator('orderType', {
            rules: [{ required: true, message: 'Please select order type!' }],
          })(
            <Select onChange={(v) => handleGenericInputChange(v, 'orderType')}
              style={{ width: 200 }}
              placeholder="Select an option"
            >
              <Option value="market">Market</Option>
              <Option value="limit">Limit</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="TIF" className="f">
          {getFieldDecorator('tif', {
            rules: [{ required: true, message: 'Please select TIF!' }],
          })(
            <Select style={{ width: 200 }}
              placeholder="Select an option"
              onChange={(v) => handleGenericInputChange(v, 'tif')}
            >
              <Option value="GTC">GTC</Option>
              <Option value="DAY">DAY</Option>
              <Option value="FOK">FOK</Option>
              <Option value="IOC">IOC</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="Stop Price" className="g">
          {getFieldDecorator('stopPrice', {
            rules: [{ required: false, message: 'Please input stop price!' }],
          })(<InputNumber min={0} max={9999} step={.01} onChange={(v) => handleGenericInputChange(twoDecimal(v), 'stopPrice')} />)}
        </Form.Item>


        {/* 3RD ROW */}

        <Form.Item label="Comment" className="h">
          {getFieldDecorator('comment', {
            rules: [{ required: false, message: 'Please input comment!' }],
          })(<TextArea rows={5} placeholder="Comment" onChange={(e) => handleGenericInputChange(e.target.value, 'comment')}/>)}
        </Form.Item>

        <Form.Item className="i">
          <Button type="primary" htmlType="submit" disabled={!validated}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    }</div>
  );
}
// }

const WrappedApp = Form.create({ name: 'ticket' })(App);

export default WrappedApp


//  value={inputs.symbol}, the decorator has an initValues prop
//  Warning: `getFieldDecorator` will override `value`, so please don't set `value` directly and use `setFieldsValue` to set it.
// what you do is just handleChange (set whatever state var to the current v or e.target.v)

//   const add = () => {
//     // alert(`Created! ${inputs.action} ${inputs.symbol} ${inputs.price}`);
//     dispatch(addorder(inputs));
//     clear(initInput);
//   }
//   const { inputs, handleInputChange, clear, handleSubmit } = useForm(initInput, add);