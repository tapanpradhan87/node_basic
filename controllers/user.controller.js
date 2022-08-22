const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const fs = require('fs');

app.get('/', (req, res) => {
    //const id = req.query;
    const { id= 0} = req.query;
    if(!id)console.log('invalid query parameter');
    else console.log(id);
    const data = fs.readFileSync('data/employees.json');
    debugger
    const json = JSON.parse(data);
    const x = json.filter(function(data){return data.age == id});
    res.send(x);
});

app.post('/', (req, res) => {
    const data = fs.readFileSync('data/employees.json')
    const json = JSON.parse(data);
    json.push(req.body);
    fs.writeFileSync("data/employees.json", JSON.stringify(json));
    res.send("Success !!!");
});

module.exports = app;
