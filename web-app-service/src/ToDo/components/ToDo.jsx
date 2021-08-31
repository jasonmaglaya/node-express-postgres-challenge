import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getAllTasks } from "../ToDoActions";
import { selectToDo } from "../ToDoSelectors";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TasksList from "./TasksList";
import TaskEditor from "./TaskEditor";

import { addTask, updateTask, deleteTask } from "../ToDoActions";

export default function ToDo() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { taskList } = useSelector(selectToDo);
    const [taskEditorOpen, setTaskEditorOpen] = useState(false);
    const [task, setTask] = useState();

    useEffect(() => {
        dispatch(getAllTasks());
    },[dispatch]);

    const handleAddTask = () => {
        setTaskEditorOpen(true);
    };

    const handleTaskEditorClose = () => {
        setTaskEditorOpen(false);
    };

    const handleTaskEditorSave = (task) => {
        if(task.taskId) {
            dispatch(updateTask(task))
            .then(() => {
                setTaskEditorOpen(false);
            });
        } else {
            dispatch(addTask(task))
            .then(() => {
                setTaskEditorOpen(false);
            });
        }
    };

    const handleToggle = (task) => {
        task.completed = !task.completed;
        dispatch(updateTask(task));
    };

    const handleEdit = (task) => {
        setTask(task);
        setTaskEditorOpen(true);
    };

    const handleDelete = (task) => {
        dispatch(deleteTask(task.taskId));
    };

    return (
        <div data-test-id="todo">
            <Grid container direction="row" justifyContent="space-between">
                <Typography variant="h4" gutterBottom>
                    {t("ToDo.task_plural")}
                </Typography>
                {taskList.length ? 
                <div>
                    <Button size="medium" variant="contained" color="secondary" onClick={handleAddTask}>
                        {t("TaskEditor.addTask")}
                    </Button>
                </div> : <></>}
            </Grid>
            <TasksList
                to="/tasks"
                tasks={taskList} 
                handleToggle={handleToggle} 
                handleEdit={handleEdit} 
                handleDelete={handleDelete} 
                handleAdd={handleAddTask}/>
            <TaskEditor
                withDetails 
                task={task} 
                open={taskEditorOpen} 
                handleSave={handleTaskEditorSave} 
                handleClose={handleTaskEditorClose} />
        </div>
    );
}