const express = require('express')
const passData = require('./models/passIt')
const app = express()
port = 5000


app.get('/', (req,res) => {
    res.json(passData)
})
app.get('/:id', (req,res) => {
     req.params.id
    res.json(req.params.id + ' ' + passData.slice(3))
   
})

app.listen(port, () => {
    console.log(`running on port ${port}....`);
})