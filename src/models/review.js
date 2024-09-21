const mongoose = require("mongoose");

const Review = mongoose.model("Review", {
    message: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = Review