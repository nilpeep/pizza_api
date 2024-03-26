"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const user = require('../controllers/user')

router.route('/', )
    .get(user.list)
    .post(user.create)

router.route('/:id')
    .get(user.read)
    .put(user.update)
    .delete(user.delete)
    .patch(user.update)
    


/* ------------------------------------------------------- */
module.exports = router