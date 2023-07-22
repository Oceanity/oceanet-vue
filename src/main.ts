import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VueSilentbox from "vue-silentbox";
import "vue-silentbox/dist/style.css";

createApp(App).use(router).use(VueSilentbox).mount("#app");
