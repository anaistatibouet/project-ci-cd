
require('dotenv').config()

const express = require('express');
const tool = require('./functions/sum');
const PORT = 8080;
const app = express();

app.disable("x-powered-by");

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
