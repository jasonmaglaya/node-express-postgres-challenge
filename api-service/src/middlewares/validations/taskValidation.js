const { getTask } = require('../../services/tasksService');
const { isUuid } = require('../../helpers');

exports.getTaskValidation = (req, res, next) => {
    const { taskId } = req.params;

    const validationResult = [];

    if(!taskId || !taskId.trim().length) {
        validationResult.push('Task ID is required.');
    }

    if(taskId && !isUuid(taskId)) {
        validationResult.push('Invalid task ID.');
    }

    if(validationResult.length) {
        return res.status(400).json({ validationResult });
    }

    next();
};

exports.addTaskValidation = (req, res, next) => {
    const { title } = req.body;

    const validationResult = [];

    if(!title || !title.trim().length) {
        validationResult.push('Title is required.');
    }

    if(validationResult.length) {
        return res.status(400).json({ validationResult });
    }

    next();
};

exports.updateTaskValidation = async (req, res, next) => {
    const { taskId } = req.params;
    const { title } = req.body;

    const validationResult = [];

    if(!taskId || !taskId.trim().length) {
        validationResult.push('Task ID is required.');
    }

    if(taskId && !isUuid(taskId)) {
        validationResult.push('Invalid task ID.');
    }

    if(!title || !title.trim().length) {
        validationResult.push('Title is required.');
    }

    if(validationResult.length) {
        return res.status(400).json({ validationResult });
    }

    const exists = await getTask(taskId);

    if(!exists) {
        const error = "Task does not exist.";
        return res.status(404).send({ error });
    }

    next();
};

exports.deleteTaskValidation = async (req, res, next) => {
    const { taskId } = req.params;

    const validationResult = [];

    if(!taskId || !taskId.trim().length) {
        validationResult.push('Task ID is required.');
    }

    if(taskId && !isUuid(taskId)) {
        validationResult.push('Invalid task ID.');
    }

    if(validationResult.length) {
        return res.status(400).json({ validationResult });
    }

    const exists = await getTask(taskId);
    if(!exists) {
        const error = "Task does not exist.";
        return res.status(404).send({ error });
    }

    next();
};