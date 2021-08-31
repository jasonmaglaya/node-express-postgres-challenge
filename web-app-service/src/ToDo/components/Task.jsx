import React, { useEffect, useState }  from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { selectToDo } from "../ToDoSelectors";
import MoreButton from "./MoreButton";
import TasksList from "./TasksList";
import TaskEditor from "./TaskEditor";
import { getTask, updateTask, deleteTask, addSubTask, updateSubTask, deleteSubTask } from "../ToDoActions";

export default function Tasks({ match }) {
    const history = useHistory();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const taskId = match.params.taskId;
    const { task } = useSelector(selectToDo);
    const [taskEditorOpen, setTaskEditorOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState();
    const [showDetails, setShowDetails] = useState(true);

    const handleToggle = (subTask) => {
        subTask.completed = !subTask.completed;
        dispatch(updateSubTask(subTask));
    };

    const handleEdit = (tsk, withDetails) => {
        setTaskToEdit(tsk);
        setShowDetails(withDetails);
        setTaskEditorOpen(true);
    };

    const handleDeleteTask = (tsk) => {
        dispatch(deleteTask(tsk.taskId))
        .then(() => {
            history.push("/");
        });
    };

    const handleDeleteSubTask = (tsk) => {
        dispatch(deleteSubTask(tsk));
    };

    const handleTaskEditorClose = () => {
        setTaskEditorOpen(false);
        setTaskToEdit(null);
    };

    const handleTaskEditorSave = (tsk) => {        
        if(!taskToEdit) {
            const { taskId } = task;
            const { title } = tsk;
            dispatch(addSubTask({ title, taskId }))
            .then(() => {
                setTaskEditorOpen(false);
            });
            return;
        }
        
        if(tsk.subTaskId){
            dispatch(updateSubTask(tsk))
            .then(() => {
                setTaskEditorOpen(false);
            });
        } else {
            dispatch(updateTask(tsk))
            .then(() => {
                setTaskEditorOpen(false);                
            });
        }
        setTaskToEdit(null);
    };

    const handleAddSubTask = () => {
        setShowDetails(false);
        setTaskToEdit(null);
        setTaskEditorOpen(true);
    };
    
    useEffect(() => {
        dispatch(getTask(taskId));
    }, [dispatch, taskId]);

    return (
        <div>
            <Grid container direction="row" justifyContent="space-between">
                <div>
                    <IconButton component={Link} to="/">
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div>
                    <MoreButton
                        task={task}
                        handleEdit={(t) => { handleEdit(t, true); }}
                        handleDelete={handleDeleteTask}>
                    </MoreButton>
                </div>
            </Grid>
            <Typography variant="h5" gutterBottom>{task?.title}</Typography>
            <Typography variant="body1" gutterBottom>{task?.details}</Typography>
            <Grid container direction="row" justifyContent="space-between">
                <Typography variant="h6" gutterBottom>{t("ToDo.subTask_plural")}</Typography>
                {task?.subTasks.length ? 
                <div>
                    <Button size="small" variant="contained" color="secondary" onClick={handleAddSubTask}>
                        {t("TaskEditor.addSubTask")}
                    </Button>
                </div> : <></>}
            </Grid>
            <TasksList
                tasks={task?.subTasks}
                handleToggle={handleToggle}
                handleEdit={(t) => { handleEdit(t, false); }}
                handleDelete={handleDeleteSubTask}
                handleAdd={handleAddSubTask} />
            <TaskEditor
                withDetails={showDetails}
                task={taskToEdit} 
                open={taskEditorOpen} 
                handleSave={handleTaskEditorSave} 
                handleClose={handleTaskEditorClose} />
        </div>
    );
}