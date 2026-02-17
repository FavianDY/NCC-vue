import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout.vue";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Timeline from "../components/Timeline.vue";
import Information from "../components/Information.vue";
import Register from "../components/Register.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: Home },
      { path: "about", component: About },
      { path: "timeline", component: Timeline },
      { path: "information", component: Information },
      { path: "register", component: Register },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
