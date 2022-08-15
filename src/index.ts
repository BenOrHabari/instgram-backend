const express = require('express');

const app = express();

const loadRoutes = require("./routes/index");

app.use(express.json());

loadRoutes(app);

app.listen(5000, () => console.log('app is running'));