const express=require('express');
const app=express();
const studentRoute=require('./api/routes/student');
const userRoute=require('./api/routes/user');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error',err=>{
    console.log('CONNECTION FALLIED!.....');
})
mongoose.connection.on('connected',connect=>{
    console.log('CONNECTED DATABASE SUCCESSFULLY!..........')
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/student',studentRoute);
app.use('/user',userRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request',
    })
})
app.listen(process.env.PORT || 3000,()=>{
    console.log('connected!');
  });

module.exports =app;
