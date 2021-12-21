
const express = require('express')
fs = require('fs');

const app = express()
const port = 8080;

app.get('/', (req, res) => {
    fs.writeFile('./logs/logFile '+(new Date().toString())+".txt", 'Some other lyric', 'ascii', ()=>{});      
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

