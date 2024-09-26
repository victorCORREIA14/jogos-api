import express from 'express'
import "dotenv/config"
import controller from "./controller/userController.js"
import cors from "cors"

const servidor = express()
servidor.use(express.json())
servidor.use(controller)
servidor.use(cors())
servidor.use('/storage/img' , express.static('storage/img'))
servidor.listen(process.env.PORT,() => console.log('API SUBIDA'))