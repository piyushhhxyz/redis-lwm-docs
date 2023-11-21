const express = require("express");
const app = express();
const axios = require("axios");
const { client } = require("./client");


app.get('/', async (req,res)=> {
    const cachedValue = await client.get('todos');
    if(cachedValue) res.end(cachedValue)

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30);

    res.end(JSON.stringify(data));
})

app.listen(3001, ()=>console.log('Server Started @3001'));