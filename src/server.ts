import dotenv from "dotenv"
dotenv.config()
//parei em  #4 – Roteamento e Controle https://www.luiztools.com.br/post/como-criar-uma-webapi-com-node-js-express-e-typescript/

import app from "./app"

app.listen(process.env.PORT, () => {
    console.log(`Server is runing at https://localhost:${process.env.PORT}`)
})