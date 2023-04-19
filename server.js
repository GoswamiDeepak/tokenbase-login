require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./Database/database')
const authRouter = require('./Routes/authRouter');
const app = express();
app.use(express.json());
app.use(cors());
const prefix = '/api/v1/'
app.use('/api/v1/', authRouter);




const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('listening on port ' + PORT)
})


