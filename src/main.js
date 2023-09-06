import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import directives from "@/directives/index";
import store from "@/store/index";
import elements from "@/ui/index";

const app = createApp(App);

elements.forEach((element) => {
  app.component(element.name, element);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
