import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "./components/MainPage.vue";
import HeadlinersPage from "./components/HeadlinersPage.vue";
import InfoPage from "./components/InfoPage.vue";
import MapPage from "./components/MapPage.vue";
import ContactsPage from "./components/ContactsPage.vue";
import TicketsPage from "./components/TicketsPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/mainpage', component: MainPage, alias: '/'},
        {path: '/headliners', component: HeadlinersPage},
        {path: '/info', component: InfoPage},
        {path: '/map', component: MapPage},
        {path: '/contacts', component: ContactsPage},
        {path: '/tickets', component: TicketsPage},
    ]
})