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

module.exports = function(to, subject, message) {

    const transporter = nodemailer.createTransport({
        // SMTP
    
        // host:'smtp.ethereal.email',
        // post:587,
        // secure:false, // ssl tls
        service:'gmail',
        auth:{
            user:'niluferk038@gmail.com',
            pass:'iknd bxjm azpt jjrz'
        }
    })
    
    transporter.sendMail({
        // from:'niluferk038@gmail.com',
        to:to,
        subject:subject,
        text:message,
        html:message
    
    },(error,success)=> console.log(success,error))
    
}

