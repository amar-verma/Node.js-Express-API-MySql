const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 3000
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodeDB"
})

//check wheather database is connected or not.. 
connection.connect((err)=>{
    if (err) throw err;
    console.log("connected")
})

//on empty localhost port
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//on specfic port display response
app.get('/about', (req, res) => {
    res.send('about page')
  })

app.get('/products', (req, res) => {
    connection.query("select * from products",(err,result)=>{
        console.log(result)
        res.send(result)
    })
})
app.get('/products/id', (req, res) => {
    connection.query("select id from products",(err,result)=>{
        console.log(result)
        res.send(result)
    })
})
app.get('/products/name', (req, res) => {
    connection.query("select name from products",(err,result)=>{
        console.log(result)
        res.send(result)
    })
})
app.get('/products/description', (req, res) => {
    connection.query("select description from products",(err,result)=>{
        console.log(result)
        res.send(result)
    })
})
app.get('/products/price', (req, res) => {
    connection.query("select price from products",(err,result)=>{
        console.log(result)
        res.send(result)
    })
})
app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const query = `select * from products where id = ${id}`
    connection.query(query,(err,result)=>{
        res.send(result)
    })
})
app.get('/products/:id/:pname', (req, res) => {
    const id = req.params.id
    const pname = req.params.pname
    const query = `select ${pname} from products where id = ${id}`
    connection.query(query,(err,result)=>{
        res.send(result)
    })
})

app.use((req, res) => {
    res.status(404).send({ error: 'URL not found' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 