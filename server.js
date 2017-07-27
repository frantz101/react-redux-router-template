const express = require('express')
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/hello', function(req, res) {
    res.sendFile(path.join(process.cwd() + '/build//index.html'))
})

app.listen(8081, function() {
    console.log('Example app listening on port 3000!')
})
