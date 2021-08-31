const { Sequelize, DataTypes } = require('sequelize');

const SubTask = sequelize => {
    return sequelize.define('SubTask', {
        subTaskId: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
}

module.exports = SubTask;