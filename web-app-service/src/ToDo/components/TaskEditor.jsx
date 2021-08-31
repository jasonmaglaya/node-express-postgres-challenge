import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";

export default function TaskEditor(props) {
    const { task, handleSave, open, handleClose, withDetails } = props;
    const { t } = useTranslation();
    const { register, handleSubmit, setValue, clearErrors, reset } = useForm();
    const [ errors, setErrors ] = useState();

    const onSubmit = (data) => {
        const { taskId, subTaskId } = task || {};
        const { title, details } = data;
        reset();
        handleSave({ taskId, subTaskId, title, details });
        handleClose();
    };

    const onError = (err) => {
        setErrors(err);
    };

    const onClose = () => {
        clearErrors("title");
        reset();
        handleClose();
    };

    useEffect(() => {
        const { title, details } = task || {};
        setValue("title", title, { shouldValidate: true });
        setValue("details", details);
    }, [setValue, task]);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth data-test-id="task-editor">
            <DialogTitle>{t("ToDo.task")}</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <DialogContent>
                    <TextField
                        autoFocus
                        label={t("TaskEditor.title")}
                        fullWidth
                        color="secondary"
                        {...register("title", { required: true })}
                        error={errors?.title}
                        helperText={errors?.title && t("TaskEditor.titleRequired")}
                        data-test-id="task-editor-title"
                    />
                    {withDetails && <TextField
                        multiline
                        margin="dense"
                        label={t("TaskEditor.details")}
                        fullWidth
                        color="secondary"
                        {...register("details")}
                        data-test-id="task-editor-details"
                    />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="secondary">
                        {t("TaskEditor.cancel")}
                    </Button>
                    <Button variant="contained" color="secondary" type="submit" data-test-id="task-editor-save">
                        {t("TaskEditor.save")}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

TaskEditor.defaultProps = {
    open: false,
    handleSave: () => {},
    handleClose: () => {}
};

TaskEditor.propTypes = {
    open: PropTypes.bool,
    withDetails: PropTypes.bool,
    handleSave: PropTypes.func,    
    handleClose: PropTypes.func,
};