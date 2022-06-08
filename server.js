const express = require('express')
const app =  express()
port = 3000

app.set('views', 'ejs')

app.get('/', (req,res) => {
    res.send('root page!!')
})

app.get('/greetings/', (req,res) => {
    res.send('Hello , Stranger.')
})

app.get('/greetings/:name', (req,res) => {
    req.params.name
    res.send(`Hello ${req.params.name}, It is so nice to see you!!!`)
})


app.listen(port, () => {
    console.log(`Running on port ${port}....!!!`);
})