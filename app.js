require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const app = express();
const PORT =  3000 || process.env.PORT;
app.use(express.static('public'));
connectDB() 
// Template Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');



app.use('/',require('./server/routes/main'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})