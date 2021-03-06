require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs');

    // parse applicaction/
app.use(bodyParser.urlencoded({ extended: false }))
    // parse aplicationjson
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.get('/usuario', (req, res) => {
    res.json('get Usuario')
})
app.get('/', (req, res) => {

    let rawdata = fs.readFileSync('public/test.json');
    let test = JSON.parse(rawdata);
    res.json(test)
})
app.post('/usuario', (req, res) => {
    let body = req.body
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        })
    } else {

        res.json({
            persona: body
        })
    }
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario')
})

app.listen(process.env.PORT, () => {
    console.log("escuchando el puerto ", 3000);
})
