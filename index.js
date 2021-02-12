
require('dotenv').config()

const express = require('express')
const app = express();
const PORT = 8080;
var tool = require('./functions/sum');

app.get('/', (req, res) => {
    res.send('Hello World!');
})
  
app.get('/sum', (req, res) => {
    let sumResult = tool.sum(1, 18);
    res.send(
        `The sum is: ${sumResult.toString()}`
    )
})
  
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
