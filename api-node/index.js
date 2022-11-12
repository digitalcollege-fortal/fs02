const http = require('http'); //importando a lib http do node
const produto = require('./produto');
const cliente = require('./cliente');
const veiculo = require('./veiculo');

const servidor = 'localhost';
const porta = '8000';


function recepcao(req, res) {
    const rota = req.url;

    const rotas = {
        '/produto/adicionar': produto.add,
        '/produto/listar': produto.list,
        '/cliente/adicionar': cliente.add,
        '/cliente/listar': cliente.list,
    };

    if (undefined === rotas[rota]) {
        return res.end('Erro 404');
    }

    //indo buscar a função atribuida a url/rota e executando ela
    let resultado = rotas[rota];

    res.end(resultado());
}

http.createServer(recepcao).listen(porta, servidor);
