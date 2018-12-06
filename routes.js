const controller = require("./controller");

module.exports = function(app){
    app.get('/tasks',controller.showAll)
    app.post('/task',controller.createOne)
    app.get('/oneTask/:_id',controller.showOne)
    app.delete('/deleteOne/:_id',controller.deleteOne)
    app.put('/updateOne/:_id',controller.updateOne)
}