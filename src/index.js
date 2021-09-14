const express = require('express');
const app = express();

const port = 3000;

App.get('/', (req, res) => {
    res.send('olá mundo')
})

App.get('/soma/:a/:b', (req, res) => {
    const { a, b } = req.params;

    if(isNaN(a)){
        return res.status(400).send('Número inválido')
    }else if(isNaN(b)){
        return res.status(400).send('Número inválido')
    }

    let result = Number(a) + Number(b);

    res.json({
        result
    })
})

App.listen(port, () => {
    console.log('server running on port', port)
})