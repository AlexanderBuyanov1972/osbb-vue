import PageOwner from "@/pages/PageOwner.vue";
import PageOwnership from "@/pages/PageOwnership.vue";
import PageOwners from "@/pages/PageOwners.vue";
import PageOwnerships from "@/pages/PageOwnerships.vue";
import PageMain from "@/pages/PageMain.vue";
import PageRegistryOwners from "@/pages/PageRegistryOwners.vue";
import PageRegistryOwnerships from "@/pages/PageRegistryOwnerships.vue";
import PageCreateOwner from "@/pages/PageCreateOwner.vue";
import PageCreateOwnership from "@/pages/PageCreateOwnership.vue";
import PageEditOwner from "@/pages/PageEditOwner.vue";
import PageEditOwnership from "@/pages/PageEditOwnership.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: PageMain },
  { path: "/owner/:id", component: PageOwner },
  { path: "/ownership/:id", component: PageOwnership },
  { path: "/owners", component: PageOwners },
  { path: "/ownerships", component: PageOwnerships },
  { path: "/registry/owners", component: PageRegistryOwners },
  { path: "/registry/ownerships", component: PageRegistryOwnerships },
  { path: "/create/owner", component: PageCreateOwner },
  { path: "/create/ownership", component: PageCreateOwnership },
  { path: "/edit/owner/:id", component: PageEditOwner },
  { path: "/edit/ownership/:id", component: PageEditOwnership },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
