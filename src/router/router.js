// /
import PageMain from "@/pages/PageMain.vue";
import PageRegistryOwnersRead from "@/pages/PageRegistryOwnersRead.vue";
import PageRegistryOwnershipsRead from "@/pages/PageRegistryOwnershipsRead.vue";
// questionnaire
import PageQuestionnaireCreate from "@/pages/questionnaire/PageQuestionnaireCreate.vue";
import PageQuestionnaireRead from "@/pages/questionnaire/PageQuestionnaireRead.vue";
import PageQuestionnairesReadByTitleAndByApartment from "@/pages/questionnaire/PageQuestionnairesReadByTitleAndByApartment.vue";
import PageQuestionnairesReadByTitle from "@/pages/questionnaire/PageQuestionnairesReadByTitle.vue";
import PageQuestionnairesRead from "@/pages/questionnaire/PageQuestionnairesRead.vue";
import PageQuestionnaireAnswer from "@/pages/questionnaire/PageQuestionnaireAnswer.vue";
import PageQuestionnaireResult from "@/pages/questionnaire/PageQuestionnaireResult.vue";
// owner
import PageOwnerCreate from "@/pages/owner/PageOwnerCreate.vue";
import PageOwnerUpdate from "@/pages/owner/PageOwnerUpdate.vue";
import PageOwnerRead from "@/pages/owner/PageOwnerRead.vue";
import PageOwnersRead from "@/pages/owner/PageOwnersRead.vue";
// ownership
import PageOwnershipCreate from "@/pages/ownership/PageOwnershipCreate.vue";
import PageOwnershipUpdate from "@/pages/ownership/PageOwnershipUpdate.vue";
import PageOwnershipRead from "@/pages/ownership/PageOwnershipRead.vue";
import PageOwnershipsRead from "@/pages/ownership/PageOwnershipsRead.vue";
// entry
import PageEntryCreate from "@/pages/entry/PageEntryCreate.vue";
import PageEntryUpdate from "@/pages/entry/PageEntryUpdate.vue";
import PageEntryRead from "@/pages/entry/PageEntryRead.vue";

import { createRouter, createWebHistory } from "vue-router";
import {
  //
  PAGE_MAIN,
  PAGE_REGISTRY_OWNERS,
  PAGE_REGISTRY_OWNERSHIPS,
  //questionnaire
  PAGE_QUESTIONNAIRE_ANSWER,
  PAGE_QUESTIONNAIRE_CREATE,
  PAGE_QUESTIONNAIRES_READ,
  PAGE_QUESTIONNAIRE_READ,
  PAGE_QUESTIONNAIRE_RESULT,
  // owner
  PAGE_OWNER_CREATE,
  PAGE_OWNER_UPDATE,
  PAGE_OWNER_READ,
  PAGE_OWNERS_READ,
  // ownership
  PAGE_OWNERSHIP_CREATE,
  PAGE_OWNERSHIP_UPDATE,
  PAGE_OWNERSHIP_READ,
  PAGE_OWNERSHIPS_READ,
  // entry
  PAGE_ENTRY_CREATE,
  PAGE_ENTRY_UPDATE,
  PAGE_ENTRY_READ,
} from "./apiRouter.js";

const routes = [
  // /
  { path: PAGE_MAIN, component: PageMain },
  { path: PAGE_REGISTRY_OWNERS, component: PageRegistryOwnersRead },
  {
    path: PAGE_REGISTRY_OWNERSHIPS,
    component: PageRegistryOwnershipsRead,
  },
  // ownership
  { path: PAGE_OWNERSHIP_CREATE, component: PageOwnershipCreate },
  { path: PAGE_OWNERSHIP_UPDATE + "/:id", component: PageOwnershipUpdate },
  { path: PAGE_OWNERSHIPS_READ, component: PageOwnershipsRead },
  { path: PAGE_OWNERSHIP_READ + "/:id", component: PageOwnershipRead },
  // owner
  { path: PAGE_OWNER_CREATE, component: PageOwnerCreate },
  { path: PAGE_OWNER_UPDATE + "/:id", component: PageOwnerUpdate },
  { path: PAGE_OWNER_READ + "/:id", component: PageOwnerRead },
  { path: PAGE_OWNERS_READ, component: PageOwnersRead },
  //entry
  { path: PAGE_ENTRY_CREATE, component: PageEntryCreate },
  {
    path: PAGE_ENTRY_UPDATE + "/:id",
    component: PageEntryUpdate,
  },
  {
    path: PAGE_ENTRY_READ + "/:id",
    component: PageEntryRead,
  },
  // questionnaire
  { path: PAGE_QUESTIONNAIRES_READ, component: PageQuestionnairesRead },
  {
    path: PAGE_QUESTIONNAIRE_READ,
    component: PageQuestionnaireRead + "/:id",
  },
  // ------------- start слияние 3 в 1 --------------------
  {
    path: PAGE_QUESTIONNAIRES_READ,
    component: PageQuestionnairesRead,
  },
  {
    path: PAGE_QUESTIONNAIRES_READ + "/:title",
    component: PageQuestionnairesRead,
  },
  {
    path: PAGE_QUESTIONNAIRES_READ + "/:title" + "/:apartment",
    component: PageQuestionnairesRead,
  },
  //--------------------------------------------------------------------
  // {
  //   path: PAGE_QUESTIONNAIRES_READ,
  //   component: PageQuestionnairesRead,
  // },
  // {
  //   path: PAGE_QUESTIONNAIRES_READ + "/:title",
  //   component: PageQuestionnairesReadByTitle,
  // },
  // {
  //   path: PAGE_QUESTIONNAIRES_READ + "/:title" + "/:apartment",
  //   component: PageQuestionnairesReadByTitleAndByApartment,
  // },
  //***************** end **************** */
  {
    path: PAGE_QUESTIONNAIRE_ANSWER + "/:title" + "/:fullname",
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
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
