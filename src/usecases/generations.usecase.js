const createError = require("http-errors")
const Generation = require('../models/generations.model');

async function createGeneration (generationData) {
    const existingGeneration = await Generation.findOne({
        number: generationData.number,
        program: generationData.program
    })
    if (existingGeneration){
        throw createError(409, "Generation already exists")
    }

    return Generation.create(generationData)
};

function getAllGenerations () {
    return Generation.find()
};

function getGenerationById (id) {
    return Generation.findById(id)
};

async function deleteGenerationById (id) {
    return Generation.findByIdAndDelete(id)
};

function updateGenerationById (id, generationData) {
    return Generation.findByIdAndUpdate(id, generationData, {new: true})
};

module.exports = {
    createGeneration,
    getAllGenerations,
    getGenerationById,
    deleteGenerationById,
    updateGenerationById
};