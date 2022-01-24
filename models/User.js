"use strict"

const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const   user = new Schema({
    name: {type: String,required: true},
    email: {type: String,required: true, unique: true},
    todos: [{type: Schema.Types.ObjectId, ref: 'Todo'}],
    createdAt: {type: Date, default: Date.now}
});

const User = mongoose.model('User', user)

module.exports = User;