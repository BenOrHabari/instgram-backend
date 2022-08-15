import "dotenv/config";
import express from 'express';


const app = express();

// const loadRoutes = require("./routes/index");

// app.use(express.json());

// loadRoutes(app);

app.listen(process.env.PORT, () => console.log('app is running on port ' + process.env.PORT));