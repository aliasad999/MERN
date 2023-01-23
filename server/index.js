import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();


dotenv.config({
    path: '.env'
});
app.use(cors());
app.use(express.json());

const port = process.env.APP_PORT || 3000
app.get('/hello', (req,res)=>{
    res.send('hello world');
});
app.post('/api/register', (req,res)=>{
    console.log(req.body);
    res.json({status:'ok'});
})


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})