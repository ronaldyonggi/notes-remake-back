import express from 'express';
import cors from 'cors';
import notesRouter from './controllers/notes';

// Initialize express app
const app = express();

app.use(cors());
app.use(express.json());

app.use('/notes', notesRouter);

export default app;
