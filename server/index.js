const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');

//init app
const app = express();

//enables cross origin requests
app.use(cors());

//connect db
//mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true});
//mongoose.set('useFindAndModify', false);


//json body parser
app.use(express.json());
//if body parser throws errors...

//add routes
app.use('/api', routes);

//start Server
const PORT = 80;
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))