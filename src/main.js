import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { createRouter, createWebHistory } from "vue-router";
import Contact from "./views/Contact.vue";
import Home from "./views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/contact",
      component: Contact,
    },
  ],
});
library.add(fas, fab, far);

createApp(App)
  .use(bootstrap)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
