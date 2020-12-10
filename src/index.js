  
const express = require('express');
const app = express();

var customers = require('./routes/customers')

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use('/customers', customers);

app.get('/', function (req, res) {
  res.send('root');
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});