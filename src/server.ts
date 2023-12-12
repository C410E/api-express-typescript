import dotenv from "dotenv"
dotenv.config()
//parei em:  Agora que temos o controller finalizado, é hora de criar o customerRouter.ts para levar as requisições até as funções apropriadas, o que chamamos de roteamento. https://www.luiztools.com.br/post/como-criar-uma-webapi-com-node-js-express-e-typescript/

import app from "./app"

app.listen(process.env.PORT, () => {
    console.log(`Server is runing at https://localhost:${process.env.PORT}`)
})