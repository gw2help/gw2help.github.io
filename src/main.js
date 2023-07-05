import { createApp, onUnmounted } from "vue";
import App from "./App.vue";

// NAVIGATION
import router from "./router";

// BOOTSTRAP
import 'bootstrap';

createApp(App).use(router).mount('#app')
