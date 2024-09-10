import { Client } from 'pg';
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const POSTGRES_DB = process.env.POSTGRES_DB;
// If the environment is started using docker compose, use the docker host instead of the localhost
const POSTGRES_HOST = process.env.DOCKER ? process.env.POSTGRES_HOST_DOCKER : process.env.POSTGRES_HOST;

const connectionString = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`;

const client = new Client({
  connectionString,
});

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to database');
  } catch (e) {
    console.log(e);
    console.log('Failed to connect to DB');
  }
};
