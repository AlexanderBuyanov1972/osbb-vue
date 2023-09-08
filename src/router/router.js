import PageReadOwner from "@/pages/PageReadOwner.vue";
import PageReadOwnership from "@/pages/PageReadOwnership.vue";
import PageOwners from "@/pages/PageOwners.vue";
import PageOwnerships from "@/pages/PageOwnerships.vue";
import PageMain from "@/pages/PageMain.vue";
import PageRegistryOwners from "@/pages/PageRegistryOwners.vue";
import PageRegistryOwnerships from "@/pages/PageRegistryOwnerships.vue";
import PageCreateOwnership from "@/pages/PageCreateOwnership.vue";
import PageUpdateOwnership from "@/pages/PageUpdateOwnership.vue";
import PageShowOwnership from "@/pages/PageShowOwnership.vue";
import PageEditOwner from "@/pages/PageEditOwner.vue";
import PageEditOwnership from "@/pages/PageEditOwnership.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: PageMain },
  { path: "/owner/:id", component: PageReadOwner },
  { path: "/ownership/:id", component: PageReadOwnership },
  { path: "/owners", component: PageOwners },
  { path: "/ownerships", component: PageOwnerships },
  { path: "/registry/owners", component: PageRegistryOwners },
  { path: "/registry/ownerships", component: PageRegistryOwnerships },
  { path: "/create/ownership", component: PageCreateOwnership },
  { path: "/update/ownership/:id", component: PageUpdateOwnership },
  { path: "/show/ownership/:id", component: PageShowOwnership },
  { path: "/edit/owner/:id", component: PageEditOwner },
  { path: "/edit/ownership/:id", component: PageEditOwnership },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
