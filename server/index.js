import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
import bookingRoutes from './routes/booking.js';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes); 
app.use('/booking', bookingRoutes);

app.get('/',(req,res)=>{
    res.send('Hello To Hall Booking API');
})

const PORT = process.env.PORT || 5000; 

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error)=> console.log(`${error} did not connect`));