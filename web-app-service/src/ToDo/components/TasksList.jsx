import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import TasksListItem from "./TasksListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function TasksList(props) {
  const { tasks, handleToggle, handleEdit, handleDelete, handleAdd, to } = props;
  const classes = useStyles();
  return (
    <>
    <List dense className={classes.root}>
      {tasks.map((t) => {
        return <TasksListItem key={t.subTaskId || t.taskId} 
          task={t} 
          handleToggle={handleToggle} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} 
          to={to ? `${to}/${t.subTaskId || t.taskId}` : null}>          
        </TasksListItem>
      })}
    </List>
    {!tasks.length &&
      <Grid container justifyContent="center">
        <Fab color="secondary" onClick={handleAdd} data-test-id="task-list-add-button">
          <AddIcon />
        </Fab>
      </Grid>
    }
    </>
  );
}

TasksList.defaultProps = {
    tasks: [],
    handleToggle: () => {},
    handleEdit: () => {},
    handleDelete: () => {},
    handleAdd: () => {}
};

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    to: PropTypes.string,
    handleToggle: PropTypes.func,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
    handleAdd: PropTypes.func,
};