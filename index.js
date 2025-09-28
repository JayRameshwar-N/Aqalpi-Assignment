const app = require('./app');
const connectDB = require('./src/config/mdb.config');

const PORT = process.env.PORT || 4000
require('dotenv').config({quiet:true})




connectDB()


app.listen(PORT,()=> console.log(`Server connected successfully port on ${PORT}`))