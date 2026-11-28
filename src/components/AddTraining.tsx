import { useState } from "react";
import type { TrainingsData } from "../type";


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
        addTrainings
    }
}