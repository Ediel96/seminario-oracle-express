const express = require('express');

const app = express();
const BD = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/customers'));
app.use(require('./routes/employees'));

app.get('/', async (req, res) => {
  sql = "select * from CUSTOMERS;";

  let result = await BD.Open(sql);
  Users = [];

  result.rows.map(user => {
      console.log(user)
  })

  res.json(Users);
})

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});