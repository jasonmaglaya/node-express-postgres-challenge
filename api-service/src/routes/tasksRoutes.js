const router = require("express").Router();
const { getTaskValidation, addTaskValidation, updateTaskValidation, deleteTaskValidation } = require('../middlewares/validations/taskValidation');
const { getAllTasks, getTask, addTask, updateTask, deleteTask } = require('../controllers/tasksController');
const { getAllSubTasksValidation, addSubTaskValidation } = require('../middlewares/validations/subTasksValidations');
const { getAllSubTasks, addSubTask } = require('../controllers/subTasksController');

router.get('/', getAllTasks);
router.route('/:taskId').get(getTaskValidation, getTask);
router.route('/').post(addTaskValidation, addTask);
router.route('/:taskId').put(updateTaskValidation, updateTask);
router.route('/:taskId').delete(deleteTaskValidation, deleteTask);
router.route('/:taskId/sub-tasks').get(getAllSubTasksValidation, getAllSubTasks);
router.route('/:taskId/sub-tasks').post(addSubTaskValidation, addSubTask);

module.exports = router;