const { Sequelize, DataTypes } = require('sequelize');

const Task = sequelize => {
    const Task = sequelize.define('Task', {
        taskId: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        details: {
            type: DataTypes.STRING
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    const { SubTask } = sequelize.models;

    Task.hasMany(SubTask, { as: 'subTasks', onDelete: 'CASCADE', foreignKey: { name: 'taskId', allowNull: false } });

    return Task;
}

module.exports = Task;