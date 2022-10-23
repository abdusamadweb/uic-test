import { createRouter, createWebHistory } from 'vue-router';
import mainPage from "@/pages/MainPage";
import workers from "@/pages/Workers";
import singleWorker from "@/pages/SingleWorker";
import addWorker from "@/pages/AddWorker";
import editWorker from "@/pages/EditWorker";

const routes = [
    {
        path: '/',
        component: mainPage,
        name: 'main'
    },
    {
        path: '/workers',
        component: workers,
        name: 'workers'
    },
    {
        path: '/workers/:id',
        component: singleWorker,
        name: 'single-worker'
    },
    {
        path: '/edit-worker/:id',
        component: editWorker,
        name: 'edit-worker'
    },
    {
        path: '/add-worker',
        component: addWorker,
        name: 'add-worker'
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;