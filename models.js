const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task_api');

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    completed: {type: Boolean, default: false}},
    {timestamps: true});

module.exports = mongoose.model('Tasks',TaskSchema);
