const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//View engine e css
app.set('view engine', 'ejs');
app.use(express.static('public'));
//body parses
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//rotas
app.listen(3333);

app.get('/', (req, res)=>{
    res.render('index');
    
});

app.get('/perguntar', (req, res)=>{
    res.render('perguntar');
});

app.post('/salvarpergunta', (req, res)=>{
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;    
    res.send(`tditulo: ${titulo}, descricao: ${descricao}`);
})
