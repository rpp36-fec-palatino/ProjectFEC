var express = require('express');
var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));



// api's can go here










var port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ', port);
})