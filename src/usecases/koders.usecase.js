const creatError = require("http-errors")
const Koders = require(`../models/koders.model`)
const encrypt = require("../lib/encrypt")

async function create(koderData){
    const koderFound = await Koders.findOne({email: koderData.email})
    
    if(koderFound){
      //  throw new Error("Email already in use")
        throw creatError(409, "Email already in use")
    }
    
    const password = await encrypt.encrypt(koderData.password)

    koderData.password = password

    const newKoder = await Koders.create(koderData)
    return newKoder
}

async function getAll(){
    const allkoders = await Koders.find().populate("generation")
    return allkoders
}

async function getById(id){
    const koder = await Koders.findById(id).populate("generation")
    return koder
}

async function deleteById(id){
    const koderDeleted = await Koders.findByIdAndDelete(id)
    return koderDeleted
}

async function updateById(id, newKoderData){
    const updatedKoder = await Koders.findByIdAndUpdate(id, newKoderData, {
        new:true,
    })
    return updatedKoder
}


module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById
}