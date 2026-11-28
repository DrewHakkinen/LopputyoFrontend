import type { TrainingsData } from "./type";


export function getTrainings() {
    return fetch(import.meta.env.VITE_API_URL + "/trainings")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error when fetching trainings");
            }

            return response.json();
        })
}

export function getTrainingsplusCus() {
    return fetch(import.meta.env.VITE_API_URL + "/gettrainings")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error when fetching trainings and customer");
            }

            return response.json();
        })
}

export function addTrainings(training: TrainingsData) {

    return fetch(import.meta.env.VITE_API_URL + "/trainings", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(training)
    })
        .then(response => {
            if (!response.ok)
                throw new Error("Error when adding a new training");
            return response.json;
        })
}

export function deleteTrainings(url: string) {
    return fetch(url, { method: 'DELETE' })
        .then(response => {
            if (!response.ok)
                throw new Error("Error when deleting a training");
            return response.json();
        })
}