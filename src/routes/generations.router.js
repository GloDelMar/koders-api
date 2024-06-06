const express = require('express');
const genUsecase = require('../usecases/generations.usecase');
const auth = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', async (request, response) => {
    try {
        const generations = await genUsecase.getAllGenerations();

        response.json({
            success: true,
            message: "All generations",
            data: {generations}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const generation = await genUsecase.getGenerationById(id);

        response.json({
            success: true,
            message: "Generation found",
            data: {generation}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

router.post('/', async (request, response) => {
    try {
        const generation = request.body
        const generationCreated = await genUsecase.createGeneration(generation);

        response.json({
            success: true,
            message: "Generation created",
            data: {generation: generationCreated}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const generationDeleted = await genUsecase.deleteGenerationById(id);

        response.json({
            success: true,
            message: "Generation Deleted",
            data: {generation: generationDeleted}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

router.patch('/:id', async (request, response) => {
    try {
        const {id} = request.params
        const generation = request.body
        const generationUpdated = await genUsecase.updateGenerationById(id, generation);

        response.json({
            success: true,
            message: "Generation updated",
            data: {generation: generationUpdated}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message
        });
    }
});

module.exports=router;