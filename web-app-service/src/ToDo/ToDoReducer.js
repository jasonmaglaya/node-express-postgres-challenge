import {
  ADD_TASK_START,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED,

  GET_TASK_START,
  GET_TASK_SUCCESS,
  GET_TASK_FAILED,

  UPDATE_TASK_START,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,

  DELETE_TASK_START,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,

  GET_ALL_TASKS_START, 
  GET_ALL_TASKS_SUCCESS, 
  GET_ALL_TASKS_FAILED,

  ADD_SUB_TASK_START,
  ADD_SUB_TASK_SUCCESS,
  ADD_SUB_TASK_FAILED,

  UPDATE_SUB_TASK_START,
  UPDATE_SUB_TASK_SUCCESS,
  UPDATE_SUB_TASK_FAILED,

  DELETE_SUB_TASK_START,
  DELETE_SUB_TASK_SUCCESS,
  DELETE_SUB_TASK_FAILED
} from "./ToDoActions";

const initialState = {
  task: null,
  taskList: [],
  errors:[],
};

const ToDoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      // Add Task
      case ADD_TASK_START:
        return {
          ...state,
          errors: [],
        };
      case ADD_TASK_SUCCESS:
        return {
          ...state,
          errors: [],
        };
      case ADD_TASK_FAILED:
        return {
          ...state,
          errors: payload
        };


      // Get Task
      case GET_TASK_START:
        return {
          ...state,
          errors: [],
        };
      case GET_TASK_SUCCESS:
        return {
          ...state,
          errors: [],
          task: payload.data,
        };
      case GET_TASK_FAILED:
        return {
          ...state,
          errors: payload,
          task: null
        };


      // Update Task
      case UPDATE_TASK_START:
        return {
          ...state,
          errors: [],
        };
      case UPDATE_TASK_SUCCESS:
        return {
          ...state,
          errors: []
        };
      case UPDATE_TASK_FAILED:
        return {
          ...state,
          errors: payload
        };

      // Update Task
      case DELETE_TASK_START:
        return {
          ...state,
          errors: [],
        };
      case DELETE_TASK_SUCCESS:
        return {
          ...state,
          errors: []
        };
      case DELETE_TASK_FAILED:
        return {
          ...state,
          errors: payload
        };

      
      // Get All Tasks
      case GET_ALL_TASKS_START:
        return {
          ...state,
          errors: [],
        };
      case GET_ALL_TASKS_SUCCESS:
        return {
          ...state,
          errors: [],
          taskList: payload.data.result
        };
      case GET_ALL_TASKS_FAILED:
        return {
          ...state,
          errors: payload,
          taskList: []
        };

      // Add Sub Task
      case ADD_SUB_TASK_START:
        return {
          ...state,
          errors: [],
        };
      case ADD_SUB_TASK_SUCCESS:
        return {
          ...state,
          errors: []
        };
      case ADD_SUB_TASK_FAILED:
        return {
          ...state,
          errors: payload
        };


      // Update Sub Task
      case UPDATE_SUB_TASK_START:
        return {
          ...state,
          errors: [],
        };
      case UPDATE_SUB_TASK_SUCCESS:
        return {
          ...state,
          errors: []
        };
      case UPDATE_SUB_TASK_FAILED:
        return {
          ...state,
          errors: payload
        };


      // Update Sub Task
      case DELETE_SUB_TASK_START:
        return {
          ...state,
          errors: [],
        };
      case DELETE_SUB_TASK_SUCCESS:
        return {
          ...state,
          errors: []
        };
      case DELETE_SUB_TASK_FAILED:
        return {
          ...state,
          errors: payload
        };

      default:
        return state;
    }
  };

  export default ToDoReducer;