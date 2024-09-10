import app from './app';
import config from './utils/config';
import { connectToDatabase } from './utils/db';

const start = async () => {
  await connectToDatabase();
  app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });
};

void start();
