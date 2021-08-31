const { getAllSubTasks, getSubTask, addSubTask, updateSubTask, deleteSubTask } = require('../repositories/subTaskRepo');

exports.getAllSubTasks = async taskId => {
    try {
        return await getAllSubTasks(taskId);
    } catch(error) {
        console.error(error);
        throw 'Error on retrieving sub tasks.';
    }
};

exports.getSubTask = async subTaskId => {
    try {
        return await getSubTask(subTaskId);
    } catch(error) {
        console.error(error);
        throw 'Error on retrieving sub tasks.';
    }
};

exports.addSubTask = async (subTask) => {
    try {
        const { subTaskId } = await addSubTask(subTask);

        if(!subTaskId) {
            throw 'Error on adding a sub task.';
        }

        return subTaskId;
    } catch(error) {
        console.error(error);
        throw 'Error on adding a sub task.';
    }
};

exports.updateSubTask = async subTask => {
    try {
        return await updateSubTask(subTask) > 0;
    } catch(error) {
        console.error(error);
        throw 'Error on updating a sub task.';
    }
};

exports.deleteSubTask = async subTaskId => {
    try {
        return await deleteSubTask(subTaskId) > 0;
    } catch(error) {
        console.error(error);
        throw 'Error on updating a sub task.';
    }
};