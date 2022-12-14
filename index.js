require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const authRouter = require('./auth/authRouter');
const usersRouter = require('./users/usersRouter');
const port = process.env.PORT || 3020;
const ApiError = require('./exeption/api-error')

const option = {
    credentials: true,
    origin:process.env.CLIENT_URL
}
app.use(cors(option))
app.use(cookieParser());
app.use(express.json());
app.get('/check',(req,res)=>{
    res.json({message:'Server works correctly!'})
});
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use(ApiError.errorMiddleWares)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});