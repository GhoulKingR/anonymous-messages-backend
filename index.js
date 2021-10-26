const express = require('express');
const cors = require('cors');
const User = require('./User');

const app = express();
app.use(cors());
app.use(express.json());

const corsOption = {
    origin: 'http://localhost:3000',
    operationSuccessStatus: 200
};

const users = {};


app.get('/api/createUser/:user', cors(corsOption), (req, res) => {
    if (users[req.params.user]){} else {
        users[req.params.user] = new User();
    }
    res.send('sent');
});

app.get('/api/getmessages/:user', cors(corsOption), (req, res) => {
    if (users[req.params.user]){
        res.send(users[req.params.user].messages());
    } else {
        console.log('This user does not exist');
        res.send('null');
    }
});

app.post('/api/sendmessage/:user', cors(corsOption), (req, res) => {
    if (users[req.params.user]) {
        users[req.params.user].saveMessage([Date(), req.body.message]);
        res.send('message sent')
    } else {
        res.send('message not sent')
    }
});

app.listen(3900, () => console.log('listening on port', 3900));