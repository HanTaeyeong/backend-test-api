
const express = require('express')
fs = require('fs');

const app = express()
const port = 80;

app.get('/', (req, res) => {
    console.log("got request!");
    fs.writeFile('./logs/logFile '+(new Date().toISOString())+".txt", 'Some other lyric', 'ascii', ()=>{});      

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

