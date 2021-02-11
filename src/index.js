const { request, response } = require('express');
const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log("Aplicaçao ok");
})

app.get("/", (request, response) => {
    response.send("Hello");
})