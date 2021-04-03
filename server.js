const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 7700;

app.use(express.static(__dirname + './public/'));

app.listen(port, err => {
    if (err) {
        console.info(`Something wrong. Error: ${err}`)
    } else {
        console.log(`Server started at ${port} port!`);
    }
});