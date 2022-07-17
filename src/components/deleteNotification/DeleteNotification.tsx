import React, {FC} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./deleteNotification.scss"

interface PropsTypes {
    heading: string,
    text: string,
    open: boolean,
    setOpen: (params: boolean) => void,
    removeEntity: () => void
}


export const DeleteNotification: FC<PropsTypes> = ({open, setOpen, heading, text, removeEntity}) => {
    const handleClose = () => setOpen(false);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className="delete_notification">
                <DialogTitle id="alert-dialog-title" dangerouslySetInnerHTML={{__html: heading}}/>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">Отмена</Button>
                    <Button onClick={removeEntity} className="remove_button">
                        Удалить
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

