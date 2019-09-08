

const init = {
    lastUpdatedTime: new Date().toLocaleString(),
    coldefs: [
        {
            headerName: "Action", field: "action", sortable: true, filter: true, cellClassRules: {
                'rag-green': "x == 'buy'",
                'rag-red': "x == 'sell'"
            }
        },
        { headerName: "Symbol", field: "symbol", sortable: true, filter: true },
        { headerName: "Qty", field: "qty", sortable: true, filter: true },
        { headerName: "Order Type", field: "orderType", sortable: true, filter: true },
        { headerName: "TIF", field: "tif", sortable: true, filter: true },
        { headerName: "Price", field: "price", sortable: true, filter: true },
        { headerName: "Stop Price", field: "stopPrice", sortable: true, filter: true },
        { headerName: "Comment", field: "comment", sortable: true, filter: true, tooltipField: 'comment' }
    ],
    defaultcoldef: {
        // set every column width
        width: 160,
        // make every column editable
        editable: true,
        // make every column use 'text' filter by default
        filter: 'agTextColumnFilter'
    },
    list: [
        { 'action': 'buy', 'symbol': 'MSFT', 'qty': 100, 'orderType': 'market', 'tif': 'IOC', 'price': 99.25, 'stopPrice': 100.25, 'comment': 'for James and this is a comment...' },
        { 'action': 'buy', 'symbol': 'MSFT', 'qty': 50, 'orderType': 'market', 'tif': 'GTC', 'price': 99.25, 'stopPrice': 100.25, 'comment': 'for a' },
        { 'action': 'sell', 'symbol': 'AAPL', 'qty': 100, 'orderType': 'limit', 'tif': 'FOK', 'price': 500.18, 'stopPrice': 480.25, 'comment': 'for b' }
    ]
}

export default (state = init, action) => {

    switch (action.type) {
        case 'GET_ORDER':
            return []
        case 'ADD_ORDER':
            let lastUpdatedTime = new Date().toLocaleString();
            let list = [...state.list, action.data]
            console.log(lastUpdatedTime, list);

            return { lastUpdatedTime, list }
        default:
            return state

    }



}