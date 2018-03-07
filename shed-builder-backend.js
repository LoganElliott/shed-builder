const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const PDFDocument  = require('pdfkit');

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => res.send('Hello World!'));

app.post('/shed-order', (req, res) => {
  console.log(req.body.data);
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('shedOrder.pdf'));
  const accessories = req.body.data.extras.accessories.reduce((accumulator, accessory) => {
    const output = accessory.quantity + ' x ' + accessory.label;
    accumulator = accumulator + '\n' + output;
    return accumulator;
  }, '');
  console.log(accessories);
  doc.text('Shed builder model');

  doc.image('public/images/' + req.body.data.selectedShed + '.png')
    .text(req.body.data.selectedShed)
    .text(req.body.data.extras.floors.quantity + ' x ' + req.body.data.extras.floors.name)
    .text(accessories);

  doc.end();
  res.send('ReceivedData')
});

app.listen(3001, () => console.log('Listening on port 3001!'));