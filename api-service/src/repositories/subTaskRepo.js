const { SubTask } = require('../models').models;

exports.getAllSubTasks = async taskId => {
    return await SubTask.findAll({ where: { taskId } });
};

exports.getSubTask = async subTaskId => {
    return await SubTask.findOne({ where: { subTaskId } });
};

exports.getSubTask = async subTaskId => {
    return await SubTask.findOne({
        where: { subTaskId }
    });
};

exports.addSubTask = async subTask => {
    const { taskId, title } = subTask;

    return await SubTask.create({ taskId, title });
};

exports.updateSubTask = async task => {
    const { subTaskId, title, completed } = task;

    return await SubTask.update(
        { title, completed },
        { where: { subTaskId } }
    );
};

exports.deleteSubTask = async subTaskId => {
    return await SubTask.destroy({ where: { subTaskId } });
};