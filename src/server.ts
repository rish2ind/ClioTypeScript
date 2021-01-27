import express = require('express');
import { RequestOrganizer } from './index';

var bodyParser = require('body-parser')

// Create a new express app instance
const app: express.Application = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var jsonParser = bodyParser.json()


app.get('/', function (req: any, res: any) {
    res.send('Hello World!');
});

app.listen(8080, function () {
    console.log('App is listening on port 8080!');
});


app.post('/accessToken', jsonParser, function (req: any, res: any) {
    let ro = new RequestOrganizer();
    //console.log('req.body  '+req.body);
    //console.log(req);
    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key:any, value:any) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };

    //console.log(JSON.stringify(req, getCircularReplacer()));


    ro.startProcess();
});