const express = require('express');
const app = express();
const dbClinet = require('../data/dbm');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const fs = require('fs');

// app.get('/', (req, res) => {
//     //const id = req.query;
//     const { id= 0} = req.query;
//     if(!id)console.log('invalid query parameter');
//     else console.log(id);
//     const data = fs.readFileSync('data/employees.json');
//     debugger
//     const json = JSON.parse(data);
//     const x = json.filter(function(data){return data.age == id});
//     res.send(x);
// });

// app.post('/', (req, res) => {
//     const data = fs.readFileSync('data/employees.json')
//     const json = JSON.parse(data);
//     json.push(req.body);
//     fs.writeFileSync("data/employees.json", JSON.stringify(json));
//     res.send("Success !!!");
// });
app.get('/', (req, res) => {
    dbClinet('restaurants', async collection =>{
        const list = await collection.find(req.query).toArray()
        res.json(list);
    })
});
app.get('/:id', (req, res) => {
    dbClinet('restaurants', async collection =>{
        const list = await collection.findById(req.params.id).toArray()
        res.json(list);
    })
});

app.post('/', (req, res) => {
    dbClinet('restaurants', async collection => {
    const result =await collection.insertOne(req.body);
    res.json(result);
  })
});
module.exports = app;
