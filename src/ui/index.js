// --------------- ui elements --------------------------------
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
import BlockCreateOwner from "@/pages/blocks/create/BlockCreateOwner.vue";
import BlockCreatePassport from "@/pages/blocks/create/BlockCreatePassport.vue";
import BlockCreateOwnership from "@/pages/blocks/create/BlockCreateOwnership.vue";
import BlockCreateAddress from "@/pages/blocks/create/BlockCreateAddress.vue";
// --------------- pages blocks edit --------------------------------
import BlockEditOwner from "@/pages/blocks/edit/BlockEditOwner.vue";
import BlockEditPassport from "@/pages/blocks/edit/BlockEditPassport.vue";
import BlockEditOwnership from "@/pages/blocks/edit/BlockEditOwnership.vue";
import BlockEditAddress from "@/pages/blocks/edit/BlockEditAddress.vue";
// --------------- pages blocks read --------------------------------
import BlockReadOwner from "@/pages/blocks/read/BlockReadOwner.vue";
import BlockReadPassport from "@/pages/blocks/read/BlockReadPassport.vue";
import BlockReadOwnership from "@/pages/blocks/read/BlockReadOwnership.vue";
import BlockReadAddress from "@/pages/blocks/read/BlockReadAddress.vue";

export default [
  // ---- elements -----
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
  BlockCreateAddress,
  BlockCreateOwnership,
  BlockCreateOwner,
  BlockCreatePassport,
  // ---- edit -----
  BlockEditAddress,
  BlockEditOwnership,
  BlockEditOwner,
  BlockEditPassport,
  // ---- read -----
  BlockReadAddress,
  BlockReadOwnership,
  BlockReadOwner,
  BlockReadPassport,
];
