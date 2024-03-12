const groups = require('./groups.json');

const express = require('express')

const app = express()

app.use(function(req,res,next){setTimeout(next,1000)});

app.get('/api', (request, response) => {
    response.json(groups)
})

app.listen(5000, () => {console.log('server started on port 5000')})