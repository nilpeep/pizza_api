"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require('../controllers/pizza')
const { isAdmin } = require('../middlewares/permissions')

const multer = require('multer')
const upload = multer({
    // dest: 'uploads/', // this saves your file into a directory called "uploads"
    storage: multer.diskStorage({
        destination: './uploads'
})
})

// URL: /pizzas

router.route('/')
    .get(pizza.list)
    .post(isAdmin, pizza.create)
    .post(isAdmin, upload.array('fileName'), pizza.create) // recommended

router.route('/:id')
    .get(pizza.read)
    .put(isAdmin, pizza.update)
    .patch(isAdmin, pizza.update)
    .delete(isAdmin, pizza.delete)

/* ------------------------------------------------------- */
module.exports = router