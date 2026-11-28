import type { CustomerData } from "./type";


export function getCustomers() {
    return fetch(import.meta.env.VITE_API_URL + "/customers")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error when fetching customers");
            }

            return response.json();
        })
}

export function getCustomerbyId() {
    return fetch(import.meta.env.VITE_API_URL + "/customers/{id}")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error when fetching customer");
            }

            return response.json();
        })
}

export function deleteCustomer(url: string) {
    return fetch(url, { method: 'DELETE' })
        .then(response => {
            if (!response.ok)
                throw new Error("Error when deleting a customer");
            return response.json();
        })
}

export function addCustomer(customer: CustomerData) {
    return fetch(import.meta.env.VITE_API_URL + "/customers", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    })
        .then(response => {
            if (!response.ok)
                throw new Error("Error when addomg a new customer");
            return response.json;
        })
}