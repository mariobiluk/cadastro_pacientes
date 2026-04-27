const { Sequelize } = require('sequelize')

const db = new Sequelize('bd_03','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

// db.authenticate()
// .then(()=>{
//     console.log('Conexão com o Banco de dados realizada com sucesso!')
// })
// .catch((err)=>{
//     console.error('Não foi possível conectar com o banco de dados!',err)
// })

module.exports = db