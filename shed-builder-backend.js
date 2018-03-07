const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const PDFDocument  = require('pdfkit');
const Mailgun = require('mailgun-js');
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const api_key = 'PUT_API_KEY_HERE';
const domain = 'sandbox5c6ddb6e964146bea6942ae46480aa1a.mailgun.org';

// fabian's email won't work since it hasn't been added to the authorised subdomains...
const from_who = 'logansails@gmail.com, fabian@nzdigital.co.nz ';


app.get('/', (req, res) => res.send('Hello World!'));

function sendOrderEmail() {
  const mailgun = new Mailgun({apiKey: api_key, domain: domain});

  const pdfPath = path.join( __dirname + '\\shedOrder.pdf');
  const file = fs.readFileSync(pdfPath);
  let shedOrderpdf = new mailgun.Attachment({data: file, filename: `shedOrder.pdf`, contentType: "application/pdf"});

  const data = {
    from: from_who,
    to: from_who,
    subject: 'Shed builder Order',
    text: 'Your order from shed builder',
    attachment: shedOrderpdf
  };

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (error, body) {
    console.log('error', error);
    console.log('body', body);
  });
}

app.post('/shed-order', (req, res) => {
  const doc = new PDFDocument();
  const pdfOutput = fs.createWriteStream('shedOrder.pdf');
  doc.pipe(pdfOutput);
  const accessories = req.body.data.extras.accessories.reduce((accumulator, accessory) => {
    const output = accessory.quantity + ' x ' + accessory.label;
    accumulator = accumulator + '\n' + output;
    return accumulator;
  }, '');
  doc.text('Shed builder model');

  doc.image('public/images/' + req.body.data.selectedShed + '.png')
    .text(req.body.data.selectedShed)
    .text(req.body.data.extras.floors.quantity + ' x ' + req.body.data.extras.floors.name)
    .text(accessories);

  doc.end();
  pdfOutput.on('finish',() => sendOrderEmail());

  res.send('ReceivedData')
});

app.listen(3001, () => console.log('Listening on port 3001!'));