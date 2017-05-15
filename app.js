var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/webhook', function(req, res) {
	
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === "EAAYL4J7il9YBAC4Kqz0EunSCvRbPt3WK2n8RdFXZAYjsddnIDVdI4XQs53C99fMW0Mk5Wj37603laz1fsEp5pfoP6hDABSJaLvlUmkOkeL58iPG0LQnngZCSZCuwNmADXZCwSxmXxiclYs5tbY5GpqB4U5x3Cvf9D5vS37zhZCQZDZD") {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }   
});