const express = require('express')
const app = express()

const FILES_ROOT = __dirname;

app.get(
   '/',
   (req, res) => {
    res.sendFile( FILES_ROOT + '/html/index.html')
});


app.get(
   '/second-page/',
   (req, res) => {
    res.sendFile( FILES_ROOT + '/html/index-2.html')
});


app.use(express.static(FILES_ROOT + '/static/'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
