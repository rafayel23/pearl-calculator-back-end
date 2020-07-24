const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(cors());

app.get('/', (_, res) => {
    res.send('PEARL CALCULATOR SERVER');
})

app.post('/calculate', (req, res) => {
    const {
        input_1,
        input_2,
        input_3,
        input_4,
        input_5,
        input_6,
        input_7,
        input_8,
        input_9,
        input_10,
        input_11,
    } = req.body;

    res.send({
        displayValues: [input_1, input_2, input_3],
        graphValues: [
            input_4 + input_5,
            input_6 + input_7,
            input_8 + input_9,
            input_10 + input_11,
        ],
    })
})

app.listen(process.env.PORT || 3000)