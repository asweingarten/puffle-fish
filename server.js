const express = require('express')
const static = require('serve-static')
const bodyParser = require('body-parser')
const simpleGit = require('simple-git')('./');
const app = express()

const FS = require('fs');

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(static('./'));

app.use(bodyParser.json())

app.listen(3000, () => console.log('Example app listening on port 3000!'))

let codeChanges = {};
app.post('/style', (req, res) => {
  console.log(req.body);
  const payload = `\n${req.body.selector} {
  ${req.body.styles.join(';\n  ')}\n}`

  FS.appendFileSync('./style.css', payload);

  codeChanges = {
    changeSummary: 'Shrink and Center #flat-bottom-pan',
    codeChanges: `Added to style.css:\n${payload}\n`
  };

  res.end(JSON.stringify(codeChanges));
});

app.put('/change/:action', (req, res) => {
  console.log(req.params.action)
  switch(req.params.action) {
    case 'accept':
      simpleGit.add(['style.css'], (err, result) => {
        simpleGit.commit(`${codeChanges.changeSummary}\n\n${codeChanges.codeChanges}`, ['style.css'], (err, result) => { console.log(`commited changes`)});
      });
      break;
    case 'reject':
      simpleGit.checkout('style.css', (err, result) => {
        console.log(`${err}`);
        console.log(`checked out`);
      });
      break;
    default:
      break;
  }
})
