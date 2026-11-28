import { useState } from "react";
import type { TrainingsData } from "../type";
import { addTrainings } from "../trainingsapi";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";


type AddTrainingsProps = {
    fetchTrainings: () => void;
}

export default function AddTrainings(props: AddTrainingsProps) {
    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState<TrainingsData>({} as TrainingsData);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        addTrainings(training)
            .then(() => props.fetchTrainings())
            .catch(err => console.error(err))
        handleClose();
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Training
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Training</DialogTitle>
                <TrainingsForm training={training} setTraining={setTraining} />
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}