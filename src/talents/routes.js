const express = require("express");
const axios = require("axios");

const routes = express.Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    let data = [
        {
            nome: "Anna Julia",
            idade: 18,
            cidade: "Ibiúna"
        },
        {
            nome: "Luana Aparecida",
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

routes.get('/{id}', (req, res) => {
    let data = null;

    if (req.params.id === "1") {
        data = {
            id: 1,
            nome: "Anna Julia",
            idade: 7,
            cidade: "Ibiúna"
        }
        response = {
            message: "Oportunidade encontrada com sucesso",
            data
        };
        res.status("200").json(response);
    }

    response = {
        message: "Oportunidade não encontrada.",
        data
    };

    res.status("404").json(response);
});

routes.post('/', (req, res) => {
    let body = req.body; // aqui pegamos os campos que virão na requisição

    // persisto no BD

    FoundMatch(); // starto de forma assincrona o serviço de match

    response = {
        message: "Muito obrigado por trazer seu talento para cá!"
    };
    res.status("201").json(response);
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

module.exports = {
    routes,
};

async function FoundMatch() {
    axios.post('localhost:3002/matchings', null)
        .then(function (response) {
            return;
        })
        .catch(function (error) {
            console.log(error);
        });
}