import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// const CONNECTION_URL = "mongodb+srv://newuser123:newuser0123@cluster0.zq1l2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb+srv://newuser123:newuser0123@cluster0.zq1l2.mongodb.net/myFirstDatabase", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);