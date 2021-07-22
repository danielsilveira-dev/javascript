// Configurações do express
const express = require('express') // Importando express
const consign = require('consign') // Importando o consign

// Exportando o app configurado
module.exports = () => {
   const app = express()

   consign() // Executando o consign
      .include('controllers') // Informando a pasta
      .into(app) // para o consign colocar dentro do app

   return app
   //Retornando o app configurado
}
