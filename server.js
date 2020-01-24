const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || 3000 
//SERVE STATIC FILES
app.use(express.static(__dirname + '/dist/Noshitha'));
//SERVE index.html from home(root) route
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/Noshitha/index.html')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))