import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv'
dotenv.config()

// Routes
import {AccountRoute} from './routes/account.js'
import {QuestionRoute} from './routes/question.js'
// application
const app = express();
const PORT = process.env.PORT || 8080

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/api/account', AccountRoute)
app.use('/api/question', QuestionRoute)


//  route
app.get("/", (req, res)=>{
    res.send("Learning never ends")
})


// Listening for request
app.listen(PORT, ()=> console.log("Server is running, show some respect"))