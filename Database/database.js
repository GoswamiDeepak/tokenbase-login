const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://deepakgoswamiofficial:homxCttfCY3hUM5I@apnaid.fgtdgaf.mongodb.net/test')
.then(()=>{
    console.log('Database connection established')
})
.catch((e)=>{
    console.log(e)
})