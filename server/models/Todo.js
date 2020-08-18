const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    created_at: {type: Date, required: true, default: Date.now}
})

module.exports = mongoose.model("Todo", schema)