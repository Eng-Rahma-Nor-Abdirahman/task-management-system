
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';

import adminRoutes from './routes/admin.js';
import authRouter from './routes/auth.js';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { logger } from './middlewares/logger.js';
import { notFound } from './middlewares/notfound.js';
import { errorHandler } from './middlewares/errorHandler.js';
import taskRoutes from './routes/tasks.js';
import { protect } from './middlewares/auth.js';
import { upload } from './middlewares/upload.js';
import { uploadFile } from './controllers/uploadController.js';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils/swagger.js';
import { limiter } from './middlewares/rateLimiter.js';




const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: [
        "http://localhost:5000",
        "http://localhost:5173",
    ],
    credentials: true
}));

// app.use(cors({
//     origin: 'http://localhost:5174',
// }));


app.use(limiter);


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());


// routes
// app.use(logger);

app.use(helmet());


app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//diiwaangelin routes
app.use('/api/users',userRouter)
app.use('/api/posts',postRouter)
app.use('/api/auth',authRouter)
app.use('/api/admin', adminRoutes);
app.use('/api/tasks', taskRoutes);





app.get('/api', (req, res) => {
    res.json(users);
});

app.get('/api/test', (req, res) => {
    res.send("Server is alive");
});



//server frontend in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}




//last route middle ware
app.use(notFound);

//error handler middleware
app.use(errorHandler);

//connect to mongodb
mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.MONGO_URI : process.env.MONGO_URI_DEV)
    .then(() => {
        console.log('connected to mongodb');
    })
    .catch((err) => {
        console.log('error connecting to mongodb', err);
    });

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})