import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

export default function ConfirmDialog(props) {
    const { title, message, buttons, handleOkYes, handleCancelNo, open } = props;
    const { t } = useTranslation();

    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <DialogTitle>{title}</DialogTitle>        
                <DialogContent>                
                    <Typography variant="body1">{message}</Typography>
                </DialogContent>
                <DialogActions>
                    {buttons === "YesNo" ? 
                        <>
                            <Button onClick={handleCancelNo}>
                                {t("ConfirmDialog.no")}
                            </Button>                
                            <Button variant="contained" color="secondary" onClick={handleOkYes} data-test-id="confirm-dialog-yes">
                                {t("ConfirmDialog.yes")}
                            </Button>
                        </>
                        :<>
                            <Button onClick={handleCancelNo}>
                                {t("ConfirmDialog.cancel")}
                            </Button>
                            <Button variant="contained" color="secondary" onClick={handleOkYes}>
                                {t("ConfirmDialog.ok")}
                            </Button>
                        </>
                    }
                </DialogActions>
        </Dialog>
    );
}

ConfirmDialog.defaultProps = {
    title: "Confirm",
    message: "Are you sure?",
    buttons: "OkCancel",
    handleOkYes: () => {}
};

ConfirmDialog.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    buttons: PropTypes.string,    
    handleOkYes: PropTypes.func,
};