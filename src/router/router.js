// /
import PageNotFound from "@/pages/PageNotFound.vue";
import PageMain from "@/pages/PageMain.vue";
import PageRegistration from "@/pages/PageRegistration.vue";
import PageLogin from "@/pages/PageLogin.vue";
import PageRegistryOwners from "@/pages/PageRegistryOwners.vue";
import PageRegistryOwnerships from "@/pages/PageRegistryOwnerships.vue";
import PageUsefulQueries from "@/pages/PageUsefulQueries.vue";
// survey
import PageSurveyCreate from "@/pages/survey/PageSurveyCreate.vue";
import PageSurveyGet from "@/pages/survey/PageSurveyGet.vue";
import PageSurveysGet from "@/pages/survey/PageSurveysGet.vue";
import PageSurveyAnswer from "@/pages/survey/PageSurveyAnswer.vue";
import PageSurveyResult from "@/pages/survey/PageSurveyResult.vue";
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
import PageDebtByApartment from "@/pages/payment/PageDebtByApartment.vue";
import PageBalanceDetailsByApartment from "@/pages/payment/PageBalanceDetailsByApartment.vue";
import PageBalanceHouse from "@/pages/payment/PageBalanceHouse.vue";
import PageRates from "@/pages/payment/PageRates.vue";

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
  PAGE_USEFUL_QUERIES,
  //survey
  PAGE_SURVEY_ANSWER,
  PAGE_SURVEY_CREATE,
  PAGE_SURVEYS_GET,
  PAGE_SURVEY_GET,
  PAGE_SURVEY_RESULT,
  // owner
  PAGE_OWNER_GET,
  PAGE_OWNERS_GET,
  PAGE_OWNER_UPDATE,
  // ownership
  PAGE_OWNERSHIP_GET,
  PAGE_OWNERSHIPS_GET,
  PAGE_OWNERSHIP_UPDATE,
  // entry
  PAGE_RECORD_CREATE,
  PAGE_RECORD_UPDATE,
  PAGE_RECORD_GET,
  // payment --------
  PAGE_PAYMENT_CREATE,
  PAGE_PAYMENTS_GET,
  PAGE_BALANCE_OWNERSHIP,
  PAGE_BALANCE_DEBT_DETAILS,
  PAGE_BALANCE_HOUSE,
  PAGE_RATES,
} from "@/router/apiRouter";

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
  { path: PAGE_RECORD_CREATE, component: PageRecordCreate },
  // update
  // слияние 2 в 1 --------------------
  {
    path: PAGE_RECORD_UPDATE + "/:id",
    component: PageRecordUpdate,
  },
  {
    path: PAGE_RECORD_UPDATE,
    component: PageRecordUpdate,
  },
  // get --------------------------------------------
  {
    path: PAGE_RECORD_GET + "/:id",
    component: PageRecordGet,
  },
  // survey ----------------------------------------------------
  {
    path: PAGE_SURVEY_GET,
    component: PageSurveyGet + "/:id",
  },
  // слияние 3 в 1 --------------------
  {
    path: PAGE_SURVEYS_GET,
    component: PageSurveysGet,
  },
  {
    path: PAGE_SURVEYS_GET + "/:title",
    component: PageSurveysGet,
  },
  {
    path: PAGE_SURVEYS_GET + "/:title/:id",
    component: PageSurveysGet,
  },
  // ----------------------------------------------------------
  {
    path: PAGE_SURVEY_ANSWER + "/:title" + "/:fullName" + "/:apartment",
    component: PageSurveyAnswer,
  },
  {
    path: PAGE_SURVEY_RESULT + "/:title",
    component: PageSurveyResult,
  },
  {
    path: PAGE_SURVEY_CREATE,
    component: PageSurveyCreate,
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
    path: PAGE_BALANCE_OWNERSHIP,
    component: PageDebtByApartment,
  },
  {
    path: PAGE_BALANCE_DEBT_DETAILS + "/:id",
    component: PageBalanceDetailsByApartment,
  },
  {
    path: PAGE_BALANCE_HOUSE,
    component: PageBalanceHouse,
  },
  // rates ------------------
  {
    path: PAGE_RATES,
    component: PageRates,
  },
  // query --------------------
  {
    path: PAGE_USEFUL_QUERIES,
    component: PageUsefulQueries,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
