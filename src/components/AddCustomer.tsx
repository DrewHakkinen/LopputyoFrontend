import { useState } from "react";
import type { CustomerData } from "../type";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import CustomerForm from "./CustomerForm";


type AddCustomerProps = {
    fetchCustomers: () => void;
}

export default function AddCustomer(props: AddCustomerProps) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState<CustomerData>({} as CustomerData);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        AddCustomer(customer)
            .then(() => props.fetchCustomers())
            .catch(err => console.error(err))
        handleClose();
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Customer
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Customer</DialogTitle>
                <CustomerForm customer={customer} setCustomer={setCustomer} />
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