const { getAllTasks, getTask, addTask, updateTask, deleteTask } = require('../repositories/tasksRepo');
const { PAGE_SIZE } = require('../constants');

exports.getAllTasks = async (pageNum = 1, pageSize = PAGE_SIZE) => {
    try {
        const offset = pageSize * (pageNum - 1);
        return await getAllTasks(offset, pageSize);
    } catch(error) {
        console.error(error);
        throw 'Error on retrieving all tasks.';
    }
};

exports.getTask = async (taskId) => {
    try {
        return await getTask(taskId);
    } catch(error) {
        console.error(error);
        throw 'Error on retrieving a task.';
    }
};

exports.addTask = async (task) => {
    try {
        const { taskId } = await addTask(task);
        
        if(!taskId) {
            throw 'Error on creating the task.';
        }

        return taskId;
    } catch(error) {
        console.error(error);
        throw 'Error on creating the task.';
    }
};

exports.updateTask = async (task) => {
    try {
        return await updateTask(task) > 0;        
    } catch(error) {
        console.error(error);
        throw 'Error on updating the task.';
    }
};

exports.deleteTask = async (taskId) => {
    try {
        return await deleteTask(taskId) > 0;        
    } catch(error) {
        console.error(error);
        throw 'Error on deleting the task.';
    }
};