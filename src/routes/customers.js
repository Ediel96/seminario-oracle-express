const { Router } = require('express');
const router = Router();
const BD = require('../config/database')

router.get('/', async (req, res) => {
    sql = "select * from CUSTOMERS";

    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "codu": user[0],
            "username": user[1],
            "firstname": user[2],
            "lastname": user[3]
        }

        Users.push(userSchema);
    })

    res.json(Users);
})

  module.exports = router;
  