import React from "react";
import PropTypes from "prop-types";
import { Link  } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import MoreButton from "./MoreButton";

const useStyles = makeStyles((theme) => ({
    completed: {
        textDecoration: "line-through"
    }
}));

export default function TasksListItem(props) {
  const { task, handleToggle, handleEdit, handleDelete, to } = props;
  const classes = useStyles();

  return (
      <ListItem button component={to ? Link : null} to={to} data-test-id="task-list-item">
        <ListItemText primary={task.title} className={task.completed ? classes.completed : ""} />
        <ListItemSecondaryAction>   
          <Checkbox
            onChange={() => { handleToggle(task); }}
            checked={task.completed}
          />
          <MoreButton task={task} handleEdit={handleEdit} handleDelete={handleDelete}/>
        </ListItemSecondaryAction>
      </ListItem>
  );
}

TasksListItem.defaultProps = {
    handleToggle: () => {},
    handleEdit: () => {},
    handleDelete: () => {}
};

TasksListItem.propTypes = {
    task: PropTypes.object,
    to: PropTypes.string,
    handleToggle: PropTypes.func,
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
};