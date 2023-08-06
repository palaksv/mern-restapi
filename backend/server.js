const express=require('express');
const dotenv=require('dotenv');
const router=require('./routes/goalRoutes.js')
const {errorHandler} =require('./middleware/errorMiddleware.js')
const {connectDB}=require('./config/db.js')


connectDB();

const app=express();
const port=process.env.PORT || 5000;
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',router)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})