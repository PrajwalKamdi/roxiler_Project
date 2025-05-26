import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors'
import express from 'express';
// import router from './routes/userRoute.js';
import authRouter from './routes/authRoute.js'
import storeRouter from './routes/storeRoute.js';
import userRouter from './routes/userRoute.js';
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json())
const PORT = process.env || 5000;

//middleware
app.use(express.json());

//routes
// app.use("/api/users/", router);
app.use('/api', authRouter);
app.use('/api', storeRouter)
app.use('/api', userRouter)
//server listen
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
})