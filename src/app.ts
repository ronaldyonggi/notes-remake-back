import express from 'express';
import cors from 'cors';
import notesRouter from './controllers/notes';

// Initialize express app
const app = express();

app.use(cors());
app.use(express.json());;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/notes', notesRouter);

export default app;
