const express = require("express")
const kodersUsecase = require("../usecases/koders.usecase")

const router = express.Router()

//GET /koders
router.get("/", async (request, response)=>{
    try{
    const koders = await kodersUsecase.getAll()
    
    response.json({
        success: true,
        data:{koders}
    })
    } catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

//POST /koders
router.post("/", async(request, response)=>{
    try{
const koderCreated= await kodersUsecase.create(request.body)

        response.json({
            success: true,
            data:{koder:koderCreated}
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

// GET /koders/:id

router.get("/:id", async(request, response)=>{
    try{
     //deconstruido =  const {id} = request.params 
     const id = request.params.id
     const koder = await kodersUsecase.getById(id)

     response.json({
        success: true,
        data: {koder}
     })

    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

//DELETE /koders/:id
router.delete("/:id", async(request, response)=>{
    try{
        const {id} = request.params
        const koderDelete = await kodersUsecase.deleteById(id)

        response.json({
            success:true,
            data: {koder:koderDelete}
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

//PATCH /koders/:id

router.patch("/:id", async(request, response)=>{
    try{
        const {id} = request.params
        const koderUpdated = await kodersUsecase.updateById(id, request.body)

        response.json({
            success: true,
            data: {koder: koderUpdated}
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router