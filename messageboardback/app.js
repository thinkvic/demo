const exp = require('express')
const app = exp();
var cors = require('cors')

app.use(cors())


let data = [
    {
        'id': 1, 'name': 'Channel #1', 'messages': [
            { 'id': 1, 'content': "test 11", 'user': 'john' },
            { 'id': 2, 'content': "test 12", 'user': 'mark' },
            { 'id': 3, 'content': "test 13", 'user': 'kate' }
        ]
    },
    {
        'id': 2, 'name': 'Channel #2', 'messages': [
            { 'id': 1, 'content': "aaa", 'user': 'john' },
            { 'id': 2, 'content': "bbb", 'user': 'mark' },
            { 'id': 3, 'content': "ccc", 'user': 'kate' }
        ]
    },
    {
        'id': 3, 'name': 'Channel #3', 'messages': [
            { 'id': 1, 'content': "message board", 'user': 'john' },
            { 'id': 2, 'content': "message", 'user': 'mark' },
            { 'id': 3, 'content': "board", 'user': 'kate' }
        ]
    }
];


app.use("/", exp.static(__dirname + "/ui"));


function getChannels(req, res) {
    let channels = data.map(
        ({ messages, ...obj }) => {
            return { ...obj, messages:[]}
        }
    )

    let str = JSON.stringify(channels);
    res.send(str)
}


app.get('/api/channels/', (req, res) => {
    getChannels(req, res);
})


function getMessages(req, res) {
    let cid = req.params.cid;

    let i = data.findIndex(
        (channel) => channel.id == cid
    )

    let str = JSON.stringify(data[i].messages);
    res.send(str);
}


app.get('/api/messages/:cid', (req, res) => {
    getMessages(req, res);
})


// If the data was sent as JSON, using Content-Type: application/json, 
// you will use the express.json() middleware
app.use(exp.json())

function putMessage(req, res) {

    let cid = req.params.cid;
    let msg = req.body;
    console.log('body', msg);

    let i = data.findIndex(
        (channel) => channel.id == cid
    )

    let marr = data[i].messages;
    msg = { ...msg, id: marr.length + 1 }
    marr.push(msg)
    // let str = JSON.stringify(marr);
    res.send(JSON.stringify(msg));
}
app.put('/api/:cid', (req, res) => {
    putMessage(req, res);
})
app.listen(1000, () => console.log('running on port 1000'))