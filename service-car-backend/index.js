const express = require('express');
const cors  = require('cors');
require('dotenv').config();
const app = express();
const { dbConnection } = require('./db/config');

//DB
dbConnection();

app.use(cors());
app.use( express.static('public') );
app.use( express.json() );

app.use('/api/vehicle', require('./routes/eventsVehicle'));

app.listen( process.env.PORT ,() => {
    console.log('Server running on localhost:', process.env.PORT );
})
 