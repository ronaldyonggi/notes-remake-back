import { Client } from 'pg';
const pgUser = process.env.POSTGRES_USER;
const pgPassword = process.env.POSTGRES_PASSWORD;
const pgDb = process.env.POSTGRES_DB;
const isUsingDocker = process.env.DOCKER;
const pgLocalHost = process.env.POSTGRES_HOST_LOCAL;
const pgDockerHost = process.env.POSTGRES_HOST_DOCKER;
// If the environment is started using docker compose, use the docker host instead of the localhost
const pgHostRun = isUsingDocker ? pgDockerHost : pgLocalHost;

const connectionString = `postgresql://${pgUser}:${pgPassword}@${pgHostRun}:5432/${pgDb}`;

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
