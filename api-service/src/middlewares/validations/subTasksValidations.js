const { getTask } = require('../../services/tasksService');
const { getSubTask } = require('../../services/subTasksService');
const { isUuid } = require('../../helpers');

exports.getAllSubTasksValidation = async (req, res, next) => {
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

exports.getSubTaskValidation = (req, res, next) => {
    const { subTaskId } = req.params;

    const validationResult = [];

    if(!subTaskId || !subTaskId.trim().length) {
        validationResult.push('Sub task ID is required.');
    }

    if(subTaskId && !isUuid(subTaskId)) {
        validationResult.push('Invalid sub task ID.');
    }

    if(validationResult.length) {
        return res.status(400).json({ validationResult });
    }

    next();
};

exports.addSubTaskValidation = async (req, res, next) => {
    const taskId = req.params.taskId || req.body.taskId;
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

exports.updateSubTaskValidation = async (req, res, next) => {
    const { subTaskId } = req.params;
    const { title } = req.body;

    const validationResult = [];

    if(!subTaskId || !subTaskId.trim().length) {
        validationResult.push('Sub task ID is required.');
    }

    if(subTaskId && !isUuid(subTaskId)) {
        validationResult.push('Invalid sub task ID.');
    }

    if(!title || !title.trim().length) {
        validationResult.push('Title is required.');
    }

    if(validationResult.length) {
        return res.status(400).json({ validationResult });
    }

    const exists = await getSubTask(subTaskId);
    if(!exists) {
        const error = "Sub task does not exist.";
        return res.status(404).send({ error });
    }

    next();
};

exports.deleteSubTaskValidation = async (req, res, next) => {
    const { subTaskId } = req.params;

    const validationResult = [];

    if(!subTaskId || !subTaskId.trim().length) {
        validationResult.push('Sub task ID is required.');
    }

    if(subTaskId && !isUuid(subTaskId)) {
        validationResult.push('Invalid sub task ID.');
    }

    if(validationResult.length) {
        return res.status(400).json({ validationResult });
    }

    const exists = await getSubTask(subTaskId);
    if(!exists) {
        const error = "Sub task does not exist.";
        return res.status(404).send({ error });
    }

    next();
};