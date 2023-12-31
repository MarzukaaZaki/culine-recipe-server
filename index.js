const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

const chefs = require('./data/chefs.json')

app.get('/',(req, res)=>{
    res.send('Culine Calling')
})

// Load data 
app.get('/chefs', (req, res)=>{
    res.send(chefs);
    
})
app.listen(port, ()=>{
    console.log(`Culine Server running on port ${port}`);
})