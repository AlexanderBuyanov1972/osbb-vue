import PageShowQuestionnaire from "@/pages/read/PageShowQuestionnaire.vue";
import PageShowQuestionnaires from "@/pages/read/PageShowQuestionnaires.vue";
import PageReadOwner from "@/pages/read/PageReadOwner.vue";
import PageReadOwnership from "@/pages/read/PageReadOwnership.vue";
import PageReadOwners from "@/pages/read/PageReadOwners.vue";
import PageReadOwnerships from "@/pages/read/PageReadOwnerships.vue";
import PageMain from "@/pages/PageMain.vue";
import PageRegistryOwners from "@/pages/registry/PageRegistryOwners.vue";
import PageRegistryOwnerships from "@/pages/registry/PageRegistryOwnerships.vue";
import PageCreateEntryOwnership from "@/pages/entry/PageCreateEntryOwnership.vue";
import PageUpdateEntryOwnership from "@/pages/entry/PageUpdateEntryOwnership.vue";
import PageShowEntryOwnership from "@/pages/entry/PageShowEntryOwnership.vue";
import PageEditOwner from "@/pages/edit/PageEditOwner.vue";
import PageEditOwnership from "@/pages/edit/PageEditOwnership.vue";
import PageAnswerForQuestionnaire from "@/pages/questionnaire/PageAnswerForQuestionnaire.vue";
import PageCreateQuestionnaire from "@/pages/questionnaire/PageCreateQuestionnaire.vue";
import PageResultQuestionnaire from "@/pages/questionnaire/PageResultQuestionnaire.vue";
import { createRouter, createWebHistory } from "vue-router";
import {
  PAGE_MAIN,
  PAGE_SHOW_OWNER,
  PAGE_SHOW_OWNERSHIP,
  PAGE_SHOW_OWNERS,
  PAGE_SHOW_OWNERSHIPS,
  PAGE_REGISTRY_OWNERS,
  PAGE_REGISTRY_OWNERSHIPS,
  PAGE_CREATE_ENTRY_OWNERSHIP,
  PAGE_UPDATE_ENTRY_OWNERSHIP,
  PAGE_SHOW_ENTRY_OWNERSHIP,
  PAGE_EDIT_OWNER,
  PAGE_EDIT_OWNERSHIP,
  PAGE_ANSWER_FOR_QUESTIONNAIRE,
  PAGE_CREATE_QUESTIONNAIRE,
  PAGE_SHOW_QUESTIONNAIRES,
  PAGE_SHOW_QUESTIONNAIRE,
  PAGE_RESULT_QUESTIONNAIRE,
} from "./apiRouter.js";

const routes = [
  // main
  { path: PAGE_MAIN, component: PageMain },
  // ownership
  { path: PAGE_EDIT_OWNERSHIP + "/:id", component: PageEditOwnership },
  { path: PAGE_SHOW_OWNERSHIPS, component: PageReadOwnerships },
  { path: PAGE_SHOW_OWNERSHIP + "/:id", component: PageReadOwnership },

  // owner
  { path: PAGE_EDIT_OWNER + "/:id", component: PageEditOwner },
  { path: PAGE_SHOW_OWNER + "/:id", component: PageReadOwner },
  { path: PAGE_SHOW_OWNERS, component: PageReadOwners },

  // registry
  { path: PAGE_REGISTRY_OWNERS, component: PageRegistryOwners },
  { path: PAGE_REGISTRY_OWNERSHIPS, component: PageRegistryOwnerships },

  // entry ownership
  { path: PAGE_CREATE_ENTRY_OWNERSHIP, component: PageCreateEntryOwnership },
  {
    path: PAGE_UPDATE_ENTRY_OWNERSHIP + "/:id",
    component: PageUpdateEntryOwnership,
  },
  {
    path: PAGE_SHOW_ENTRY_OWNERSHIP + "/:id",
    component: PageShowEntryOwnership,
  },

  // questionnaire
  { path: PAGE_SHOW_QUESTIONNAIRES, component: PageShowQuestionnaires },
  {
    path: PAGE_SHOW_QUESTIONNAIRE + "/:id",
    component: PageShowQuestionnaire,
  },
  {
    path: PAGE_ANSWER_FOR_QUESTIONNAIRE + "/:title" + "/:fullname",
    component: PageAnswerForQuestionnaire,
  },
  {
    path: PAGE_RESULT_QUESTIONNAIRE + "/:title",
    component: PageResultQuestionnaire,
  },
  {
    path: PAGE_CREATE_QUESTIONNAIRE,
    component: PageCreateQuestionnaire,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
