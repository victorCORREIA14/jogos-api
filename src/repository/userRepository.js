import conexao from "./connection.js";

export const criar = async (jogos) => {

    const comando = `
insert into jogos(titulo,genero,ano_lancamento,plataforma)
values(?,?,?,?)
`

    const inserir = await conexao.query(comando, [jogos.titulo, jogos.genero, jogos.ano_lancamento, jogos.plataforma])
    jogos.id = inserir[0].insertId
    return jogos
    
}

 
export const img = async(id,img) =>{

    const comando = `
    update jogos
    set capa = ?
    where id =?

    `
    
const [linhas] = await conexao.query(comando,[img,id])
return linhas.affectedRows
    


}