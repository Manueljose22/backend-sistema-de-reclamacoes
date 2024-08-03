import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from './routes/_index';


dotenv.config();


const app = express();


app.use(express.json());
app.use(express.static('public'));

app.use(cors({
    // credentials: true, enviar cookies
    origin: process.env.ORIGIN_CORS as string,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(routes);




export { app }