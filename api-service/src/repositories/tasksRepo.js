const { Task, SubTask } = require('../models').models;

exports.getAllTasks = async (offset, limit) => {
    const { rows: result, count: total } = await Task.findAndCountAll({ offset, limit, order: [['createdAt','ASC']] });

    return { result, total };
};

exports.getTask = async (taskId) => {
    return await Task.findByPk(taskId, {
        include: { model: SubTask, as: 'subTasks' },
        order: [ 
            [ { model: SubTask, as: 'subTasks' }, 'createdAt', 'ASC' ]
        ],
    });
};

exports.addTask = async (task) => {
    const { title, details } = task;

    return await Task.create({ title, details });
};

exports.updateTask = async (task) => {
    const { taskId, title, details, completed } = task;

    return await Task.update(
        { title, details, completed },
        { where: { taskId } }
    );
};

exports.deleteTask = async (taskId) => {
    return await Task.destroy({ 
        where: { taskId } 
    });
};