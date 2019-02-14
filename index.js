'use strict';

const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();


app.use('/', express.static('public'));

app.listen(PORT, console.log(`port run on ${PORT}`));