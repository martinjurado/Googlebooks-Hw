const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    image: { type: String, required: true},
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true},
    link: { type: String, required: true}
});

const Gbook = mongoose.model("Book", bookSchema);
module.exports = Gbook;