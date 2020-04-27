var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/elena', function (req, res) {
  res.send('Hello Elena!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

