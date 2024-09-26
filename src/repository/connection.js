import mysql2 from 'mysql2/promise'

const conexao = await mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PWD

})

console.log('A conexao foi um sucesso')

export default conexao;

