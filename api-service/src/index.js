require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');

// * App initialization
const app = express();
app.use(cors());
app.use(express.json());

// routes
const routes = require('./routes');
app.use('/api', routes);

// database
const db = require('./models');
db.sync()
  .then(() => { console.log('Successfully connected to the database.'); })
  .catch((error) => { console.error('Could not connect to the database.', error) });

// * Postgres client
const { Pool } = require('pg');
const pgClient = new Pool({
  user: config.pgUser,
  host: config.pgHost,
  database: config.pgDatabase,
  password: config.pgPassword,
  port: config.pgPort,
});
pgClient.on('error', () => console.log('Lost Postgres connection'));

// * Healthcheck

app.use(`/health-check`, (req, res) =>
  res.json({
    success: true,
    message: `${process.env.NODE_ENV} server is running healthy`,
  })
);

// * Server
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(
    `🚀 ${process.env.NODE_ENV} server ready at: http://localhost:${port}`
  );
});
