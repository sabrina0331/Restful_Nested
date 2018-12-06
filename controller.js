const Task = require("./models");

module.exports = {
    showAll: function(req,res){
        Task.find({},function(err,tasks){
            if(err){
                res.json(err)
            }else{
                res.json(tasks)
            }
        })
    },
    createOne: function(req,res){
        var new_task = new Task({ title: req.body.title,description: req.body.description, completed: req.body.completed })
        new_task.save(function(err,tasks){
            if(err){
                res.json(err);
            } 
        });
        Task.findOne({},function(err,tasks){
            if(err){
                res.json(err);
            }else{
                res.json(tasks);
            }
        })
    },
    showOne: function(req,res){
        Task.findOne({_id: req.params._id}, function(err,tasks){
            if(err){
                res.json(err)
            }else{
                res.json(tasks)
            }
        })
    },
    updateOne: function(req,res){
        Task.updateOne({_id: req.params._id}, req.body,function(err,tasks){
            if(err){
                res.json(err)
            }else{
                res.json(tasks)
            }
        })
    },

    deleteOne: function(req,res){
        Task.remove({_id: req.params._id},function(err,tasks){
            if(err){
                res.json(err)
            }else{
                res.json(tasks)
            }
        })
    },
}