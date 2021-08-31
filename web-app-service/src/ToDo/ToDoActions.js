import axios from "axios";

export const ADD_TASK_START = "[ToDo] ADD_TASK_START";
export const ADD_TASK_SUCCESS = "[ToDo] ADD_TASK_SUCCESS";
export const ADD_TASK_FAILED = "[ToDo] ADD_TASK_FAILED";

export const GET_TASK_START = "[ToDo] GET_TASK_START";
export const GET_TASK_SUCCESS = "[ToDo] GET_TASK_SUCCESS";
export const GET_TASK_FAILED = "[ToDo] GET_TASK_FAILED";

export const UPDATE_TASK_START = "[ToDo] UPDATE_TASK_START";
export const UPDATE_TASK_SUCCESS = "[ToDo] UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_FAILED = "[ToDo] UPDATE_TASK_FAILED";

export const GET_ALL_TASKS_START = "[ToDo] GET_ALL_TASKS_START";
export const GET_ALL_TASKS_SUCCESS = "[ToDo] GET_ALL_TASKS_SUCCESS";
export const GET_ALL_TASKS_FAILED = "[ToDo] GET_ALL_TASKS_FAILED";

export const DELETE_TASK_START = "[ToDo] DELETE_TASK_START";
export const DELETE_TASK_SUCCESS = "[ToDo] DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILED = "[ToDo] DELETE_TASK_FAILED";

export const ADD_SUB_TASK_START = "[ToDo] ADD_SUB_TASK_START";
export const ADD_SUB_TASK_SUCCESS = "[ToDo] ADD_SUB_TASK_SUCCESS";
export const ADD_SUB_TASK_FAILED = "[ToDo] ADD_SUB_TASK_FAILED";

export const UPDATE_SUB_TASK_START = "[ToDo] UPDATE_SUB_TASK_START";
export const UPDATE_SUB_TASK_SUCCESS = "[ToDo] UPDATE_SUB_TASK_SUCCESS";
export const UPDATE_SUB_TASK_FAILED = "[ToDo] UPDATE_SUB_TASK_FAILED";

export const DELETE_SUB_TASK_START = "[ToDo] DELETE_SUB_TASK_START";
export const DELETE_SUB_TASK_SUCCESS = "[ToDo] DELETE_SUB_TASK_SUCCESS";
export const DELETE_SUB_TASK_FAILED = "[ToDo] DELETE_SUB_TASK_FAILED";

const tasksEndpoint = "/tasks";
const subTasksEndpoint = "/sub-tasks";

// Add Task
export const addTaskStart = () => ({
  type: ADD_TASK_START,
});

export const addTaskSuccess = () => ({
  type: ADD_TASK_SUCCESS,
});

export const addTaskFailed = (payload) => ({
  type: ADD_TASK_FAILED,
  payload
});

export const addTask = (task) => async (dispatch)  =>{
    try {
        dispatch(addTaskStart());
        await axios.post(`${tasksEndpoint}`, task);
        dispatch(addTaskSuccess());
        dispatch(getAllTasks());
    } catch(error) {
        dispatch(addTaskFailed([error]));
    }
}



// Get Task
export const getTaskStart = () => ({
  type: GET_TASK_START,
});

export const getTaskSuccess = (payload) => ({
  type: GET_TASK_SUCCESS,
  payload
});

export const getTaskFailed = (payload) => ({
  type: GET_TASK_FAILED,
  payload
});

export const getTask = (taskId) => async (dispatch)  =>{
    try {
        dispatch(getTaskStart());
        const { data } = await axios.get(`${tasksEndpoint}/${taskId}`);
        dispatch(getTaskSuccess(data));
    } catch(error) {
        dispatch(getTaskFailed([error]));
    }
}



// Update Task
export const updateTaskStart = () => ({
  type: UPDATE_TASK_START,
});

export const updateTaskSuccess = (payload) => ({
  type: UPDATE_TASK_SUCCESS,
  payload
});

export const updateTaskFailed = (payload) => ({
  type: UPDATE_TASK_FAILED,
  payload
});

export const updateTask = (task) => async (dispatch)  => {
    try {
        dispatch(updateTaskStart());

        const { taskId, title, details, completed } = task;

        await axios.put(`${tasksEndpoint}/${taskId}`, { title, details, completed });
        
        dispatch(updateTaskSuccess());
        dispatch(getAllTasks());
        dispatch(getTask(taskId));
    } catch(error) {
        dispatch(updateTaskFailed([error]));
    }
}



// Delete Task
export const deleteTaskStart = () => ({
  type: DELETE_TASK_START,
});

export const deleteTaskSuccess = (payload) => ({
  type: DELETE_TASK_SUCCESS,
  payload
});

export const deleteTaskFailed = (payload) => ({
  type: DELETE_TASK_FAILED,
  payload
});

export const deleteTask = (taskId) => async (dispatch)  => {
    try {
        dispatch(deleteTaskStart());

        await axios.delete(`${tasksEndpoint}/${taskId}`);
        
        dispatch(deleteTaskSuccess());
        dispatch(getAllTasks());
    } catch(error) {
        dispatch(deleteTaskFailed([error]));
    }
}



// Get All Tasks
export const getAllTasksStart = () => ({
  type: GET_ALL_TASKS_START,
});

export const getAllTasksSuccess = (payload) => ({
  type: GET_ALL_TASKS_SUCCESS,
  payload
});

export const getAllTasksFailed = (payload) => ({
  type: GET_ALL_TASKS_FAILED,
  payload
});

export const getAllTasks = () => async (dispatch)  =>{
    try {
        dispatch(getAllTasksStart());
        const { data } = await axios.get(tasksEndpoint);
        dispatch(getAllTasksSuccess(data));
    } catch(error) {
        dispatch(getAllTasksFailed([error]));
    }
}



// Add Sub Task
export const addSubTaskStart = () => ({
  type: ADD_SUB_TASK_START,
});

export const addSubTaskSuccess = (payload) => ({
  type: ADD_SUB_TASK_SUCCESS,
  payload
});

export const addSubTaskFailed = (payload) => ({
  type: ADD_SUB_TASK_FAILED,
  payload
});

export const addSubTask = (subTask) => async (dispatch)  => {
    try {
        dispatch(addSubTaskStart());

        const { taskId,  title } = subTask;

        await axios.post(`${subTasksEndpoint}`, { title, taskId });
        
        dispatch(addSubTaskSuccess());
        dispatch(getTask(taskId));
    } catch(error) {
        dispatch(addSubTaskFailed([error]));
    }
}



// Update Sub Task
export const updateSubTaskStart = () => ({
  type: UPDATE_SUB_TASK_START,
});

export const updateSubTaskSuccess = (payload) => ({
  type: UPDATE_SUB_TASK_SUCCESS,
  payload
});

export const updateSubTaskFailed = (payload) => ({
  type: UPDATE_SUB_TASK_FAILED,
  payload
});

export const updateSubTask = (subTask) => async (dispatch)  => {
    try {
        dispatch(updateSubTaskStart());

        const { taskId, subTaskId, title, completed } = subTask;

        await axios.put(`${subTasksEndpoint}/${subTaskId}`, { title, completed });
        
        dispatch(updateSubTaskSuccess());
        dispatch(getTask(taskId));
    } catch(error) {
        dispatch(updateSubTaskFailed([error]));
    }
}


// Delete Sub Task
export const deleteSubTaskStart = () => ({
  type: DELETE_SUB_TASK_START,
});

export const deleteSubTaskSuccess = (payload) => ({
  type: DELETE_SUB_TASK_SUCCESS,
  payload
});

export const deleteSubTaskFailed = (payload) => ({
  type: DELETE_SUB_TASK_FAILED,
  payload
});

export const deleteSubTask = (subTask) => async (dispatch)  => {
    try {
        dispatch(deleteSubTaskStart());

        const { subTaskId, taskId } = subTask;

        await axios.delete(`${subTasksEndpoint}/${subTaskId}`);
        
        dispatch(deleteSubTaskSuccess());
        dispatch(getTask(taskId));
    } catch(error) {
        dispatch(deleteSubTaskFailed([error]));
    }
}