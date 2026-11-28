import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import type { CustomerData } from "../type";
//import IconButton from "@mui/material/IconButton";
//import DeleteIcon from "@mui/icons-material/Delete";
import Snackbar from "@mui/material/Snackbar";
import { getCustomers } from "../customerapi";
import AddCustomer from "./AddCustomer";


function CustomerList() {
    const [customers, setCustomers] = useState<CustomerData[] | null>();
    const [open, setOpen] = useState(false);

    const columns: GridColDef[] = [
        { field: 'firstname', headerName: 'Firstname' },
        { field: 'lastname', headerName: 'Lastname' },
        { field: 'streetaddress', headerName: 'Street address' },
        { field: 'postcode', headerName: 'Postcode' },
        { field: 'city', headerName: 'City' },
        { field: 'email', headerName: 'Email' },
        { field: 'phone', headerName: 'Phone' },
        {
            field: '_links.self.href',
            headerName: ' '
            //renderCell: (params: GridRenderCellParams) =>
            //    <IconButton onClick={() => handleDelete(params.row._links.self.href)}>
            //        <DeleteIcon color="error" />
            //    </IconButton>
        },
        {
            field: '_links.customer.href',
            headerName: ' '
            //renderCell: (params: GridRenderCellParams) =>
            //    <UpdateCustomer fetchCustomers={fetchCustomers} customerData={params.row} />
        },
        {
            field: '_links.trainings.href,',
            headerName: ' '
        }
    ]

    const fetchCustomers = () => {
        getCustomers()
            .then(data => setCustomers(data._embedded.customers))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchCustomers();
    }, []);

    // const handleDelete = (url: string) => {
    //    if (window.confirm("Are you sure")) {
    //         deleteCustomer(url)
    //             .then(() => {
    //                 fetchCustomers();
    //                 setOpen(true);
    //             })
    //             .catch(err => console.error(err))
    //     }
    //}

    return (
        <>
            <AddCustomer fetchCustomers={fetchCustomers} />
            <div style={{ width: '90%', height: 500, marginTop: 10 }}>
                <DataGrid
                    rows={customers || []}
                    columns={columns}
                    autoPageSize
                    getRowId={row => row._links.self.href}
                />
            </div>
            <Snackbar
                open={open}
                message="Car deleted successfully"
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            />
        </>
    );
}

export default CustomerList;