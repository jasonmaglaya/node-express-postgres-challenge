import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ConfirmDialog from "./ConfirmDialog";

const ITEM_HEIGHT = 48;

export default function MoreButton(props) {
  const { task, handleEdit, handleDelete, size } = props;
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onEditClick = () => {
    handleEdit(task);
    handleClose();
  }

  const onDeleteClick = () => {
    setDeleteDialogOpen(true);
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteDialogOkYes = () => {
    handleDelete(task);
    setDeleteDialogOpen(false);
  };

  const handleDeleteDialogCancelNo = () => {
    setDeleteDialogOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClick} data-test-id="task-more-button">
        <MoreVertIcon fontSize={size} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={onEditClick} data-test-id="task-more-button-edit">
            Edit
        </MenuItem>
        <MenuItem onClick={onDeleteClick} data-test-id="task-more-button-delete">
            Delete
        </MenuItem>
      </Menu>
      <ConfirmDialog 
        message={t("MoreButton.confirmDelete", { taskName: task?.title })} 
        buttons="YesNo" 
        open={deleteDialogOpen} 
        handleOkYes={handleDeleteDialogOkYes}
        handleCancelNo={handleDeleteDialogCancelNo}>
      </ConfirmDialog>
    </>
  );
}

MoreButton.defaultProps = {
    handleEdit: () => {},
    handleDelete: () => {}
};

MoreButton.propTypes = {
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
    size: PropTypes.string
};