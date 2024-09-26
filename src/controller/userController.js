import { Router } from "express";
import { criar, img } from "../repository/userRepository.js"
import multer from "multer";


const servidor = Router()
const upload = multer({ dest: 'storage/img' })


servidor.post('/jogos', async (req, resp) => {
    try {
        let jogos = req.body

        if (!jogos.titulo)
            throw new Error('O campo é obrigatorio')
        let respostaApi = await criar(jogos)

        resp.send(respostaApi)

    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})


servidor.put('/img/:id', upload.single('img'), async (req, resp) => {
    try {
        const { id } = req.params
        const imagem = req.file ? req.file.path : ''

        console.log(imagem)

        const respostaApi = await img(id, imagem)

        resp.send("Imagem cadrastada")

    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default servidor;