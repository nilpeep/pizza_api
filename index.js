"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ npm i jsonwebtoken
    $ nodemon
*/
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// Logger:
app.use(require('./src/middlewares/logger'))

// Auhentication:
app.use(require('./src/middlewares/authentication'))

// findSearchSortPage / res.getModelList:
app.use(require('./src/middlewares/queryHandler'))

/* ------------------------------------------------------- */

const nodemailer = require('nodemailer')

// nodemailer.createTestAccount().then(data => console.log(data))

// {
//     user: 'rr7p6vp6rbbsvrhd@ethereal.email',
//     pass: 'DchQBQPUQ7GBf9wCGB',
//     smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
//     imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//     pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//     web: 'https://ethereal.email'
//   }


// //? YandexMail (yandex):
// const transporter = nodemailer.createTransport({
//     service: 'Yandex',
//     auth: {
//         user: 'username@yandex.com',
//         pass: 'password' // your emailPassword
//     }
// })

// const transporter = nodemailer.createTransport({
//     // SMTP

//     // host:'smtp.ethereal.email',
//     // post:587,
//     // secure:false, // ssl tls
//     service:'gmail',
//     auth:{
//         user:'niluferk038@gmail.com',
//         pass:'iknd bxjm azpt jjrz'
//     }
// })
// console.log(transporter)

transporter.sendMail({
    // from:'niluferk038@gmail.com',
    to:'niluferk038@gmail.com',
    subject:'Yo wassup',
    text:'stay low',
    html:'<b>just dont overthink about wrong topics</b>'

},(error,success)=> console.log(success,error))

// transporter.sendMail({
//     from:'rr7p6vp6rbbsvrhd@ethereal.email',
//     to:'niluferk038@gmail.com',
//     subject:'Yo wassup',
//     text:'stay low',
//     html:'<b>just dont overthink about wrong topics</b>'

// },(error,success) =>{
//     if(error){
//         console.log(error,'error')
//     }else{
//         console.log(success,'success')
//     }
// })

// Routes:

// routes/index.js:
app.use('/', require('./src/routes/'))

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PIZZA API',
        docs: {
            swagger: "/documents/swagger",
            redoc: "/documents/redoc",
            json: "/documents/json",
        },
        user: req.user,
    })
})

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('server running at '+'http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.