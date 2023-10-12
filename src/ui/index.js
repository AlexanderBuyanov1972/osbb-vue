// ui elements --------------------------------------------------
// buttons ------------------------------------------------------
import ButtonDeactivate from "@/ui/elements/buttons/ButtonDeactivate.vue";
import ButtonBills from "@/ui/elements/buttons/ButtonBills.vue";
import ButtonEdit from "@/ui/elements/buttons/ButtonEdit.vue";
import ButtonCreate from "@/ui/elements/buttons/ButtonCreate.vue";
import ButtonBack from "@/ui/elements/buttons/ButtonBack.vue";
import ButtonDelete from "@/ui/elements/buttons/ButtonDelete.vue";
import ButtonSimple from "@/ui/elements/buttons/ButtonSimple.vue";
import ButtonReset from "@/ui/elements/buttons/ButtonReset.vue";
// select ---------------------------------------------------------
import SelectTitle from "@/ui/elements/selects/SelectTitle.vue";
import SelectSimple from "@/ui/elements/selects/SelectSimple.vue";
import SelectEdit from "@/ui/elements/selects/SelectEdit.vue";
// other ---------------------------------------------------------
import DialogWindow from "@/ui/elements/DialogWindow.vue";
import ImageShow from "@/ui/elements/ImageShow.vue";
import InputSimple from "@/ui/elements/InputSimple.vue";
import CheckboxSimple from "@/ui/elements/CheckboxSimple.vue";
import VueLoader from "@/ui/elements/VueLoader.vue";
import VueHr from "@/ui/elements/VueHr.vue";
import LineRadio from "@/ui/elements/LineRadio.vue";
// --------------- components -------------------
import HeaderMessages from "@/components/HeaderMessages.vue";
import HeaderPayment from "@/components/HeaderPayment.vue";
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
import DebtItem from "@/itemsAndLists/DebtItem.vue";
import PaymentItem from "@/itemsAndLists/PaymentItem.vue";
import OwnerItem from "@/itemsAndLists/OwnerItem.vue";
import OwnershipItem from "@/itemsAndLists/OwnershipItem.vue";
import QuestionnaireItem from "@/itemsAndLists/QuestionnaireItem.vue";
// --------------- pages blocks edit --------------------------------
import BlockEditPayment from "@/pages/blocks/edit/BlockEditPayment.vue";
import BlockEditPhoto from "@/pages/blocks/edit/BlockEditPhoto.vue";
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
// modals -----------------------
import ModalAction from "@/modals/ModalAction";

export default [
  // ---- elements -----
  DialogWindow,
  ImageShow,
  ButtonDeactivate,
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
  HeaderPayment,
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
  DebtItem,
  PaymentItem,
  OwnerItem,
  OwnershipItem,
  QuestionnaireItem,
  // ---- update -----
  BlockEditPayment,
  BlockEditVehicle,
  BlockEditPlaceWork,
  BlockEditAddress,
  BlockEditOwnership,
  BlockEditOwner,
  BlockEditPassport,
  BlockEditShare,
  BlockEditPhoto,
  // ---- read -----
  BlockGetVehicle,
  BlockGetPlaceWork,
  BlockGetAddress,
  BlockGetOwnership,
  BlockGetOwner,
  BlockGetPassport,
  // modals -----------
  ModalAction,
];
