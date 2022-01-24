"use strict"

const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const todo = new Schema({
    todo: {type: String,required: true},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date}
});

const Todo = mongoose.model('Todo', todo)

module.exports = Todo;
