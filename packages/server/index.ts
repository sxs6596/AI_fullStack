import express from 'express';
import type {Request, Response} from 'express'; 
import dotenv from 'dotenv';

dotenv.config();
const app = express(); 
const port = process.env.PORT || 3000; 
app.get('/',(req:Request, res:Response)=>{
    res.send(`hello world! server is running on port ${port}`);
})
app.get('/api/hello',(req:Request, res:Response)=>{
    res.json({message: 'Hello from the API'});
})

app.listen(port, ()=>{
    console.log(`server is running on the port ${port}`);
})