const PORT = process.env.PORT ?? 8000
const express = require('express');
const app = express();


// get all todos

app.get('/todos', (req, res)=>{
    
    try{
        //await

    }catch (err) {
        console.error('error')
    }
})










app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`);
})