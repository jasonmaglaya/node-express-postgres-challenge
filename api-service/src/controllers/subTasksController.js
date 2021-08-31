const { getAllSubTasks, getSubTask, addSubTask, updateSubTask, deleteSubTask } = require('../services/subTasksService');

exports.getAllSubTasks = async (req, res) => {
    try{
        const { taskId } = req.params;
        const data = await getAllSubTasks(taskId);
        res.json({ data });
    } catch (error) {
        res.json({ error });
    }    
};

exports.getSubTask = async (req, res) => {
    try{
        const { subTaskId } = req.params;
        const data = await getSubTask(subTaskId);
        res.json({ data });
    } catch (error) {
        res.json({ error });
    }    
};

exports.addSubTask = async (req, res) => {
    const taskId = req.params.taskId || req.body.taskId;
    const subTask = req.body;
    subTask.taskId = taskId;

    try {
        const data = await addSubTask(subTask);
        res.status(201).json({ data });
    } catch (error) {
        res.status(500).send({ error });
    }
};

exports.updateSubTask = async (req, res) => {
    const { subTaskId } = req.params;
    const subTask = req.body;
    subTask.subTaskId = subTaskId;

    try {
        const data = await updateSubTask(subTask);
        res.json({ data });
    } catch (error) {
        res.status(500).send({ error });
    }
};

exports.deleteSubTask = async (req, res) => {
    const { subTaskId } = req.params;
    try {
        const data = await deleteSubTask(subTaskId);
        res.json({ data });
    } catch (error) {
        res.status(500).send({ error });
    }
};