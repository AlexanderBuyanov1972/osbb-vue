// /
import PageNotFound from "@/pages/PageNotFound.vue";
import PageMain from "@/pages/PageMain.vue";
import PageRegistration from "@/pages/PageRegistration.vue";
import PageLogin from "@/pages/PageLogin.vue";
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
import PageOwnerUpdate from "@/pages/owner/PageOwnerUpdate.vue";
// ownership
import PageOwnershipUpdate from "@/pages/ownership/PageOwnershipUpdate.vue";
import PageOwnershipGet from "@/pages/ownership/PageOwnershipGet.vue";
import PageOwnershipsGet from "@/pages/ownership/PageOwnershipsGet.vue";
// record
import PageRecordCreate from "@/pages/record/PageRecordCreate.vue";
import PageRecordUpdate from "@/pages/record/PageRecordUpdate.vue";
import PageRecordGet from "@/pages/record/PageRecordGet.vue";
// payment -----------------------
import PagePaymentCreate from "@/pages/payment/PagePaymentCreate.vue";
import PagePaymentsGet from "@/pages/payment/PagePaymentsGet.vue";
import PageBalanceByApartment from "@/pages/payment/PageBalanceByApartment.vue";
import PageBalanceDetailsByApartment from "@/pages/payment/PageBalanceDetailsByApartment.vue";
import PageBalanceHouse from "@/pages/payment/PageBalanceHouse.vue";

// ---------------------------------------------------------
import { createRouter, createWebHistory } from "vue-router";
import {
  //
  PAGE_NOT_FOUND,
  PAGE_MAIN,
  PAGE_REGISTRATION,
  PAGE_LOGIN,
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
  PAGE_OWNER_UPDATE,
  // ownership
  PAGE_OWNERSHIP_GET,
  PAGE_OWNERSHIPS_GET,
  PAGE_OWNERSHIP_UPDATE,
  // entry
  PAGE_ENTRY_CREATE,
  PAGE_ENTRY_UPDATE,
  PAGE_ENTRY_GET,
  // payment --------
  PAGE_PAYMENT_CREATE,
  PAGE_PAYMENTS_GET,
  PAGE_BALANCE_ROOM,
  PAGE_BALANCE_ROOM_DETAILS,
  PAGE_BALANCE_HOUSE,
} from "./apiRouter.js";

const routes = [
  // /
  { path: PAGE_MAIN, component: PageMain },
  { path: PAGE_REGISTRATION, component: PageRegistration },
  { path: PAGE_LOGIN, component: PageLogin },
  { path: PAGE_NOT_FOUND, component: PageNotFound },
  { path: PAGE_REGISTRY_OWNERS, component: PageRegistryOwners },
  {
    path: PAGE_REGISTRY_OWNERSHIPS,
    component: PageRegistryOwnerships,
  },
  // ownership
  { path: PAGE_OWNERSHIPS_GET, component: PageOwnershipsGet },
  { path: PAGE_OWNERSHIP_GET + "/:id", component: PageOwnershipGet },
  { path: PAGE_OWNERSHIP_UPDATE + "/:id", component: PageOwnershipUpdate },
  // owner
  { path: PAGE_OWNER_UPDATE + "/:id", component: PageOwnerUpdate },
  { path: PAGE_OWNER_GET + "/:id", component: PageOwnerGet },
  { path: PAGE_OWNERS_GET, component: PageOwnersGet },
  //entry
  { path: PAGE_ENTRY_CREATE, component: PageRecordCreate },
  // update
  {
    path: PAGE_ENTRY_UPDATE + "/:id",
    component: PageRecordUpdate,
  },
  // слияние 2 в 1 --------------------
  {
    path: PAGE_ENTRY_UPDATE,
    component: PageRecordUpdate,
  },
  {
    path: PAGE_ENTRY_GET + "/:id",
    component: PageRecordGet,
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
    path: PAGE_QUESTIONNAIRE_ANSWER + "/:title" + "/:fullName" + "/:apartment",
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
  // payment ------------------------------------
  {
    path: PAGE_PAYMENTS_GET,
    component: PagePaymentsGet,
  },
  {
    path: PAGE_PAYMENT_CREATE,
    component: PagePaymentCreate,
  },
  {
    path: PAGE_BALANCE_ROOM,
    component: PageBalanceByApartment,
  },
  {
    path: PAGE_BALANCE_ROOM_DETAILS + "/:apartment",
    component: PageBalanceDetailsByApartment,
  },
  {
    path: PAGE_BALANCE_HOUSE,
    component: PageBalanceHouse,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
