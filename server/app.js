const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json()) //ce middleware express parse le json envoyé en POST
// pour un formulaire classique le middleware est : express URLencoded
//middleware transformateur de JSON qui se trouverait dans le body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'colybakary92@gmail.com',
    pass: 'bakbak92'
  }
});


app.post('/email', (req, res) => {
    const {nom, email} = req.body
    var mailPourClient = {
        from: 'colybakary92@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: `Bien recu ${nom}`
    };
    var mailPourPrestaire = {
        from: 'colybakary92@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 
`${nom} 
        
veut commender`
    };
        console.log(`voici ${nom}, ${email}`)
    
   
    transporter.sendMail(mailPourClient, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      transporter.sendMail(mailPourPrestair, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}   
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))