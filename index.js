const express = require('express');
const app = express()
const port = 5001

app.use(express.json());

app.get('/', (req, res) => res.send('Server is running on Instance'));

app.post('/', (req, res) => res.send('Hello World'));

app.post('/add', (req, res) => {
    const num1 = parseInt(req.body.num1);
    const num2 = parseInt(req.body.num2);
    const sum = num1 + num2;
    res.send({
        sum: sum
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

