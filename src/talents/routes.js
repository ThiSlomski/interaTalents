const express = require("express");

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    let data = [
        {
            nome:"Anna Julia",
            idade: 7,
            cidade: "Ibiúna"
        },
        {
            nome:"Luana Aparecida",
            idade: 28,
            cidade: "Ibiúna"
        }
    ];

    response = {
        message: "Você está recebendo uma lista de talentos!",
        data
    };
    
    res.status("200").json(response);
});

routes.post('/', (req, res) => {
    response = {
        message: "Muito obrigado por trazer seu talento para cá!"
    };
    res.status("200").json(response);
});

routes.put('/{id}', (req, res) => {
    response = {
        message: "Muito obrigado por atualizar seu perfil!"
    };
    res.status("200").json(response);
});

routes.delete('/{id}', (req, res) => {
    response = {
        message: "Sentiremos falta do seu perfil aqui com a gente."
    };
    res.status("200").json(response);
});

module.exports= {
    routes,
};