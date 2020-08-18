const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//self
const routes = require('./routes/routes');

//init app
const app = express();

//enables cross origin requests
app.use(cors());
//json body parser
app.use(express.json());

//add routes
app.use('/api', routes);


//connect db
mongoose.connect("mongodb+srv://user1234:1234@cluster0.efaff.mongodb.net/tododb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true });

//start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))