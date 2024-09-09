import express from 'express';
import 'express-async-errors';
import cors from 'cors';

// Initialize express app
const app = express();

app.use(cors());
app.use(express.json());

export default app;
