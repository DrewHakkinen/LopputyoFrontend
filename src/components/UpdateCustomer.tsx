import { useState } from "react";
import type { CustomerData } from "../type";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CustomerForm from "./CustomerForm";


type UpdateCustomerProps = {
    fetchCustomers: () => void;
    customerData: CustomerData;
}

export default function UpdateCustomer(props: UpdateCustomerProps) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState<CustomerData>({} as CustomerData);

    const handleClickOpen = () => {
        setOpen(true);
        setCustomer({
            firstname: props.customerData.firstname,
            lastname: props.customerData.lastname,
            streetaddress: props.customerData.streetaddress,
            postcode: props.customerData.postcode,
            city: props.customerData.city,
            email: props.customerData.email,
            phone: props.customerData.phone
        })
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        fetch(props.customerData._links?.self.href || "", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer)
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Error when adding a new customer");
                return response.json;
            })
            .then(() => props.fetchCustomers())
            .catch(err => console.error(err))
        handleClose();
    };

    return (
        <>
            <IconButton onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Customer</DialogTitle>
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