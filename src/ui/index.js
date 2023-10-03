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
// --------------- items and lists -------------------
import OwnerItem from "@/itemsAndLists/OwnerItem.vue";
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
import QuestionnaireItem from "@/itemsAndLists/QuestionnaireItem.vue";
// --------------- pages blocks create --------------------------------
import BlockCreateShare from "@/pages/blocks/create/BlockCreateShare.vue";
import BlockCreateVehicle from "@/pages/blocks/create/BlockCreateVehicle.vue";
import BlockCreatePlaceWork from "@/pages/blocks/create/BlockCreatePlaceWork.vue";
import BlockCreateOwner from "@/pages/blocks/create/BlockCreateOwner.vue";
import BlockCreatePassport from "@/pages/blocks/create/BlockCreatePassport.vue";
import BlockCreateOwnership from "@/pages/blocks/create/BlockCreateOwnership.vue";
import BlockCreateAddress from "@/pages/blocks/create/BlockCreateAddress.vue";
// --------------- pages blocks edit --------------------------------
import BlockUpdateShare from "@/pages/blocks/update/BlockUpdateShare.vue";
import BlockUpdateVehicle from "@/pages/blocks/update/BlockUpdateVehicle.vue";
import BlockUpdatePlaceWork from "@/pages/blocks/update/BlockUpdatePlaceWork.vue";
import BlockUpdateOwner from "@/pages/blocks/update/BlockUpdateOwner.vue";
import BlockUpdatePassport from "@/pages/blocks/update/BlockUpdatePassport.vue";
import BlockUpdateOwnership from "@/pages/blocks/update/BlockUpdateOwnership.vue";
import BlockUpdateAddress from "@/pages/blocks/update/BlockUpdateAddress.vue";
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
  // ---- items ---------
  OwnerItem,
  OwnershipItem,
  QuestionnaireItem,
  // ---- create -----
  BlockCreateShare,
  BlockCreatePlaceWork,
  BlockCreateAddress,
  BlockCreateOwnership,
  BlockCreateOwner,
  BlockCreatePassport,
  BlockCreateVehicle,
  // ---- update -----
  BlockUpdateVehicle,
  BlockUpdatePlaceWork,
  BlockUpdateAddress,
  BlockUpdateOwnership,
  BlockUpdateOwner,
  BlockUpdatePassport,
  BlockUpdateShare,
  // ---- read -----
  BlockGetVehicle,
  BlockGetPlaceWork,
  BlockGetAddress,
  BlockGetOwnership,
  BlockGetOwner,
  BlockGetPassport,
];
