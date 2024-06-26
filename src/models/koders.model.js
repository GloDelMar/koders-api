const mongoose = require("mongoose")

const modelName = `koders`

const schema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    lastName: {
      type: String,
      required: false,
      maxLength: 100,
    },
    email: {
      type: String,
      required: true,
      match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    birthDate: {
      type: Date,
      required: false,
    },
   generation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "generations"
    },
    createAt:{
        type: Date,
        default: Date.now
    }
  })

module.exports = mongoose.model(modelName, schema)
