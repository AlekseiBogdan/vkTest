const groups = require('./groups.json');

const express = require('express')

const app = express()

app.get('/api', (request, response) => {
    response.json(groups)
})

app.listen(5000, () => {console.log('server started on port 5000')})