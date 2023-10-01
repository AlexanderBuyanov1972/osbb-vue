// /
import PageMain from "@/pages/PageMain.vue";
import PageRegistryOwners from "@/pages/PageRegistryOwners.vue";
import PageRegistryOwnerships from "@/pages/PageRegistryOwnerships.vue";
// questionnaire
import PageQuestionnaireCreate from "@/pages/questionnaire/PageQuestionnaireCreate.vue";
import PageQuestionnaireGet from "@/pages/questionnaire/PageQuestionnaireGet.vue";
import PageQuestionnairesGet from "@/pages/questionnaire/PageQuestionnairesGet.vue";
import PageQuestionnaireAnswer from "@/pages/questionnaire/PageQuestionnaireAnswer.vue";
import PageQuestionnaireResult from "@/pages/questionnaire/PageQuestionnaireResult.vue";
// owner
import PageOwnerGet from "@/pages/owner/PageOwnerGet.vue";
import PageOwnersGet from "@/pages/owner/PageOwnersGet.vue";
// ownership
import PageOwnershipGet from "@/pages/ownership/PageOwnershipGet.vue";
import PageOwnershipsGet from "@/pages/ownership/PageOwnershipsGet.vue";
// entry
import PageEntryCreate from "@/pages/entry/PageEntryCreate.vue";
import PageEntryUpdate from "@/pages/entry/PageEntryUpdate.vue";
import PageEntryGet from "@/pages/entry/PageEntryGet.vue";
// bills
import PageBillsGet from "@/pages/bills/PageBillsGet.vue";

import { createRouter, createWebHistory } from "vue-router";
import {
  //
  PAGE_MAIN,
  PAGE_REGISTRY_OWNERS,
  PAGE_REGISTRY_OWNERSHIPS,
  //questionnaire
  PAGE_QUESTIONNAIRE_ANSWER,
  PAGE_QUESTIONNAIRE_CREATE,
  PAGE_QUESTIONNAIRES_GET,
  PAGE_QUESTIONNAIRE_GET,
  PAGE_QUESTIONNAIRE_RESULT,
  // owner
  PAGE_OWNER_GET,
  PAGE_OWNERS_GET,
  // ownership
  PAGE_OWNERSHIP_GET,
  PAGE_OWNERSHIPS_GET,
  // entry
  PAGE_ENTRY_CREATE,
  PAGE_ENTRY_UPDATE,
  PAGE_ENTRY_GET,
  //bills
  PAGE_BILLS_GET,
} from "./apiRouter.js";

const routes = [
  // /
  { path: PAGE_MAIN, component: PageMain },
  { path: PAGE_REGISTRY_OWNERS, component: PageRegistryOwners },
  {
    path: PAGE_REGISTRY_OWNERSHIPS,
    component: PageRegistryOwnerships,
  },
  // ownership
  { path: PAGE_OWNERSHIPS_GET, component: PageOwnershipsGet },
  { path: PAGE_OWNERSHIP_GET + "/:id", component: PageOwnershipGet },
  // owner
  { path: PAGE_OWNER_GET + "/:id", component: PageOwnerGet },
  { path: PAGE_OWNERS_GET, component: PageOwnersGet },
  //entry
  { path: PAGE_ENTRY_CREATE, component: PageEntryCreate },
  // update
  {
    path: PAGE_ENTRY_UPDATE + "/:id",
    component: PageEntryUpdate,
  },
  // слияние 2 в 1 --------------------
  {
    path: PAGE_ENTRY_UPDATE,
    component: PageEntryUpdate,
  },
  {
    path: PAGE_ENTRY_GET + "/:id",
    component: PageEntryGet,
  },
  // questionnaire
  { path: PAGE_QUESTIONNAIRES_GET, component: PageQuestionnairesGet },
  {
    path: PAGE_QUESTIONNAIRE_GET,
    component: PageQuestionnaireGet + "/:id",
  },
  // слияние 3 в 1 --------------------
  {
    path: PAGE_QUESTIONNAIRES_GET,
    component: PageQuestionnairesGet,
  },
  {
    path: PAGE_QUESTIONNAIRES_GET + "/:title",
    component: PageQuestionnairesGet,
  },
  {
    path: PAGE_QUESTIONNAIRES_GET + "/:title/:apartment",
    component: PageQuestionnairesGet,
  },
  // ----------------------------------------------------------
  {
    path: PAGE_QUESTIONNAIRE_ANSWER + "/:title" + "/:fullName",
    component: PageQuestionnaireAnswer,
  },
  {
    path: PAGE_QUESTIONNAIRE_RESULT + "/:title",
    component: PageQuestionnaireResult,
  },
  {
    path: PAGE_QUESTIONNAIRE_CREATE,
    component: PageQuestionnaireCreate,
  },
  // bills----------------------------------------
  {
    path: PAGE_BILLS_GET,
    component: PageBillsGet,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
