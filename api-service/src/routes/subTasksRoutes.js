const router = require("express").Router();
const { getSubTaskValidation, addSubTaskValidation, updateSubTaskValidation, deleteSubTaskValidation } = require('../middlewares/validations/subTasksValidations');
const { addSubTask, getSubTask, updateSubTask, deleteSubTask } = require('../controllers/subTasksController');

router.route('/').post(addSubTaskValidation, addSubTask);
router.route('/:subTaskId').get(getSubTaskValidation, getSubTask);
router.route('/:subTaskId').put(updateSubTaskValidation, updateSubTask);
router.route('/:subTaskId').delete(deleteSubTaskValidation, deleteSubTask);

module.exports = router;