import { TextField } from "@mui/material"
import type { CustomerData } from "../type"
import DialogContent from "@mui/material/DialogContent"


type CustomerFormProps = {
    customer: CustomerData
    setCustomer: React.Dispatch<React.SetStateAction<CustomerData>>
}

function CustomerForm({ customer, setCustomer }: CustomerFormProps) {
    return (
        <DialogContent>
            <TextField
                required
                margin="dense"
                label="Firstname"
                value={customer.firstname}
                onChange={e => setCustomer({ ...customer, firstname: e.target.value })}
                fullWidth
                variant="standard"
            />
            <TextField
                required
                margin="dense"
                label="Lastname"
                value={customer.lastname}
                onChange={e => setCustomer({ ...customer, lastname: e.target.value })}
                fullWidth
                variant="standard"
            />
            <TextField
                required
                margin="dense"
                label="Street address"
                value={customer.streetaddress}
                onChange={e => setCustomer({ ...customer, streetaddress: e.target.value })}
                fullWidth
                variant="standard"
            />
            <TextField
                required
                margin="dense"
                label="Postcode"
                value={customer.postcode}
                onChange={e => setCustomer({ ...customer, postcode: e.target.value })}
                fullWidth
                variant="standard"
            />
            <TextField
                required
                margin="dense"
                label="City"
                value={customer.city}
                onChange={e => setCustomer({ ...customer, city: e.target.value })}
                fullWidth
                variant="standard"
            />
            <TextField
                required
                margin="dense"
                label="Email"
                value={customer.email}
                onChange={e => setCustomer({ ...customer, email: e.target.value })}
                fullWidth
                variant="standard"
            />
            <TextField
                required
                margin="dense"
                label="Phone"
                value={customer.phone}
                onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                fullWidth
                variant="standard"
            />

        </DialogContent>
    );
}

export default CustomerForm;