const index = require('./index')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 //porta padrão

//configurando o body parser para interpretar requests mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

// GET /somar
router.get('/somar/:valor1/:valor2', (req, res) => {
    const valor1 = parseInt(req.params.valor1)
    const valor2 = parseInt(req.params.valor2)
    res.json({result: index.somar(valor1,valor2)})
})

// GET /subtrair
router.get('/subtrair/:valor1/:valor2', (req, res) => {
    const valor1 = parseInt(req.params.valor1)
    const valor2 = parseInt(req.params.valor2)
    res.json({result: index.subtrair(valor1,valor2)})
})

app.use('/', router)

if (require.main === module){
    //inicia o servidor
    app.listen(port)
    console.log('API funcionando!')
}

module.exports = app