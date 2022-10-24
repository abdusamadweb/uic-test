import { defineStore } from "pinia";

export const useStore = defineStore("main", () => {
    const workersList = [
        {
            id: 1,
            name: 'Shuxrat Mannopov',
            position: 'IT',
            gender: 'male',
            dateOfBrith: '02-22-2000'
        },
        {
            id: 2,
            name: 'Farxod Ulugbekov',
            position: 'marketing',
            gender: 'male',
            dateOfBrith: '02-22-2001'
        },
        {
            id: 3,
            name: 'Saboxat Nurmatova',
            position: 'accounting',
            gender: 'female',
            dateOfBrith: '04-12-1999'
        },
        {
            id: 4,
            name: 'Munisa Ganiyeva',
            position: 'IT',
            gender: 'female',
            dateOfBrith: '12-03-1997'
        },
        {
            id: 5,
            name: 'Doniyor Ergashev',
            position: 'accounting',
            gender: 'male',
            dateOfBrith: '12-05-1999'
        },
        {
            id: 6,
            name: 'Ozodbek Qayumov',
            position: 'IT',
            gender: 'male',
            dateOfBrith: '01-03-2000'
        },
    ]

    let totalWorkers = null
    let menWorkers = null
    let womanWorkers = null
    let itWorkers = null
    let marketingWorkers = null
    let accountingWorkers = null

    return {
        workersList,
        totalWorkers,
        menWorkers,
        womanWorkers,
        itWorkers,
        marketingWorkers,
        accountingWorkers
    }
})