const creatError = require("http-errors")
const koderUsecase= require("../usecases/koders.usecase")
const jwt = require("../lib/jwt")

async function auth(request, response, next){
    try{
        const token = request.headers.authorization

        if(!token){
            throw creatError(401, "JWT is required")
        }

        const payload = jwt.verify(token)
        payload.id

        const user = await koderUsecase.getById(payload.id)

        request.user = user

        next()
}catch(error){
    response.status(401)
    response.json({
        success: false,
        error: error.message
    })

}}

module.exports = auth