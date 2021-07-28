// Configurações do express
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser') // importando body-parser

module.exports = () => {
	const app = express()

	app.use(bodyParser.urlencoded({extended: true}))
	app.use(bodyParser.json())

	consign() // executando o consign
		.include('controllers') // Informando ao consign de onde pegar as rotas
		.into(app) // Informando ao consign onde colocar as rotas

	return app // retornando o próprio app configurado
}