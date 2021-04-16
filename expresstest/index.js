const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Express')
})

const server = app.listen(1234, () => console.log('Serving...'))