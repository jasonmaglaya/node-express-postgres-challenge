
const { pgUser, pgHost, pgDatabase, pgPassword } = require('../config');
const { Sequelize } = require('sequelize');
const Task = require('./Task');
const SubTask = require('./SubTask');

const sequelize = new Sequelize(pgDatabase, pgUser, pgPassword, {
    host: pgHost,
    dialect: 'postgres'
});

SubTask(sequelize);
Task(sequelize);

module.exports = sequelize;