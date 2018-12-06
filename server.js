const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public'));


require("./routes")(app)

app.listen(8000,()=>{
    console.log('Listening on port 8000');
})