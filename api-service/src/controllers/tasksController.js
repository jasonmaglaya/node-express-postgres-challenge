const { getAllTasks, getTask, addTask, updateTask, deleteTask } = require('../services/tasksService');

exports.getAllTasks = async (req, res) => {
    try {
        const { pageNum, pageSize } = req.query;
        const data = await getAllTasks(pageNum, pageSize);
        res.json({ data });
    } catch (error) {      
        res.status(500).send({ error });
    }
};

exports.getTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const data = await getTask(taskId);
        res.json({ data });
    } catch (error) {      
        res.status(500).send({ error });
    }
};

exports.addTask = async (req, res) => {
    const task = req.body;
    try {
        const data = await addTask(task);
        res.status(201).json({ data });
    } catch (error) {      
        res.status(500).send({ error });
    }
};

exports.updateTask = async (req, res) => {
    const { taskId } = req.params;
    const task = req.body;
    task.taskId = taskId;

    try {
        const data = await updateTask(task);
        res.json({ data });
    } catch (error) {      
        res.status(500).send({ error });
    }
};

exports.deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
        const data = await deleteTask(taskId);
        res.json({ data });
    } catch (error) {      
        res.status(500).send({ error });
    }
};