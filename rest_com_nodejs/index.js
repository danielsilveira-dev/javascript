const customExpress = require('./config/customExpress') // Importando o customExpress criado
const app = customExpress() // Executando o modulo o app do customExpress

app.listen(3000, () => console.log('servidor rodando na porta 3000'))