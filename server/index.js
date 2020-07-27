const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express();
app.use(express.json())

const port = 4000;

//Enpoints
app.get('/api/products', getProducts)
// http://localhost:4000/api/products

app.get('/api/products/:id', getProduct)


app.listen(port, () => console.log(`Server listening on port ${port}`))
