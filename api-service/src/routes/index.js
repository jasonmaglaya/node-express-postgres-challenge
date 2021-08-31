const router = require("express").Router();
const tasksRoutes = require('./tasksRoutes');
const subTasksRoutes = require('./subTasksRoutes');

router.use('/tasks', tasksRoutes);
router.use('/sub-tasks', subTasksRoutes);

module.exports = router;