//importa o módulo express para criar uma aplicação 
const express = require('express');

//a função require é semelhante ao import do react, ela serve
//para importar módulos para o projeto

//Inicializa aplicação express
const app = express();
const cors = require("cors");


//Definindo porta do servidor
const port = 3000;
app.use(cors());


//Import Routes
const usuariosRouters = require('./routers/usuariosRouters')
const clientesRouters = require('./routers/clientesRouters')
const receitasRouters = require('./routers/receitasRouters')
const avaliacoesRouters = require('./routers/avaliacoesRouters')
const ingredientesRouters = require('./routers/ingredientesRouters')
const medidasRouters = require('./routers/medidasRouters')
const quantidadesRouters = require('./routers/quantidadesRouters')

//Using Routes
app.use(express.json());
app.use('/usuarios', usuariosRouters);
app.use('/clientes', clientesRouters);
app.use('/receitas', receitasRouters);
app.use('/avaliacoes', avaliacoesRouters);
app.use('/ingredientes', ingredientesRouters);
app.use('/medidas', medidasRouters);
app.use('/quantidades', quantidadesRouters);

//configuração de uma rota para raiz ('/') da aplicação
app.get('/', (req, res) => {

    //Resposta em formato de objeto JSON
    res.json({message: 'Rodou:'});
});


//inicializa o servidor na porta definida anteriormente
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});