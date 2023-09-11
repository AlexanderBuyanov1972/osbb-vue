import PageReadOwner from "@/pages/read/PageReadOwner.vue";
import PageReadOwnership from "@/pages/read/PageReadOwnership.vue";
import PageReadOwners from "@/pages/read/PageReadOwners.vue";
import PageReadOwnerships from "@/pages/read/PageReadOwnerships.vue";
import PageMain from "@/pages/PageMain.vue";
import PageRegistryOwners from "@/pages/registry/PageRegistryOwners.vue";
import PageRegistryOwnerships from "@/pages/registry/PageRegistryOwnerships.vue";
import PageCreateOwnership from "@/pages/PageCreateOwnership.vue";
import PageUpdateOwnership from "@/pages/PageUpdateOwnership.vue";
import PageShowOwnership from "@/pages/PageShowOwnership.vue";
import PageEditOwner from "@/pages/edit/PageEditOwner.vue";
import PageEditOwnership from "@/pages/edit/PageEditOwnership.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: PageMain },
  { path: "/owner/:id", component: PageReadOwner },
  { path: "/ownership/:id", component: PageReadOwnership },
  { path: "/owners", component: PageReadOwners },
  { path: "/ownerships", component: PageReadOwnerships },
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
