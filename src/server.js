const express = require('express'); //express ใช้จัดการ libery http
const router = require('./router/router.js');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api',router);

app.listen(port,() => { console.log(`Listening on port ${port}`)});

module.exports = app;