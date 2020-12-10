const { Router } = require('express');
const router = Router();
const BD = require('../config/database');

//READ
router.get('/getUsers', async (req, res) => {
    sql = "";

    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        console.log(user)
    })

    // res.json(Users);
})
