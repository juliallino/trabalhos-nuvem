const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>TRABALHO 2 NUVEM!</h1>");
})

//rota da equipe
app.get("/equipe", function(req,res){
    res.send("<h1>JULIA LINO ARAÚJO e ALAN REGIS!</h1>");
})

//rota com parametro opcional
app.get("/aluno/:nome?", function(req,res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>Aluno: " + nome);
    }else {
        res.send("<h1>Aluno não encontrado<h1>");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})