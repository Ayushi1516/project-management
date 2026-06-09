import express from 'express';
import cors from 'cors';
import healthcheckRouter from './route/healthcheck.route.js';
import authRouter from './route/auth.routes.js';

const app = express();

//basic configuration
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static("public"))

//cors configuration
app.use(cors({origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["content-Type", "Authorization"]
}));

//imports the routes
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/auth", authRouter);

app.get('/', (req, res)=> {
    res.send("Welcome to basecamp!!");
});

export default app;
