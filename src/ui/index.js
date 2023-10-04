// --------------- ui elements --------------------------------
import ButtonBills from "@/ui/elements/ButtonBills.vue";
import ButtonEdit from "@/ui/elements/ButtonEdit.vue";
import ButtonCreate from "@/ui/elements/ButtonCreate.vue";
import ButtonBack from "@/ui/elements/ButtonBack.vue";
import ButtonDelete from "@/ui/elements/ButtonDelete.vue";
import ButtonSimple from "@/ui/elements/ButtonSimple.vue";
import ButtonReset from "@/ui/elements/ButtonReset.vue";
import InputSimple from "@/ui/elements/InputSimple.vue";
import SelectTitle from "@/ui/elements/SelectTitle.vue";
import SelectSimple from "@/ui/elements/SelectSimple.vue";
import SelectEdit from "@/ui/elements/SelectEdit.vue";
import CheckboxSimple from "@/ui/elements/CheckboxSimple.vue";
import VueLoader from "@/ui/elements/VueLoader.vue";
import VueHr from "@/ui/elements/VueHr.vue";
import LineRadio from "@/ui/elements/LineRadio.vue";
// --------------- components -------------------
import HeaderMessages from "@/components/HeaderMessages.vue";
import HeaderBills from "@/components/HeaderBills.vue";
import HeaderPolls from "@/components/HeaderPolls.vue";
import HeaderDataOwners from "@/components/HeaderDataOwners.vue";
import HeaderDataOwnerships from "@/components/HeaderDataOwnerships.vue";
import LineAddress from "@/components/LineAddress.vue";
import LineHeader from "@/components/LineHeader.vue";
// --------------- pages blocks -------------------
import BlockInformationAboutHouse from "@/pages/blocks/BlockInformationAboutHouse.vue";
import BlockInformationQuestionnaire from "@/pages/blocks/BlockInformationQuestionnaire.vue";
import BlockErrorMessage from "@/pages/blocks/BlockErrorMessage.vue";
import BlockSearchApartment from "@/pages/blocks/BlockSearchApartment.vue";
// --------------- items and lists -------------------
import OwnerItem from "@/itemsAndLists/OwnerItem.vue";
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
import QuestionnaireItem from "@/itemsAndLists/QuestionnaireItem.vue";
// --------------- pages blocks edit --------------------------------
import BlockEditShare from "@/pages/blocks/edit/BlockEditShare.vue";
import BlockEditVehicle from "@/pages/blocks/edit/BlockEditVehicle.vue";
import BlockEditPlaceWork from "@/pages/blocks/edit/BlockEditPlaceWork.vue";
import BlockEditOwner from "@/pages/blocks/edit/BlockEditOwner.vue";
import BlockEditPassport from "@/pages/blocks/edit/BlockEditPassport.vue";
import BlockEditOwnership from "@/pages/blocks/edit/BlockEditOwnership.vue";
import BlockEditAddress from "@/pages/blocks/edit/BlockEditAddress.vue";
// --------------- pages blocks read --------------------------------
import BlockGetVehicle from "@/pages/blocks/get/BlockGetVehicle.vue";
import BlockGetPlaceWork from "@/pages/blocks/get/BlockGetPlaceWork.vue";
import BlockGetOwner from "@/pages/blocks/get/BlockGetOwner.vue";
import BlockGetPassport from "@/pages/blocks/get/BlockGetPassport.vue";
import BlockGetOwnership from "@/pages/blocks/get/BlockGetOwnership.vue";
import BlockGetAddress from "@/pages/blocks/get/BlockGetAddress.vue";

export default [
  // ---- elements -----
  ButtonBills,
  InputSimple,
  ButtonEdit,
  ButtonCreate,
  ButtonBack,
  ButtonDelete,
  ButtonSimple,
  ButtonReset,
  SelectSimple,
  SelectTitle,
  SelectEdit,
  CheckboxSimple,
  VueLoader,
  VueHr,
  LineRadio,

  // ----------------
  HeaderBills,
  HeaderDataOwners,
  HeaderDataOwnerships,
  HeaderPolls,
  HeaderMessages,
  LineAddress,
  LineHeader,
  BlockErrorMessage,
  BlockInformationAboutHouse,
  BlockInformationQuestionnaire,
  BlockSearchApartment,
  // ---- items ---------
  OwnerItem,
  OwnershipItem,
  QuestionnaireItem,
  // ---- update -----
  BlockEditVehicle,
  BlockEditPlaceWork,
  BlockEditAddress,
  BlockEditOwnership,
  BlockEditOwner,
  BlockEditPassport,
  BlockEditShare,
  // ---- read -----
  BlockGetVehicle,
  BlockGetPlaceWork,
  BlockGetAddress,
  BlockGetOwnership,
  BlockGetOwner,
  BlockGetPassport,
];
